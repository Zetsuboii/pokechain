import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

// ! A range check is necessary
const moves = ['Up', 'Down', 'Left', 'Right', 'A Button', 'B Button'];
const numOfPlayers = 10;

// TODO: add const = movesPlayed for players side to debug

var moveList = [];

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

function printMoves() {
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

async function getName() {
  let name = await ask("Please enter your name", ((x) => x));
  return name;
}

(async () => {
  printSplash();
  console.log("Starting iteration v1.09");
  const stdlib = await loadStdlib();

  const isObserver = await ask(
    `Are you the Observer?`,
    yesno
  );
  const who = isObserver ? 'Observer' : 'Player';

  console.log(`\nStarting Pokéchain as ${who}`);

  let acc = null;
  const createAcc = await ask(
    `\nWould you like to create an account? (only possible on devnet)`,
    yesno
  );
  if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
  } else {
    const secret = await ask(
      `What is your account secret?`,
      (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
  }

  let ctc = null;
  const deployCtc = await ask(
    `\nDo you want to deploy the contract? (y/n)`,
    yesno
  );
  if (deployCtc) {
    ctc = acc.deploy(backend);
    const info = await ctc.getInfo();
    console.log(`\nThe contract is deployed as = ${JSON.stringify(info)}`);
  } else {
    const info = await ask(
      `\nPlease paste the contract information:`,
      JSON.parse
    );
    ctc = acc.attach(backend, info);
  }

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async () => fmt(await stdlib.balanceOf(acc));

  const before = await getBalance();
  console.log(`\nYour balance is ${before}`);

  const interact = {};

  if (isObserver) {
    interact.getParams = async () => {
      const moveLimit = await ask("How many turns there will be?", parseInt);
      const payoutPerDuration = await ask("What is the unit cost of the move?", stdlib.parseCurrency);
      return ({
        payoutPerDuration: payoutPerDuration,
        moveLimit: moveLimit
      });
    };

    interact.observeMove = (move, duration, toPay, name) => {
      // moveList.push(move)
      moveList.push(move);
      // Print move
      console.log(`\n-----\nObserver observed the move ${moves[move - 1]} from ${name}.`);
      // TODO: Send move to the API 

    };

    interact.observeGameFinish = () => {
      console.log("Game has finished");
      // TODO: API call POST() gameFinish
    };

    interact.observeTurnStart = (turnNum) => {
      console.log(`\n-----\nStart of Turn ${turnNum}\n-----\n`);
    };
  } else {
    const name = await getName();
    interact.acceptMove = async (payoutPerDuration) => {
      const response = await ask(
        `\nYou need to pay ${stdlib.formatCurrency(payoutPerDuration, 7)} ALGO for every second of input.\nDo you confirm the move? (y/n)\n>> `,
        yesno
      );

      if (!response) {
        console.log(`\n${name} refused to make a move.`);
      }

      return response;
    };

    interact.getMove = async () => {
      printMoves();

      const move = await ask(
        "Which move do you want to play?",
        parseInt
      );

      // Player movePlayed index check
      // let move = moves.length+1;
      // while (move > moves.length) {
      //   move = await ask(
      //     "Which move do you want to play?",
      //     parseInt
      //   );
      // }
      // TODO: Range check

      const duration = await ask(
        "How long do you want your input to be?",
        parseInt
      );

      console.log(`${name} played to move "${moves[move - 1]}" for ${duration} seconds`);
      return [move, duration, name];
    };
  }

  const part = isObserver ? backend.Observer : backend.Player;
  await part(ctc, interact);

  const after = await getBalance();
  console.log(`Your balance is now ${after}`);

  done();

  console.log('[DEBUG] Game has finished.');
})();