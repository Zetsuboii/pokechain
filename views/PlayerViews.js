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
            move: 0
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
                                {this.state.move === 1 ? (
                                    <button
                                        className="square-selected mb-1"
                                        onClick={() => this.setState({ move: 1 })}
                                    >
                                        <img src={ARROWUP} width="25" height="25" />
                                    </button>
                                ) : (
                                    <button
                                        className="square mb-1"
                                        onClick={() => this.setState({ move: 1 })}
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
                                        onClick={() => this.setState({ move: 3 })}
                                    >
                                        <img src={ARROWLEFT} width="25" height="25" />
                                    </button>
                                ) : (
                                    <button
                                        className="square mr-1"
                                        onClick={() => this.setState({ move: 3 })}
                                    >
                                        {" "}
                                        <img src={ARROWLEFT} width="25" height="25" />
                                    </button>
                                )}
                                {this.state.move === 2 ? (
                                    <button
                                        className="square-selected"
                                        onClick={() => this.setState({ move: 2 })}
                                    >
                                        <img src={ARROWDOWN} width="25" height="25" />
                                    </button>
                                ) : (
                                    <button
                                        className="square"
                                        onClick={() => this.setState({ move: 2 })}
                                    >
                                        {" "}
                                        <img src={ARROWDOWN} width="25" height="25" />
                                    </button>
                                )}
                                {this.state.move === 4 ? (
                                    <button
                                        className="square-selected ml-1"
                                        onClick={() => this.setState({ move: 4 })}
                                    >
                                        <img src={ARROWRIGHT} width="25" height="25" />
                                    </button>
                                ) : (
                                    <button
                                        className="square ml-1"
                                        onClick={() => this.setState({ move: 4 })}
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
                                        onClick={() => this.setState({ move: 5 })}
                                    >
                                        <img src={ABUTTON} width="18" height="18" />
                                    </button>
                                ) : (
                                    <button
                                        className="circle mb-1"
                                        onClick={() => this.setState({ move: 5 })}
                                    >
                                        <img src={ABUTTON} width="18" height="18" />
                                    </button>
                                )}
                            </div>
                            <div className="row flex-row flex-row j-end">
                                {this.state.move === 6 ? (
                                    <button
                                        className="circle-selected mr-1"
                                        onClick={() => this.setState({ move: 6 })}
                                    >
                                        <img src={BBUTTON} width="18" height="18" />
                                    </button>
                                ) : (
                                    <button
                                        className="circle mr-1"
                                        onClick={() => this.setState({ move: 6 })}
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
                                        onClick={() => this.setState({ move: 7 })}
                                    >
                                        <img src={LBUTTON} width="18" height="18" />
                                    </button>
                                ) : (
                                    <button
                                        className="circle mb-1"
                                        onClick={() => this.setState({ move: 7 })}
                                    >
                                        <img src={LBUTTON} width="18" height="18" />
                                    </button>
                                )}
                            </div>
                            <div className="row flex-row flex-row j-end">
                                {this.state.move === 8 ? (
                                    <button
                                        className="circle-selected mr-1"
                                        onClick={() => this.setState({ move: 8 })}
                                    >
                                        <img src={RBUTTON} width="18" height="18" />
                                    </button>
                                ) : (
                                    <button
                                        className="circle mr-1"
                                        onClick={() => this.setState({ move: 8 })}
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
                                        onClick={() => this.setState({ move: 9 })}
                                    >
                                        START
                                    </button>
                                ) : (
                                    <button
                                        className="circle-start"
                                        onClick={() => this.setState({ move: 9 })}
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
                                        onClick={() => this.setState({ move: 10 })}
                                    >
                                        SELECT
                                    </button>
                                ) : (
                                    <button
                                        className="circle-start"
                                        onClick={() => this.setState({ move: 10 })}
                                    >
                                        {" "}
                                        SELECT
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex-row mt-2" style={{ width: "50vw" }}>

                        <button
                            className="yes-button-2"
                            onClick={() =>
                                parent.setMove(this.state.move)
                            }
                        >
                            Set Move
                        </button>
                        <button
                            className="yes-button-2"
                            onClick={() => parent.setMove(0)}
                        >
                            Skip This Turn
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
};

exports.SeeMove = class extends React.Component {
    render() {
        const { move } = this.props;
        const moveList = ['Up', 'Down', 'Left', 'Right', 'A Button', 'B Button', 'Left Trigger', 'Right Trigger', 'Start', 'Select'];
        return (
            <Fragment>
                <div className="container">
                    <div className="row j-center">
                        <h3 className="game-finished">
                            Played {moveList[move - 1]}
                        </h3>
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default exports;
