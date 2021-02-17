'reach 0.1';

/*
  * Problem Analysis
  - Who involved in this application
  1. step: 1 observer and 10 players
  2. step: 1 observer and N players

  - What info do they know at start?
  Observer has the game and knows the payout for duration
  Players know the moves and duration they will play

  - What info they will know in the application?
  Players will learn the payout for every duration.
  They will decide the move and decision and send it to Observer, paying the amount
  Observer will learn players moves and durations.

  - What funds will change ownership?
  1. step: duration * payoutPerDuration is transactioned every time.
  At the end of the game balance is transferred to a charity.

  2. step: duration * payoutPerDuration is transactioned every time.
  Every time an important step happens in game, the last move maker takes the money.

  * Data Definition
  duration: UInt
  move: UInt
  payoutPerDuration: UInt
  moveLimit: UInt

  * Participate Interfaces
  ? Observer 
  {
    getParams = {
      payoutPerDuration: UInt,
      moveLimit = UInt
    }
  }

  ? Player 
  {
    confirmMove = Fun([UInt], Tuple(Bool, (move) UInt, (duration) UInt, (toPay) UInt))
  }

  * Communication Construction
  -> Observer sets the payoutPerDuration and moveLimit,
  -> While total moves are less than moveLimit:
    -> Ask particioant to play a move
    -> If player accepts:
      -> Pay the price to consensus, publish the move
    -> Else
      -> Let others know player refuses

  -> Pay the balance to observer.
  Finish the program
  
*/

// ! Code needs to be brutally refactored
/*
  * For now totalTurns must be defined before-hand.
  * Also frontend must define the player count either 
    ? - 1. By embeding it to the frontend code
    ? - 2. By asking it before the game starts

  * Every turn players add their moves to a list in the frontend and observer
  * pushes this list to the server by an API call (Not implemented yet).
  
  * For test purposes players return random numbers
  
  TODO: Make players return single values, store it in the frontend

  TODO: (Experimental) Define an another function for acceptin to make a move. 
  
 */ 

const totalTurns = 10;

const ObserverInterface = {
  getParams: Fun([],Object({
    payoutPerDuration: UInt,
    moveLimit: UInt,
  })),
  observeMove: Fun([Array(UInt, totalTurns)], Null),  
  observeGameFinish: Fun([], Null),
  observeTurnStart: Fun([UInt], Null),
};

// TODO: Add acceptMove function and refactor confirmMove to getMove
const PlayerInterface = {
  acceptMove: Fun([UInt], Bool),
  getMove: Fun([], Tuple( UInt, UInt, UInt))
};

export const main = Reach.App(
  {}, [
    ['Observer', ObserverInterface], 
    ['class', 'Player', PlayerInterface]
  ], 
  (Observer, Player) => {
    // TODO: Clean moveLimit in this version.
    // ! Don't touch the moveLimit instead, get rid of totalMove by making frontend more dominant
    Observer.only(() => {
      const _params = interact.getParams();
      assume(_params.moveLimit > 0);
      const [payoutPerDuration, moveLimit] = declassify([_params.payoutPerDuration, _params.moveLimit]);
    });
    Observer.publish(payoutPerDuration, moveLimit);

    require(moveLimit >= 1);

    var game = ({
      moveList: Array.replicate(totalTurns, 0),
      movePlayed: 0,
      totalPayout: 0
    });
    invariant(balance() == game.totalPayout);
    while(game.movePlayed < totalTurns) {
        commit();

        Observer.only(()=>{interact.observeTurnStart(game.movePlayed)});
        Observer.publish();
        commit();

        // TODO: (After interface update) Rearrange the arrow function to branch depending if player accepts or not.  
        Player.only(() => {
          const response = declassify(interact.acceptMove(payoutPerDuration));
        });

        Player.publish(response);

        if(response) {
          // Player definitely sends a move a duration and to Pay
          commit();

          // TODO: race(Player).publish(move, duration, toPay);

          Player.only(() => {
            const [_move, _duration, _toPay] = interact.getMove();
            assume(_move > 0 && _duration > 0 && _toPay > 0, "[ERROR] Invalid Move");
            const [move, duration, toPay] = declassify([_move, _duration, _toPay]);
          });
          Player.publish(move, duration, toPay)
            .pay(toPay);;

          const afterGame = {
            moveList: game.moveList.set(game.movePlayed, move),
            movePlayed: add(game.movePlayed, 1),
            totalPayout: add(game.totalPayout, toPay)
          };

          commit();

          Observer.only(() => {
            if(response) {
              interact.observeMove(afterGame.moveList);
            }
          });
          Observer.publish();  

          //? If needed we can make it more clear that every player in the dApp observes the moveList
          //? by committing and adding a Player.only statement

          game = afterGame;

          continue;
        } 
        else {
          const afterGame = {
            moveList: game.moveList,
            movePlayed: add(game.movePlayed, 1),
            totalPayout: game.totalPayout
          };
          game = afterGame;
          continue;
        }
    }

    transfer(balance()).to(Observer);
    commit();
  }
);
