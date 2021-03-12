import React from "react";

import AppViews from "./views/AppViews";
import PlayerViews from "./views/PlayerViews";
import CreatorViews from "./views/CreatorViews";
import { renderDOM, renderView } from "./views/render";

import * as backend from "./build/index.main.mjs";
import * as reach from "@reach-sh/stdlib/ALGO";

import "./App.css";

const { standartUnit } = reach;
const defaults = { defaultMoveCost: "10", standartUnit };
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "ConnectAccount", ...defaults };
  }

  async componentDidMount() {
    // Shell account
    const acc = await reach.getDefaultAccount();

    // Get default balance and format it
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);

    this.setState({ acc, bal });

    try {
      const faucet = await reach.getFaucet();
      this.setState({ view: "FundAccount", faucet });
    } catch (e) {
      this.setState({ view: "CreatorOrPlayer" });
    }
  }

  // faucet func for devnet
  async fundAccount(fundAmount) {
    await reach.transfer(
      this.state.faucet,
      this.state.acc,
      reach.parseCurrency(fundAmount)
    );
    this.setState({ view: "CreatorOrPlayer" });
  }

  async skipFundAccount() {
    this.setState({ view: "CreatorOrPlayer" });
  }

  selectPlayer() {
    this.setState({ view: "Wrapper", ContentView: Player });
  }
  selectCreator() {
    this.setState({ view: "Wrapper", ContentView: Creator });
  }

  render() {
    return renderView(this, AppViews);
  }
}

class Common extends React.Component {
  async seeEnd() {
    this.setState({ view: "SeeEnd" });
  }
}

class Player extends Common {
  constructor(props) {
    super(props);
    this.state = { view: "Attach", prevMoves: [] };
  }

  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({ view: "Attaching" });
    backend.Player(ctc, this);
  }

  //? Implement backend functions - Player
  async getMove() {
    const balance = await reach.balanceOf(this.state.acc);
    const move = await new Promise((resolveMoveP) => {
      this.setState({
        view: "GetMove",
        prevMoves: this.state.prevMoves,
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
    this.setState({ prevMoves: array });
  }

  async sendMove(moveList) {
    console.log(`Sending the list ${moveList} to the API.`);
    try {
      moveList.forEach(async (move) => {
        if (move !== 0) {
          const res = await axios.post("https://pokechain-api.herokuapp.com/", {
            name: "Move",
            move: reach.bigNumberToNumber(move),
            duration: 1,
            toPay: 1,
          });
          console.log(`Response from server:`);
          console.log(res.data);
        }
      });
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
      this.state = { view: "GetParams", game: {} };
    }
  }
  getParams(game) {
    this.setState({ view: "Deploy", game, standartUnit });
  }

  async deploy() {
    const ctc = this.props.acc.deploy(backend);
    this.setState({ view: "Deploying", ctc });

    //* Set start values
    this.price = this.state.game.price;

    backend.Creator(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ view: "WaitingForPlayer", ctcInfoStr });
  }

  //? Implement backend functions - Creator
  async shouldEnd() {
    const response = await new Promise((resolveResponseP) => {
      this.setState({ view: "GetResponse", resolveResponseP });
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

renderDOM(<App />);
