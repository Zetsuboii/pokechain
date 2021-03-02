import React from 'react';

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
                <h2>Player</h2>
                {content}
            </div>
        );
    }
}

exports.Attach = class extends React.Component {
    render() {
        const { parent } = this.props;
        const { ctcInfoStr } = this.state || {};
        return (
            <div>
                Please paste the contract info to attach to:
                <br />
                <textarea spellcheck="false"
                    className='ContractInfo'
                    onChange={(e) => this.setState({ ctcInfoStr: e.currentTarget.value })}
                    placeholder='{}'
                />
                <br />
                <button
                    disabled={!ctcInfoStr}
                    onClick={() => parent.attach(ctcInfoStr)}
                >Attach</button>
            </div>
        );
    }
}

exports.Attaching = class extends React.Component {
    render() {
        return (
            <div>
                Attaching, please wait...
            </div>
        );
    }
}

exports.AcceptMove = class extends React.Component {
    render() {
        const { parent, cost } = this.props;
        return (
            <div>
                <p>Cost of the move is {cost}</p>
                <p>Do you accept it?</p>
                <button
                    onClick={() => parent.acceptMoveGetter(true)}>
                    Yes
                </button>

                <button
                    onClick={() => parent.acceptMoveGetter(false)}>
                    No
                </button>
            </div>
        );
    }
}

// return Tuple (move, duration)
exports.GetMove = class extends React.Component {
    render() {
        const { parent } = this.props;
        var playerMove = 0;
        var duration = 0;
        return (
            <div>
                <div>
                    <input type="radio" id="up" name="playerMove" value="up"
                        onClick={() => this.setState({ playerMove: 1 })} />
                    <label for="up">Up</label>

                    <input type="radio" id="down" name="playerMove" value="down"
                        onClick={() => this.setState({ playerMove: 2 })} />
                    <label for="down">Down</label>

                    <input type="radio" id="left" name="playerMove" value="left"
                        onClick={() => this.setState({ playerMove: 3 })} />
                    <label for="left">Left</label>

                    <input type="radio" id="right" name="playerMove" value="right"
                        onClick={() => this.setState({ playerMove: 4 })} />
                    <label for="right">Right</label>

                    <input type="radio" id="a-button" name="playerMove" value="a-button"
                        onClick={() => this.setState({ playerMove: 5 })} />
                    <label for="a-button">A Button</label>

                    <input type="radio" id="b-button" name="playerMove" value="b-button"
                        onClick={() => this.setState({ playerMove: 6 })} />
                    <label for="b-button">B Button</label>

                    <input type="radio" id="l-trigger" name="playerMove" value="l-trigger"
                        onClick={() => this.setState({ playerMove: 7 })} />
                    <label for="l-trigger">Left Trigger</label>

                    <input type="radio" id="r-trigger" name="playerMove" value="r-trigger"
                        onClick={() => this.setState({ playerMove: 8 })} />
                    <label for="r-trigger">Right Trigger</label>

                    <input type="radio" id="start" name="playerMove" value="start"
                        onClick={() => this.setState({ playerMove: 9 })} />
                    <label for="start">Start</label>

                    <input type="radio" id="select" name="playerMove" value="select"
                        onClick={() => this.setState({ playerMove: 10 })} />
                    <label for="select">Select</label>
                </div>

                <input
                    type='number'
                    placeholder='How many presses?'
                    onChange={(e) => this.setState({ duration: e.currentTarget.value })}
                />

                <button
                    onClick={() => parent.getMoveGetter([playerMove, duration])}>
                    Set Move
                </button>

            </div>
        );
    }
}

exports.GetName = class extends React.Component {
    render() {
        const { parent } = this.props;
        var playerName = '';
        return (
            <div>
                <input
                    placeholder='Enter Name'
                    onChange={(e) => this.setState({ playerName: e.currentTarget.value })}
                />
                <br />
                <button
                    onClick={() => parent.getNameGetter(playerName)}
                >Set Name</button>
            </div>
        );
    }
}

export default exports;
