import React from 'react';
import AppViews from './views/AppViews';
import PlayerViews from './views/PlayerViews';
import ObserverViews from './views/ObserverViews';
import { renderDOM, renderView } from './views/render';
import * as backend from './build/index.main.mjs';
import * as reach from '@reach-sh/stdlib/ALGO';

import './App.css';

/*
  What I change to switch to ALGO
  - import * as reach from '@reach-sh/stdlib/ALGO'; from import * as reach from '@reach-sh/stdlib/ETH';
  - run with REACH_CONNECTOR_MODE=ALGO -> sudo REACH_CONNECTOR_MODE=ALGO ./reach react
  - getDefaultAccount() -> newAccountFromAlgoSigner()

*/

const { standardUnit } = reach;
const defaults = { defaultFundAmt: '10', defaultWager: '3', standardUnit };
const axios = require('axios');

var name = '';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'ConnectAccount', ...defaults };
  }
  async componentDidMount() {
    // Shell account
    const acc = await reach.getDefaultAccount();

    // Get default balance and format it
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);

    // var acc = bal
    this.setState({ acc, bal });
    // Reach devNet stuff
    try {
      const faucet = await reach.getFaucet();
      this.setState({ view: 'FundAccount', faucet });
    } catch (e) {
      // * This will be Observer or Player
      this.setState({ view: 'ObserverOrPlayer' });
    }
  }
  // faucet func for devnet
  async fundAccount(fundAmount) {
    await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({ view: 'ObserverOrPlayer' });
  }
  async skipFundAccount() { this.setState({ view: 'ObserverOrPlayer' }); }
  // * selectObserver / selectPlayer
  selectPlayer() { this.setState({ view: 'Wrapper', ContentView: Player }); }
  selectObserver() { this.setState({ view: 'Wrapper', ContentView: Observer }); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'Attach' };
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({ view: 'Attaching' });
    backend.Player(ctc, this);
  }
  /**
   * confirm if player wants to make a move
   * if yes, return a tuple starting with true
   * else return a tuple starting with false
   */
  async acceptMove(move) {
    console.log(move);
    const response = await new Promise(resolveResponseP => {
      this.setState({ view: 'AcceptMove', cost: (reach.bigNumberToNumber(move)), resolveResponseP });
    });
    return response;
  }
  acceptMoveGetter(response) { this.state.resolveResponseP(response); }

  async getMove() {
    if (name === '') {
      name = await this.getName();
    }
    const move = await new Promise(resolveMoveP => {
      this.setState({ view: 'GetMove', resolveMoveP });
    });
    console.log(move);
    console.log(`${move.concat(name)}`);
    return move.concat(name);
  }
  getMoveGetter(move) { this.state.resolveMoveP(move); }

  async getName() {
    const name = await new Promise(resolveNameP => {
      this.setState({ view: 'GetName', resolveNameP });
    });
    this.setState({ view: 'WaitingForTurn', name });
    return name;
  }
  getNameGetter(name) { this.state.resolveNameP(name); }
  render() { return renderView(this, PlayerViews); }
}

class Observer extends React.Component {
  constructor(props) {
    super(props);
    if (this.state === undefined) {
      console.log("?");
      this.state = { view: 'GetParams', game: ({}) };
    }
  }
  getParams(game) { console.log(game.moveLimit); this.setState({ view: 'Deploy', game: game }); }

  async deploy() {
    const ctc = this.props.acc.deploy(backend);
    this.setState({ view: 'Deploying', ctc });
    this.payoutPerDuration = this.state.game.payoutPerDuration;
    this.moveLimit = this.state.game.moveLimit;
    backend.Observer(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ view: 'WaitingForPlayer', ctcInfoStr });
  }

  // ? Observer Interface Methods

  // async getParams() {
  //   console.log('[this.getParams] Observer called');
  //   const params = await new Promise(resolveParamsP => {
  //     this.setState({ view: 'GetParams', resolveParamsP });
  //   });
  //   return params;
  // }
  // getParamsGetter(params) { this.state.resolveParamsP(params); }

  observeMove(move, duration, toPay, name) {
    // TODO: Type check
    this.setState({
      view: 'ObserveMove',
      move: reach.bigNumberToNumber(move),
      duration: reach.bigNumberToNumber(duration),
      toPay: reach.bigNumberToNumber(toPay),
      name: name
    });

    // eslint-disable-next-line
    const moveData = {
      move: move,
      duration: duration,
      name: name,
      toPay: toPay
    };
    // const testData = {
    //   "userId": 7,
    //   "id": 1,
    //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    // };
    // eslint-disable-next-line
    const options = {
      method: 'POST',
      body: JSON.stringify(moveData),
      headers: {
        'Content-Type': 'application/json',
        'origin': '*'
      }
    };

    // fetch('http://127.0.0.1:5000', options)
    //   .then(res => res.json())
    //   .then(res => console.log(res));
    // fetch('https://pokechain-api.herokuapp.com/', options)
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err));

    const sendMove = async () => {
      try {
        const res = await axios.post('https://pokechain-api.herokuapp.com/', {
          name: 'Deneme',
          move: reach.bigNumberToNumber(move),
          duration: reach.bigNumberToNumber(duration),
          toPay: reach.bigNumberToNumber(toPay)
        });
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    sendMove();
  }

  observeTimeout() {
    this.setState({ view: 'ObserveTimeout' });
  }

  observeGameFinish() {
    this.setState({ view: 'GameFinish' });
  }

  // TODO: Rename it to move
  // TODO: Extract it to the common interface
  observeTurnStart(turnNum) {
    this.setState({ view: 'TurnStart', turnNum: turnNum });
  }

  render() { return renderView(this, ObserverViews); }
}

renderDOM(<App />);