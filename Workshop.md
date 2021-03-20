# 4.25 Workshop: Pokéchain

---

In this workshop, we'll go through me and zet's Bounty Hack submission, the Pokéchain game; where a Pokemon game is played with inputs coming from the players in blockchain.

This workshop assumes that you've completed the tutorial

We assume that you’ll go through this workshop in a directory named `~/reach/workshop-pokechain`:

```bash
$ mkdir -p ~/reach/workshop-pokechain
```

And that you have a copy of Reach installed in ~/reach so you can write

```bash
$ ../reach version
```

And it will run Reach.

You should start off by initializing your Reach program:

```bash
$ ../reach init
```

## 4.25.1 Problem Analysis

The first step of designing any program is to perform problem analysis and determine what we have to do to successfully finish the problem.

You should answer some questions concerning the design of the application to go through the same process we did while writing this project.

You should also write your own answers in your Reach program (index.rsh) using a comment. /* Remember comments are written like this. */

    Who is involved in this application?
    
    What information do they know at the start of the program?
    
    What information are they going to discover and use in the program?
    
    What funds change ownership during the application and how?

**Stop!**
Write down the problem analysis of this program as a comment.

Here's our answers to those questions:

	Our application involves 2 roles: One creator and many Players
	
	Creator of the game know about the price they want to set for a move and players know about the move(s) they want to play during the game
	
	Creator won't know further information in the game. Players on the other hand will be informed about the cost of a single move.
	
	Players will pay the required cost of the move(s) they want to play to the creator.

It is completely okay if your answers differ from ours. If you're confident that your answers are correct you can continue with them through this workshop.

## 4.25.2 Data Definition

For the next step, we are going to define the data type equivalents of the values we used in our answers from the previous section. Also, in this step we'll be deciding what functions our participants will have.

* What functions/ values does Creator need to start and end the game?
* What functions/ values do Players need to play and observe moves?

You should look back at your problem analysis to do this step. Whenever a participant starts off knowing something, then it is a field in the interact object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.

You should write your answers in your Reach file (`index.rsh`) as the participant interact interface for each of the participants.

**Stop!**
Write down the data definitions for this program as definitions.

It's time to see our answers!

```javascript
[
	Participant('Creator', {
        price: UInt,
        shouldEnd: Fun([], Bool),
    }),
    ParticipantClass('Player',
    {
        getMove: Fun([], UInt),
        seeMove: Fun([UInt], Null),
    }),
]
```

We're going to represent the cost of a move with UInt (Unsigned Integer). Creator will set this value after deploying the contract. There's also a function to let the creator decide if they want to end the game.

For the players' side there are two functions for making and observing a move.

## 4.25.3 Communication Construction

Now we can design the structure of communication of our application. Try to write this part considering how the process of creator setting the price and player playing the move would go.

**Stop**
Write down the communication pattern for this program as comments.

Here's what we wrote

> 1. Creator sets the price and deploys the contract.
> 2. As long as creator decides to continue the game:
>    1. Each player are given chance to play a move by giving the price to the creator.
>    2. After the move players can observe the move.
>    3. Creator is given chance to end the game

The phrase "As long as" indicates a loop going on in the game. Considering players can play as many move as they want until creator ends the game it is the most feasible option. Given that, this information will be enough to implement the logic for our contract.

**Stop!**
Write down the communication pattern for this program as code.

Main logic of our contract should now look like:

```javascript
// Get price from Creator
Creator.only(() => {
	const price = declassify(interact.price);
});
Creator.publish(price);

// There is going to be no money in the contract's pool since it will all be transferred to the Creator.
var [keepGoing] = [true];
invariant(balance() == 0);
while (keepGoing) {
    commit();

    fork()
        .case(Creator, (() => ({
            	when: declassify(interact.shouldEnd()),
            })),
            () => {
                keepGoing = false;
                continue;
        })
    .	case(Player, (() => {
                const msg = declassify(interact.getMove());
                return { msg };
            }),
            (move => price),
            (move) => {
            Player.only(() =>
                interact.seeMove(move));
            transfer(price).to(Creator);
            continue;
        })
        .timeout(1024, () => { // This part is needed for a working Reach loop 
            Creator.publish();
            continue;
        });
}
```

In the code we check which participant we get in the while loop using fork/case. If it is a player we ask for a move and after the move we observe the latest move in the contract. If it is a creator instead we ask if creator wants to continue the game which then updates the while condition.

If you did your homework you could wonder if we could used parallel_reduce instead of while and fork/case combination. In that case you are absolutely right for that, there is no difference between two and it is up to you which one to use in your contract.

## 4.25.4 Assertion Insertion

Due to simplicity of the code there is not a big concern about the assertions we are going to implement in the code. But one possible thing to add is an option for players to not make a move. In that case we might as well get 0 from the player instead of a valid integer.

To implement that we can write a when field to our local step's return object.

```javascript
case(Player, (() => {
    const msg = declassify(interact.getMove());
    const when = msg != 0;
    return { msg , when};
}),
(move => price),
(move) => {
    Player.only(() =>
        interact.seeMove(move));
    transfer(price).to(Creator);
    continue;
})
```

## 4.25.5 Possible Additions

Our code works perfectly fines as it is now. But there are some points we can improve.

One improvement is to let players batch a list of moves and pay extra for them at once. For example, if the price is 1 ALGO and the Player wants to play 5 consecutive moves at once, they have to pay 15 (1 + 2 + 3 + 4 + 5 ) ALGO for it.

A way to calculate that in the contract is something like that:

```javascript
const foldingPrice = (cnt, price) => {
    return (cnt * (cnt + 1) * price) / 2;
};
```

Now that a player can play a set of move we must update our participant interfaces too.

```javascript
[Participant('Creator',
            {
                price: UInt,
                shouldEnd: Fun([], Bool),
            }),
        ParticipantClass('Player',
            {
                getMove: Fun([], Array(UInt, 10)),
                seeMove: Fun([Array(UInt, 10)], Null),
            }),
        ]
```

The case statement of Player will change too.

```javascript
.case(Player, (() => {
    const msg = declassify(interact.getMove());
    assume(Array.length(msg) == 10);
    const when = msg != [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return { msg, when };
}),
      (move => foldingPrice(getNonZero(move), price)),
      (move) => {
    Player.only(() =>
                interact.seeMove(move));
    transfer(foldingPrice(getNonZero(move), price)).to(Creator);
    continue;
})
```
getNonZero() is our way to know how many move a Player actually did input. We can implement it simply like this:

```javascript
const getNonZero = (a) => {
	return (a.length - a.count(0));
}
```

---

One last step can be adding a function to let all participants know that the game ended. For this we can write a common interface and update our participant interfaces (again).

```javascript
const CommonInterface = {
    seeEnd: Fun([], Null)
};

// ...

export const main =
    Reach.App(
        {},
        [Participant('Creator',
            {
                ...CommonInterface,
                price: UInt,
                shouldEnd: Fun([], Bool),
            }),
        ParticipantClass('Player',
            {
                ...CommonInterface,
                getMove: Fun([], Array(UInt, 10)),
                seeMove: Fun([Array(UInt, 10)], Null),
            }),
        ],
        
// ...
```

With all of these changes our backend code will look like this:

```javascript
const CommonInterface = {
    seeEnd: Fun([], Null)
};

const getNonZero = (a) => {
    return (a.length - a.count(0));
}

const foldingPrice = (cnt, price) => {
    return (cnt * (cnt + 1) * price) / 2;
};

export const main =
    Reach.App({},
        [Participant('Creator', {
                ...CommonInterface,
                price: UInt,
                shouldEnd: Fun([], Bool),
            }),
            ParticipantClass('Player', {
                ...CommonInterface,
                getMove: Fun([], Array(UInt, 10)),
                seeMove: Fun([Array(UInt, 10)], Null),
            }),
        ],
        (Creator, Player) => {
            Creator.only(() => {
                const price = declassify(interact.price);
            });
            Creator.publish(price);

            var [keepGoing] = [true];
            invariant(balance() == 0);
            while (keepGoing) {
                commit();

                fork()
                    .case(Creator, (() => ({
                            when: declassify(interact.shouldEnd()),
                        })),
                        () => {
                            keepGoing = false;
                            continue;
                        })
                    .case(Player, (() => {
                            const msg = declassify(interact.getMove());
                            assume(Array.length(msg) == 10);
                            const when = msg != [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            return {
                                msg,
                                when
                            };
                        }),
                        (move => foldingPrice(getNonZero(move), price)),
                        (move) => {
                            Player.only(() =>
                                interact.seeMove(move));
                            transfer(foldingPrice(getNonZero(move), price)).to(Creator);
                            continue;
                        })
                    .timeout(1024, () => {
                        Creator.publish();
                        continue;
                    });
            }
            commit();
            each([Creator, Player], () => {
                interact.seeEnd();
            });

            exit();
        }
    );
```

## 4.25.6 Interaction Introduction

Now we have a complete contract we can write the frontend. Since we'll be interacting with an API to play the actual Pokémon game, using a web frontend library is a better choice. In our case it will be React.

We also will use the node package 'axios' for the API calls.

**Stop!**
Insert `interact` calls to the [frontend](https://docs.reach.sh/ref-model.html#(tech._frontend)) into the program.

```javascript
import React from "react";

import AppViews from "./views/AppViews";
import PlayerViews from "./views/PlayerViews";
import CreatorViews from "./views/CreatorViews";
import {
    renderDOM,
    renderView
} from "./views/render";

import * as backend from "./build/index.main.mjs";
import * as reach from "@reach-sh/stdlib/ALGO";

import "./App.css";

const {
    standartUnit
} = reach;
const defaults = {
    defaultMoveCost: "10",
    standartUnit
};
const axios = require("axios");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "ConnectAccount",
            ...defaults
        };
    }

    async componentDidMount() {
        // Shell account
        const acc = await reach.getDefaultAccount();

        // Get default balance and format it
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);

        this.setState({
            acc,
            bal
        });

        try {
            const faucet = await reach.getFaucet();
            this.setState({
                view: "FundAccount",
                faucet
            });
        } catch (e) {
            this.setState({
                view: "CreatorOrPlayer"
            });
        }
    }

    // Faucet function for devnet
    async fundAccount(fundAmount) {
        await reach.transfer(
            this.state.faucet,
            this.state.acc,
            reach.parseCurrency(fundAmount)
        );
        this.setState({
            view: "CreatorOrPlayer"
        });
    }

    async skipFundAccount() {
        this.setState({
            view: "CreatorOrPlayer"
        });
    }

    selectPlayer() {
        this.setState({
            view: "Wrapper",
            ContentView: Player
        });
    }
    selectCreator() {
        this.setState({
            view: "Wrapper",
            ContentView: Creator
        });
    }

    render() {
        return renderView(this, AppViews);
    }
}

class Common extends React.Component {
    async seeEnd() {
        this.setState({
            view: "SeeEnd"
        });
    }
}

class Player extends Common {
    constructor(props) {
        super(props);
        this.state = {
            view: "Attach",
            prevMoves: [],
            account: props.account
        };
    }

    attach(ctcInfoStr) {
        const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
        this.setState({
            view: "Attaching"
        });
        backend.Player(ctc, this);
    }

    //? Implement backend functions - Player
    async getMove() {
        const balanceBig = await reach.balanceOf(this.state.account);
        const balance = reach.formatCurrency(balanceBig, 4);
        console.log(`balance is ${balance}`);
        const move = await new Promise((resolveMoveP) => {
            this.setState({
                view: "GetMove",
                prevMoves: this.state.prevMoves,
                balance: balance,
                resolveMoveP,
            });
        });
        return this.sendMove(move);
    }
    setMove(move) {
        this.setState((prevstate) => ({
            prevMoves: [...prevstate.prevMoves, 11],
        }));
        this.state.resolveMoveP(move);
    }

    async seeMove(moveList) {
        var array = [...this.state.prevMoves];
        array.pop();
        moveList.forEach(move => {
            if (reach.bigNumberToNumber(move) !== 0) {
                array.push(reach.bigNumberToNumber(move));
            }
        });
        console.log(`moveQueue is ${this.state.prevMoves}`);
        this.setState({
            prevMoves: array
        });
    }

    async sendMove(moveList) {
        console.log(`Sending the list ${moveList} to the API.`);
        try {
            const res = await axios.post("https://pokechain-api.herokuapp.com/", {
                name: "Move",
                move: moveList,
                duration: 1,
                toPay: 1,
            });
            console.log(`Response from server:`);
            console.log(res.data);
            return moveList;
        } catch (err) {
            console.error(`Error while sending the move:\n${err}`);
        }
    }

    render() {
        return renderView(this, PlayerViews);
    }
}

class Creator extends Common {
    constructor(props) {
        super(props);
        if (this.state === undefined) {
            this.state = {
                view: "GetParams",
                game: {},
                account: props.account
            };
        }
    }
    getParams(game) {
        this.setState({
            view: "Deploy",
            game,
            standartUnit
        });
    }

    async deploy() {
        const ctc = this.props.acc.deploy(backend);
        this.setState({
            view: "Deploying",
            ctc
        });

        //* Set start values
        this.price = reach.parseCurrency(this.state.game.price);

        backend.Creator(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({
            view: "WaitingForPlayer",
            ctcInfoStr
        });
    }

    //? Implement backend functions - Creator
    async shouldEnd() {
        const balanceBig = await reach.balanceOf(this.state.account);
        const balance = reach.formatCurrency(balanceBig, 4);
        const response = await new Promise((resolveResponseP) => {
            this.setState({
                view: "GetResponse",
                balance: balance,
                resolveResponseP
            });
        });
        console.log(`Creator gave the response ${response}`);
        return response;
    }
    setResponse(response) {
        this.state.resolveResponseP(response);
    }

    render() {
        return renderView(this, CreatorViews);
    }
}
```

---

## 4.25.7 Discussion

Congrats for bearing with us for so long. You implemented a game that can play a Pokemon game outside of the blokchain yourself.

We believe this is an important concept, since it can apply for any situation where many number of users submit their data to a list. It can be a decentralized Twitter where users add their tweets to the feed by paying a small fee, a jukebox where listeners can queue their favorite songs, or even a decentralized stream donation system where viewers can add their message to a list of messages by giving tips.

If you found this workshop rewarding, please let us know on [the Discord community](https://discord.gg/AZsgcXu)!

If you want to know what to do next, you should check out squidKid's [Tic-Tac-Toe](https://github.com/squidKid-deluxe/reach--tic-tac-toe) and other workshops.

(There should be the link of squid's workshop too)

See you around 😉
