/*eslint-disable*/
import React, { Fragment } from "react";
const exports = {};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <div className="Observer">
                <h2 style={{ marginLeft: '50px' }} className="header-main-sub">Creator</h2>
                {content}
            </div>
        );
    }
};

exports.GetParams = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0
        };
    }
    render() {
        const { parent, standardUnit } = this.props;

        return (
            <Fragment>
                <div className="container">
                    <div className="row m-auto flex-column w-400">

                        <div style={{ textAlign: 'center' }}>
                            <input
                                step="0.000001"
                                className="observer-input"
                                type="number"
                                placeholder="Cost of a Move"
                                onChange={(e) =>
                                    this.setState({ price: e.target.value })
                                }
                                style={{ width: '100px', marginRight: '10px' }}
                            />ALGO
                        </div>
                        <br />
                        <button
                            className="attach-button"
                            onClick={() =>
                                parent.getParams({
                                    price: this.state.price,
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
    render() {
        const { parent, game, standardUnit } = this.props;

        return (
            <Fragment>
                <div className="container">
                    <div className="row j-center flex-column w-400 m-auto mt-5">
                        <p className="subtext">Input cost (for each button press): {game.price} ALGO</p>
                        <br />
                        <button className="attach-button"
                            onClick={() => parent.deploy()}
                        >
                            Deploy
                        </button>
                    </div>
                </div>
            </Fragment>
        );
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
                            <button
                                className='attach-button'
                                onClick={(e) =>
                                    this.copyToClipboard(e.currentTarget)
                                        .then(() => console.log('Succesfully copied!'))
                                        .catch(() => console.log('Error while copying'))
                                }
                            >Copy to clipboard</button>
                        </h3>
                    </div>
                </div>
                <div></div>
            </Fragment>
        );
    }
};

exports.GetResponse = class extends React.Component {
    render() {
        const { parent } = this.props;
        return (
            <Fragment>
                <div className="container">
                    <div className="row j-center">
                        <h3 className="game-finished">
                            Game is continuing.
                            <br />
                            <br />
                            <br />
                            <div style={{ textAlign: 'center', marginLeft: '-20px' }}>
                                <button
                                    className="yes-button mr-1"
                                    onClick={() => parent.setResponse(true)}
                                >
                                    End the Game
                            </button>
                                {/* 
                                <button
                                    className="yes-button"
                                    onClick={() => parent.setResponse(false)}
                                >
                                    No
                            </button> */}
                            </div>
                        </h3>
                    </div>
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
                    <h3 className="game-finished">You ended the game.</h3>
                </div>
            </div>
        );
    }
};


export default exports;
