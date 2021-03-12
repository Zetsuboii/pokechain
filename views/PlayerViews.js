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

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Player">
        <h2 style={{ marginLeft: "50px" }} className="header-main-sub">
          Player
        </h2>
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
  render() {
    const { parent } = this.props;
    return (
      <div className="container">
        <div className="row j-center">
          <h3 className="game-finished">Attaching...Please Wait.</h3>
        </div>
      </div>
    );
  }
};

exports.GetMove = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      move: 0,
      moveQueue: [],
      index: 0
    };
  }

  render() {
    const { parent, moves } = this.props;
    const moveList = [
      "Up",
      "Down",
      "Left",
      "Right",
      "A Button",
      "B Button",
      "Left Trigger",
      "Right Trigger",
      "Start",
      "Select",
      "Loading...",
    ];

    console.log(moves);
    const displayMoves = moves.map((item, index) => (
      <li key={index}>{moveList[item - 1]}</li>
    ));

    const setMove = (move) => {
      this.setState({ move: move });
    };

    const addToQueue = (move) => {
      var arr = this.state.moveQueue;
      arr[this.state.index] = move;
      this.setState((state) => ({
        index: (state.index + 1),
        moveQueue: arr,
      }));
    }

    const clearQueue = () => {
      this.setState({ moveQueue: [], index: 0 });
    }

    return (
      <Fragment>
        <div className="container flex-column align-items-center mt-3">
          <div style={{ width: "60vw" }} className="row gameboy">
            <div style={{ width: "20vw", marginRight: "1rem" }}>
              <div className="row flex-row j-center">
                {this.state.move === 1 ? (
                  <button
                    className="square-selected mb-1"
                    onClick={setMove(1)}
                  >
                    <img src={ARROWUP} width="25" height="25" />
                  </button>
                ) : (
                  <button
                    className="square mb-1"
                    onClick={setMove(1)}
                  >
                    {" "}
                    <img src={ARROWUP} width="25" height="25" />
                  </button>
                )}
              </div>
              <div className="row flex-row flex-row j-center">
                {this.state.move === 3 ? (
                  <button
                    className="square-selected mr-1"
                    onClick={setMove(3)}
                  >
                    <img src={ARROWLEFT} width="25" height="25" />
                  </button>
                ) : (
                  <button
                    className="square mr-1"
                    onClick={setMove(3)}
                  >
                    {" "}
                    <img src={ARROWLEFT} width="25" height="25" />
                  </button>
                )}
                {this.state.move === 2 ? (
                  <button
                    className="square-selected"
                    onClick={setMove(2)}
                  >
                    <img src={ARROWDOWN} width="25" height="25" />
                  </button>
                ) : (
                  <button
                    className="square"
                    onClick={setMove(2)}
                  >
                    {" "}
                    <img src={ARROWDOWN} width="25" height="25" />
                  </button>
                )}
                {this.state.move === 4 ? (
                  <button
                    className="square-selected ml-1"
                    onClick={setMove(4)}
                  >
                    <img src={ARROWRIGHT} width="25" height="25" />
                  </button>
                ) : (
                  <button
                    className="square ml-1"
                    onClick={setMove(4)}
                  >
                    {" "}
                    <img src={ARROWRIGHT} width="25" height="25" />
                  </button>
                )}
              </div>
            </div>
            <div style={{ width: "10vw", marginRight: "1rem" }}>
              <div className="row flex-row j-start">
                {this.state.move === 5 ? (
                  <button
                    className="circle-selected mb-1"
                    onClick={setMove(5)}
                  >
                    <img src={ABUTTON} width="18" height="18" />
                  </button>
                ) : (
                  <button
                    className="circle mb-1"
                    onClick={setMove(5)}
                  >
                    <img src={ABUTTON} width="18" height="18" />
                  </button>
                )}
              </div>
              <div className="row flex-row flex-row j-end">
                {this.state.move === 6 ? (
                  <button
                    className="circle-selected mr-1"
                    onClick={setMove(6)}
                  >
                    <img src={BBUTTON} width="18" height="18" />
                  </button>
                ) : (
                  <button
                    className="circle mr-1"
                    onClick={setMove(6)}
                  >
                    {" "}
                    <img src={BBUTTON} width="18" height="18" />
                  </button>
                )}
              </div>
            </div>
            <div style={{ width: "10vw", marginRight: "1rem" }}>
              <div className="row flex-row j-start">
                {this.state.move === 7 ? (
                  <button
                    className="circle-selected mb-1"
                    onClick={setMove(7)}
                  >
                    <img src={LBUTTON} width="18" height="18" />
                  </button>
                ) : (
                  <button
                    className="circle mb-1"
                    onClick={setMove(7)}
                  >
                    <img src={LBUTTON} width="18" height="18" />
                  </button>
                )}
              </div>
              <div className="row flex-row flex-row j-end">
                {this.state.move === 8 ? (
                  <button
                    className="circle-selected mr-1"
                    onClick={setMove(8)}
                  >
                    <img src={RBUTTON} width="18" height="18" />
                  </button>
                ) : (
                  <button
                    className="circle mr-1"
                    onClick={setMove(8)}
                  >
                    {" "}
                    <img src={RBUTTON} width="18" height="18" />
                  </button>
                )}
              </div>
            </div>
            <div style={{ width: "10vw", marginRight: "1rem" }}>
              <div className="row flex-row j-center">
                {this.state.move === 9 ? (
                  <button
                    className="circle-start-select"
                    onClick={setMove(9)}
                  >
                    START
                  </button>
                ) : (
                  <button
                    className="circle-start"
                    onClick={setMove(9)}
                  >
                    START
                  </button>
                )}
              </div>
            </div>
            <div style={{ width: "10vw", marginRight: "1rem" }}>
              <div className="row flex-row flex-row j-center">
                {this.state.move === 10 ? (
                  <button
                    className="circle-start-select"
                    onClick={setMove(10)}
                  >
                    SELECT
                  </button>
                ) : (
                  <button
                    className="circle-start"
                    onClick={setMove(10)}
                  >
                    {" "}
                    SELECT
                  </button>
                )}
              </div>
            </div>
          </div>

          <span>{this.state.moveQueue.map((item, i) => (<p>{moveList[item - 1]}</p>))}</span>

          <div className="flex-row mt-2" style={{ width: "50vw" }}>
            <div className="container mt-5">
              <div className="row j-center">
                <div className="mr-12 text-center">
                  <button
                    className="yes-button-2"
                    style={{ marginLeft: "110px" }}
                    onClick={() => parent.setMove(this.state.moveQueue)}
                  >
                    Set Move
                  </button>
                  <div className="mr-12 text-center">
                    <button
                      className="yes-button-2"
                      style={{ marginLeft: "110px" }}
                      onClick={addToQueue(this.state.move)}
                    >
                      Add Move
                  </button>
                  </div>
                  <div className="mr-12 text-center">
                    <button
                      className="yes-button-2"
                      style={{ marginLeft: "110px" }}
                      onClick={clearQueue()}
                    >
                      Clear List
                  </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <span
            style={{ fontSize: "35px", color: "#032352", marginTop: "1.5rem" }}
          >
            Last moves:
          </span>
          <ul className="lastMove">{displayMoves}</ul>
        </div>
      </Fragment>
    );
  }
};

exports.SeeEnd = class extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row j-center">
          <h3 className="game-finished">Game ended by the Creator.</h3>
        </div>
      </div>
    );
  }
};


// exports.SeeMove = class extends React.Component {
//   render() {
//     const { parent, move } = this.props;
//     const moveList = [
//       "Up",
//       "Down",
//       "Left",
//       "Right",
//       "A Button",
//       "B Button",
//       "Left Trigger",
//       "Right Trigger",
//       "Start",
//       "Select",
//       "Loading...",
//     ];
//     return (
//       <Fragment>
//         <div className="container">
//           <div className="row j-center">
//             <h3 className="game-finished">Played {moveList[move - 1]}</h3>
//           </div>
//         </div>
//       </Fragment>
//     );
//   }
// };

export default exports;
