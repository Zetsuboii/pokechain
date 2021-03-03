/* eslint-disable */
import React, { Fragment } from "react";
const exports = {};

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Observer">
        <h2 className="header-main-sub">Observer</h2>
        {content}
      </div>
    );
  }
};

exports.GetParams = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moveLimit: 0,
      payoutPerDuration: 0,
    };
  }
  render() {
    const { parent, standardUnit } = this.props;

    return (
      <Fragment>
        <div className="container">
          <div className="row m-auto flex-column w-400">
            <input
              className="observer-input"
              type="number"
              placeholder="Payout Per Duration"
              onChange={(e) =>
                this.setState({ payoutPerDuration: e.target.value })
              }
            />
            {standardUnit}
            <br />
            <input
              className="observer-input"
              type="number"
              placeholder="Move Limit"
              onChange={(e) =>
                this.setState({ moveLimit: e.currentTarget.value })
              }
            />
            <br />
            <button
              className="attach-button"
              onClick={() =>
                parent.getParams({
                  moveLimit: this.state.moveLimit,
                  payoutPerDuration: this.state.payoutPerDuration,
                })
              }
            >
              Set Game
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
};

exports.Deploy = class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row j-center flex-column w-400 m-auto mt-5">
            <a className="subtext">Input cost (for each button press):</a>
            <div className="mt-1">
              <strong>{this.props.game.payoutPerDuration} </strong>
              ETH
            </div>
            <br /> <a className="subtext">Total Moves:</a>
            <strong className="mt-1"> {this.props.game.moveLimit}</strong>
            <br />
            <br />
            <button className="attach-button" onClick={() => this.props.parent.deploy()}>
              Deploy
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
};

exports.Empty = class extends React.Component {
  render() {
    return (<div />);
  }
};

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row j-center">
          <h3 className="game-finished">Deploying...Please Wait.</h3>
        </div>
      </div>
    );
  }
};

exports.WaitingForPlayer = class extends React.Component {
  async copyToClipboard(button) {
    const { ctcInfoStr } = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = "Copied!";
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const { ctcInfoStr } = this.props;
    return (
      <Fragment>
        <div className="container">
          <div className="row j-center">
            <h3 className="game-finished">
              Waiting for Attacher to join... <br /> Please give them this
              contract info:
              <pre className="ContractInfo">{ctcInfoStr}</pre>
              <button onClick={(e) => this.copyToClipboard(e.currentTarget)}>
                Copy to clipboard
              </button>
            </h3>
          </div>
        </div>
        <div></div>
      </Fragment>
    );
  }
};

exports.ObserveMove = class extends React.Component {
  render() {
    const { move, duration, toPay, name } = this.props;
    const moveList = ['Up', 'Down', 'Left', 'Right', 'A Button', 'B Button', 'Left Trigger', 'Right Trigger', 'Start', 'Select'];
    return (
      <Fragment>
        <div className="container">
          <div className="row j-center">
            <h3 className="game-finished">
              Observed the move:
              <br />
              {moveList[move - 1]} <br />
              {duration} presses<br />
              {toPay} ETH is paid<br />
              by {name} <br />
            </h3>
          </div>
        </div>
      </Fragment>
    );
  }
};

exports.ObserveTimeout = class extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row j-center">
            <h3 className="game-finished">Observed Timeout</h3>
          </div>
        </div>
      </Fragment>
    );
  }
};

exports.GameFinish = class extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row j-center">
            <h3 className="game-finished">Game Finished</h3>
          </div>
        </div>
      </Fragment>
    );
  }
};

exports.TurnStart = class extends React.Component {
  render() {
    const { turnNum } = this.props;
    return (
      <div className="container">
        <div className="row j-center">
          <h3 className="game-finished">Turn {turnNum} starts...</h3>
        </div>
      </div>
    );
  }
};

export default exports;
