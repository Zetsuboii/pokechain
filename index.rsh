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
  
  FINISHED: Make players return single values, store it in the frontend

  FINISHED: (IMPORTANT) Make players get the list from Observer, 
  change it and then send it back to Observer. Make interface for that
  Make it work in the while-loop(I guess)

  FINISHED: Try to observe one move at a time (again)

  FINISHED: Rethink the turn concept in the game.
  Maybe while is looping every move.

  FINISHED: (SECOND STEP) Add race to the game
 */

const timeoutBlocks = 30;

const ObserverInterface = {
  getParams: Fun([], Object({
    payoutPerDuration: UInt,
    moveLimit: UInt,
  })),
  observeMove: Fun([UInt, UInt, UInt, Bytes(32)], Null),
  observeGameFinish: Fun([], Null),
  observeTurnStart: Fun([UInt], Null),
  observeTimeout: Fun([], Null)
};

const PlayerInterface = {
  acceptMove: Fun([UInt], Bool),
  getMove: Fun([], Tuple(UInt, UInt, Bytes(32))),
};

export const main = Reach.App(
  {}, [
  ['Observer', ObserverInterface],
  ['class', 'Player', PlayerInterface]
],
  (Observer, Player) => {
    Observer.only(() => {
      const _params = interact.getParams();
      assume(_params.moveLimit > 0);
      const [payoutPerDuration, moveLimit] = declassify([_params.payoutPerDuration, _params.moveLimit]);
    });
    Observer.publish(payoutPerDuration, moveLimit);
    require(moveLimit > 0);

    //commit();

    const [movePlayed, totalPayout] =
      parallel_reduce([0, 0])
        .invariant(balance() == totalPayout)
        .while(movePlayed < moveLimit)
        .case(Player,
          (() => {
            const [_move, _duration, _name] = interact.getMove();
            assume(_move > 0 && _duration > 0, "[ERROR] Invalid Move");
            const [move, duration, name] = declassify([_move, _duration, _name]);
            const response = declassify(interact.acceptMove(payoutPerDuration));
            return ({
              msg: [move, duration, mul(duration, payoutPerDuration), response, name],
            });
          }), //* Local step
          (([m, d, tp, r, n]) => 0), //* Pay step
          (([m, d, tp, r, n]) => { // * Consensus step
            if (r) {
              commit();
              Observer.only(() => {
                interact.observeMove(m, d, tp, n);
              });
              Observer.publish();

              commit();
              Player.only(() => { });
              Player.publish().pay(tp);
              return [add(movePlayed, 1), add(totalPayout, tp)];
            } else {
              return [movePlayed, totalPayout];
            }
          })
        )
        .timeout(timeoutBlocks, () => {
          Observer.only(() => interact.observeTimeout());
          Observer.publish();
          return [movePlayed, totalPayout];
        });

    //? If needed we can make it more clear that every player in the dApp observes the moveList
    //? by committing and adding a Player.only statement

    transfer(balance()).to(Observer);
    commit();

    Observer.only(() => {
      interact.observeGameFinish();
    });
    exit();
  }
);
