import React from 'react';
const exports = {};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <div className="Observer">
                <h2>Observer</h2>
                {content}
            </div>
        );
    }
}

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
            <div>
                <input
                    type='number'
                    placeholder='Payout Per Duration'
                    onChange={(e) => this.setState({ payoutPerDuration: e.currentTarget.value })}
                /> {standardUnit}
                <input
                    type='number'
                    placeholder='Move Limit'
                    onChange={(e) => this.setState({ moveLimit: e.currentTarget.value })}
                />
                <br />
                <button
                    onClick={() => parent.setGameGetter({
                        moveLimit: this.state.moveLimit,
                        payoutPerDuration: this.state.payoutPerDuration
                    })}
                >Set Game</button>
            </div>
        );
    }
}

exports.Deploy = class extends React.Component {
    render() {
        const { parent, game, standardUnit } = this.props;
        return (
            <div>
                Input cost (for each button press): <strong>{game.payoutPerDuration}</strong> {standardUnit}
                Total Moves: <strong>{game.moveLimit}</strong>
                <br />
                <button
                    onClick={() => parent.deploy()}
                >Deploy</button>
            </div>
        );
    }
}

exports.Deploying = class extends React.Component {
    render() {
        return (
            <div>Deploying... please wait.</div>
        );
    }
}

exports.WaitingForAttacher = class extends React.Component {
    async copyToClipborad(button) {
        const { ctcInfoStr } = this.props;
        navigator.clipboard.writeText(ctcInfoStr);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    }

    render() {
        const { ctcInfoStr } = this.props;
        return (
            <div>
                Waiting for Attacher to join...
                <br /> Please give them this contract info:
                <pre className='ContractInfo'>
                    {ctcInfoStr}
                </pre>
                <button
                    onClick={(e) => this.copyToClipborad(e.currentTarget)}
                >Copy to clipboard</button>
            </div>
        )
    }
}

exports.ObserveMove = class extends React.Component {
    render() {
        const { move, duration, toPay, name } = this.props;
        return (
            <div>
                Observed the move:
                {move}
                {duration}
                {toPay}
                {name}
            </div>
        );
    }
}

exports.ObserveTimeout = class extends React.Component {
    render() {
        return (
            <div>
                Observed timeout.
            </div>
        );
    }
}

exports.GameFinish = class extends React.Component {
    render() {
        return (
            <div>
                Game Finished
            </div>
        );
    }
}

exports.TurnStart = class extends React.Component {
    render() {
        const { turnNum } = this.props;
        return (
            <div>
                Turn {turnNum} starts.
            </div>
        );
    }
}



export default exports;