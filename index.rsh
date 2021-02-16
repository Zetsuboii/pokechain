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

const ObserverInterface = {
  getParams: Object({
    payoutPerDuration: UInt,
    moveLimit: UInt,
  }),
  observeMove: Fun([UInt], Null),  
  observeGameFinish: Fun([], Null)
};

const PlayerInterface = {
  confirmMove: Fun([UInt], Tuple(Bool, UInt, UInt, UInt))
};

export const main = Reach.App(
  {}, [
    ['Observer', ObserverInterface], 
    ['class', 'Player', PlayerInterface]
  ], 
  (Observer, Player) => {
    Observer.only(() => {
      const _params = interact.getParams;
      // !! Check params.moveLimit 
      assume(_params.moveLimit > 0);
      const [payoutPerDuration, moveLimit] = declassify([_params.payoutPerDuration, _params.moveLimit]);
    });
    Observer.publish(payoutPerDuration, moveLimit);

    require(moveLimit >= 1);

    var game = ({
      movePlayed: 0,
      totalPayout: 0
    });
    invariant(balance() == game.totalPayout);
    while(game.movePlayed < moveLimit) {
        commit();

        Player.only(() => {
          const [_response, _move, _duration, _toPay] = interact.confirmMove(payoutPerDuration);
          assume((_response && (_toPay > 0)) || (!_response && (_toPay == 0)));
          const [response, move, duration, toPay] = declassify([_response, _move, _duration, _toPay]);
        });
        Player.publish(response, move, duration, toPay)
          .pay(toPay);

        commit();

        Observer.only(() => {
          if(response) {
            interact.observeMove(move);
          }
        });
        Observer.publish();

        game = {
          movePlayed: response ? add(game.movePlayed, 1) : game.movePlayed,
          totalPayout: add(game.totalPayout, toPay)
        };
        continue;
    }

    transfer(balance()).to(Observer);
    commit();
  }
);