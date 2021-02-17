import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';


// ! A range check is necessary
const moves = ['Forwards', 'Backwards', 'Left', 'Right', 'A Button', 'B Button'];
const numOfPlayers = 10;
var gameList = [];
var nameList = {
  0: "Glenda",
  1: "Florence",
  2: "Lionel",
  3: "Tiffany",
  4: "Orson",
  5: "Todd",
  6: "Ronny",
  7: "Margaretta",
  8: "Alice",
  9: "Bob",
};

function printSplash() {
  console.log("────────▄███████████▄─────────────────────────────────────");
  console.log("─────▄███▓▓▓▓▓▓▓▓▓▓▓███▄ ─────────────────────────────────");
  console.log("────███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███                                 ");
  console.log("───██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██                                ");
  console.log("──██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██                               ");
  console.log("─██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██                              ");
  console.log("██▓▓▓▓▓▓▓▓▓███████▓▓▓▓▓▓▓▓▓██                             ");
  console.log("██▓▓▓▓▓▓▓▓██░░░░░██▓▓▓▓▓▓▓▓██                             ");
  console.log("██▓▓▓▓▓▓▓██░░███░░██▓▓▓▓▓▓▓██                             ");
  console.log("███████████░░███░░███████████        POKÉCHAIN APP        ");
  console.log("██░░░░░░░██░░███░░██░░░░░░░██     written with Reach      ");
  console.log("██░░░░░░░░██░░░░░██░░░░░░░░██                             ");
  console.log("██░░░░░░░░░███████░░░░░░░░░██                             ");
  console.log("─██░░░░░░░░░░░░░░░░░░░░░░░██                              ");
  console.log("──██░░░░░░░░░░░░░░░░░░░░░██                               ");
  console.log("───██░░░░░░░░░░░░░░░░░░░██                                ");
  console.log("────███░░░░░░░░░░░░░░░███                                 ");
  console.log("─────▀███░░░░░░░░░░░███▀ ─────────────────────────────────");
  console.log("────────▀███████████▀─────────────────────────────────────\n\n");
}

function printMoves () {
  console.log("\n\n,-------------------------.");
  console.log("(_\\                       \\");
  console.log("   |     Moves List:      |");
  console.log("   |                      |");
  console.log("   |    1 - Up            |");
  console.log("   |    2 - Down          |");
  console.log("   |    3 - Left          |");
  console.log("   |    4 - Right         |");
  console.log("   |    5 - A Button      |");
  console.log("   |    6 - B Button      |");
  console.log(" (_/______________________/\n");
}

(async () => {
  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(100);

  const observer = await stdlib.newTestAccount(startingBalance);
  const playerArray = await Promise.all(
    Array.from({length:10 }, () => stdlib.newTestAccount(startingBalance))
  );

  const ctcObserver = observer.deploy(backend);
  
  printSplash();

  await Promise.all([
    backend.Observer(ctcObserver, {
      getParams: async () => {
        const moveLimit = await ask("How many turns there will be?", parseInt);
        const payoutPerDuration = await ask("What is the unit cost of the move?", parseInt);
        return ({
          payoutPerDuration: payoutPerDuration,
          moveLimit: moveLimit
        });
      },
      observeMove: (movesList) => {
        // * Operate on array here * //
        // TODO: API call POST(move) setMove
        console.log(`\n-----\nObserver observed the moveList with length ${gameList.length}"`);  
        console.log(`Moves in UInt: ${gameList} \n-----\n`);     
        gameList = [];
      },  
      observeGameFinish: () => {
        console.log("Game has finished");
        // TODO: API call POST() gameFinish
      },
      observeTurnStart: (turnNum) => {
        console.log(`\n-----\nStart of Turn ${turnNum}\n-----\n`);
      }
    })
  ].concat(playerArray.map((player, i) => {
    const ctcPlayer = player.attach(backend, ctcObserver.getInfo());

    return backend.Player(ctcPlayer, {
      acceptMove: async (payoutPerDuration) => {
        const response = await ask(
          `You need to pay ${payoutPerDuration} ALGO for every second of input.\nDo you want to make a move? (y/n)\n>> `,
          yesno
        );

        if (!response) {
          const name = (i in nameList) ? nameList[i] : "Make a function here";
          console.log(`\n${name} (Player ${i}) refused to make a move.`);
        }

        return response;
      },
      getMove: async () => {
        const name = (i in nameList) ? nameList[i] : "Make a function here";
        
        printMoves();

        const move = await ask(
          "Which move do you want to play?",
          parseInt
        );
        // TODO: 

        const duration = await ask(
          "How long do you want your input to be?",
          parseInt
        );

        console.log(`${name} (Player ${i}) played to move "${moves[move-1]}"`);
        gameList.push(move);
        return [move, duration, duration*move];
      }
    });
  })));



  console.log('[DEBUG] Game has finished.');
})();
