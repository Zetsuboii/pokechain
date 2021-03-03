/* eslint-disable */
import React, { Fragment } from "react";

import ARROWDOWN from "../src/arrow-down.png";
import ARROWUP from "../src/arrow-up.png";
import ARROWRIGHT from "../src/arrow-right.png";
import ARROWLEFT from "../src/arrow-left.png";

import ABUTTON from "../src/a-button.png";
import BBUTTON from "../src/b-button.png";

import LBUTTON from "../src/l-button.png";
import RBUTTON from "../src/r-button.png";


const exports = {};

/*
    ? 'AcceptMove'
    *async acceptMove(payoutPerDuration) -> Bool
    *acceptMoveGetter(response)

    ? 'GetMove'
    *async getMove() -> Tuple(Int, Int, Int, String)
    *getMoveGetter(move)

    ? 'GetName'
    *async getName() -> String
    *getNameGetter(name)

    ? 'GetParams'
    *async getParams() -> Object({ payoutPerDuration: Int, moveLimit: Int })
    *getParamsGetter(params)

    ? 'ObserveMove'
    *observeMove(move, duration, toPay, name)

    ? 'GameFinish'
    *observeGameFinish()

    ? 'TurnStart'
    *observeTurnStart(turnNum)

*/
exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Player">
        <h2 className="header-main-sub">Player</h2>
        {content}
      </div>
    );
  }
};

exports.Attach = class extends React.Component {
  render() {
    const { parent } = this.props;
    const { ctcInfoStr } = this.state || {};
    return (
      <Fragment>
        <div className="container">
          <div className="row j-center flex-column w-400 m-auto mt-5">
            Please paste the contract info to attach to:
            <br />
            <br />
            <textarea
              className="ContractInfo"
              onChange={(e) =>
                this.setState({ ctcInfoStr: e.currentTarget.value })
              }
              placeholder="{}"
            />
            <br />
            <button
              className="attach-button mt-2"
              disabled={!ctcInfoStr}
              onClick={() => parent.attach(ctcInfoStr)}
            >
              Attach
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
};

exports.Attaching = class extends React.Component {
  componentDidMount() {
    const { parent } = this.props;
    console.log("Component did Mount");
    setTimeout(() => {
      parent.acceptMove(12);
    }, 2000);
  }
  render() {
    return (
      <div className="container">
        <div className="row j-center">
          <h3 className="game-finished">Attaching...Please Wait.</h3>
        </div>
      </div>
    );
  }
};

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Waiting
      </div>
    );
  }
}

exports.AcceptMove = class extends React.Component {
  render() {
    const { parent, cost } = this.props;
    return (
      <Fragment>
        <div className="container">
          <div className="row j-center">
            <h3 className="game-finished">
              Cost of the move is {cost} ETH. <br />
              Do you accept it?
              <br />
              <br />
              <button
                className="yes-button mr-1"
                onClick={() => parent.acceptMoveGetter(true)}
              >
                Yes
              </button>
              <button
                className="yes-button"
                onClick={() => parent.acceptMoveGetter(false)}
              >
                No
              </button>
            </h3>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </Fragment>
    );
  }
};

// return Tuple (move, duration)
exports.GetMove = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerMove: 0,
      duration: 0,
    };
  }

  render() {
    const { parent } = this.props;

    return (
      <Fragment>
        <div className="container flex-column align-items-center mt-3">
          <div className="row gameboy">
            <div style={{ width: "20vw", marginRight: "1rem" }}>
              <div className="row flex-row j-center">
                {this.state.playerMove == 1 ? (
                  <button
                    className="square-selected mb-1"
                    onClick={() => this.setState({ playerMove: 1 })}
                  >
                    <img src={ARROWUP} width="25" height="25" />
                  </button>
                ) : (
                    <button
                      className="square mb-1"
                      onClick={() => this.setState({ playerMove: 1 })}
                    >
                      {" "}
                      <img src={ARROWUP} width="25" height="25" />
                    </button>
                  )}
              </div>
              <div className="row flex-row flex-row j-center">
                {this.state.playerMove == 3 ? (
                  <button
                    className="square-selected mr-1"
                    onClick={() => this.setState({ playerMove: 3 })}
                  >
                    <img src={ARROWLEFT} width="25" height="25" />
                  </button>
                ) : (
                    <button
                      className="square mr-1"
                      onClick={() => this.setState({ playerMove: 3 })}
                    >
                      {" "}
                      <img src={ARROWLEFT} width="25" height="25" />
                    </button>
                  )}
                {this.state.playerMove == 2 ? (
                  <button
                    className="square-selected"
                    onClick={() => this.setState({ playerMove: 2 })}
                  >
                    <img src={ARROWDOWN} width="25" height="25" />
                  </button>
                ) : (
                    <button
                      className="square"
                      onClick={() => this.setState({ playerMove: 2 })}
                    >
                      {" "}
                      <img src={ARROWDOWN} width="25" height="25" />
                    </button>
                  )}
                {this.state.playerMove == 4 ? (
                  <button
                    className="square-selected ml-1"
                    onClick={() => this.setState({ playerMove: 4 })}
                  >
                    <img src={ARROWRIGHT} width="25" height="25" />
                  </button>
                ) : (
                    <button
                      className="square ml-1"
                      onClick={() => this.setState({ playerMove: 4 })}
                    >
                      {" "}
                      <img src={ARROWRIGHT} width="25" height="25" />
                    </button>
                  )}
              </div>
            </div>
            <div style={{ width: "10vw", marginRight: "1rem" }}>
              <div className="row flex-row j-start">
                {this.state.playerMove == 5 ? (
                  <button
                    className="circle-selected mb-1"
                    onClick={() => this.setState({ playerMove: 5 })}
                  >
                    <img src={ABUTTON} width="18" height="18" />
                  </button>
                ) : (
                    <button
                      className="circle mb-1"
                      onClick={() => this.setState({ playerMove: 5 })}
                    >
                      <img src={ABUTTON} width="18" height="18" />
                    </button>
                  )}
              </div>
              <div className="row flex-row flex-row j-end">
                {this.state.playerMove == 6 ? (
                  <button
                    className="circle-selected mr-1"
                    onClick={() => this.setState({ playerMove: 6 })}
                  >
                    <img src={BBUTTON} width="18" height="18" />
                  </button>
                ) : (
                    <button
                      className="circle mr-1"
                      onClick={() => this.setState({ playerMove: 6 })}
                    >
                      {" "}
                      <img src={BBUTTON} width="18" height="18" />
                    </button>
                  )}
              </div>
            </div>
            <div style={{ width: "10vw", marginRight: "1rem" }}>
              <div className="row flex-row j-start">
                {this.state.playerMove == 7 ? (
                  <button
                    className="circle-selected mb-1"
                    onClick={() => this.setState({ playerMove: 7 })}
                  >
                    <img src={LBUTTON} width="18" height="18" />
                  </button>
                ) : (
                    <button
                      className="circle mb-1"
                      onClick={() => this.setState({ playerMove: 7 })}
                    >
                      <img src={LBUTTON} width="18" height="18" />
                    </button>
                  )}
              </div>
              <div className="row flex-row flex-row j-end">
                {this.state.playerMove == 8 ? (
                  <button
                    className="circle-selected mr-1"
                    onClick={() => this.setState({ playerMove: 8 })}
                  >
                    <img src={RBUTTON} width="18" height="18" />
                  </button>
                ) : (
                    <button
                      className="circle mr-1"
                      onClick={() => this.setState({ playerMove: 8 })}
                    >
                      {" "}
                      <img src={RBUTTON} width="18" height="18" />
                    </button>
                  )}
              </div>
            </div>
            <div style={{ width: "10vw", marginRight: "1rem" }}>
              <div className="row flex-row j-center">
                {this.state.playerMove == 9 ? (
                  <button
                    className="circle-start-select"
                    onClick={() => this.setState({ playerMove: 9 })}
                  >
                    START
                  </button>
                ) : (
                    <button
                      className="circle-start"
                      onClick={() => this.setState({ playerMove: 9 })}
                    >
                      START
                    </button>
                  )}
              </div>
            </div>
            <div style={{ width: "10vw", marginRight: "1rem" }}>
              <div className="row flex-row flex-row j-center">
                {this.state.playerMove == 10 ? (
                  <button
                    className="circle-start-select"
                    onClick={() => this.setState({ playerMove: 10 })}
                  >
                    SELECT
                  </button>
                ) : (
                    <button
                      className="circle-start"
                      onClick={() => this.setState({ playerMove: 10 })}
                    >
                      {" "}
                    SELECT
                    </button>
                  )}
              </div>
            </div>
          </div>
          <div className="flex-column mt-2" style={{ width: "50vw" }}>
            <input
              className="mb-2"
              type="number"
              placeholder="How many presses?"
              onChange={(e) =>
                this.setState({ duration: e.currentTarget.value })
              }
            />

            <button
              className="yes-button-2"
              onClick={() =>
                parent.getMoveGetter([
                  this.state.playerMove,
                  this.state.duration,
                ])
              }
            >
              Set Move
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
};

exports.GetName = class extends React.Component {
  render() {
    const { parent } = this.props;
    var playerName = "";
    return (
      <Fragment>
        <div className="container">
          <div className="row j-center">
            <div className="flex-column">
              <input
                placeholder="Enter Name"
                onChange={(e) =>
                  this.setState({ playerName: e.currentTarget.value })
                }
              />
              <button
                className="yes-button mt-2"
                onClick={() => parent.getNameGetter(playerName)}
              >
                Set Name
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </Fragment>
    );
  }
};

export default exports;
