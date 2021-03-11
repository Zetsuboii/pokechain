/* eslint-disable */
import React, { Fragment } from "react";
import POKEBALL from "../src/pokeball.png";

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const goHome = () => {
      window.location = "/";
    };
    const { content } = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <div className="container">
            <div className="row j-center align-items-center">
              <img src={POKEBALL} className="mr-2" width="32" height="32" />
              <a onClick={goHome}>
                <h1 className="header-main">Pokechain</h1>
              </a>
              <img src={POKEBALL} className="ml-2" width="32" height="32" />
            </div>
          </div>
          {content}
        </header>
      </div>
    );
  }
};

exports.Error = () => {
  return <div>Error</div>;
};

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account. If this takes more than a
        few seconds, there may be something wrong.
      </div>
    );
  }
};

exports.FundAccount = class extends React.Component {
  render() {
    const { bal, standardUnit, defaultFundAmt, parent } = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} ALGO
        <hr />
        Would you like to fund your account with additional ALGO?
        <br />
        (This only works on certain devnets)
        <br />
        <br />
        <div className="container mt-5">
          <div className="row j-center">
            <div className="mr-12 text-center">
              <input
                type="number"
                placeholder={defaultFundAmt}
                onChange={(e) => this.setState({ amt: e.currentTarget.value })}
                step="0.0000001"
                className="cost-input"
                style={{ marginRight: '10px' }}
              /> ALGO
              <div style={{ marginTop: '20px', }} >
                <button className="fund-button" onClick={() => parent.fundAccount(amt)}>Fund Account</button>
                <button className="fund-button" onClick={() => parent.skipFundAccount()}>Skip</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

exports.CreatorOrPlayer = class extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <Fragment>
        <div className="container mt-12">
          <div className="row j-center">
            <h1 className="selectRole">Please select a role:</h1>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row j-center">
            <div className="mr-12 text-center">
              <button
                className="selectButton"
                onClick={() => parent.selectCreator()}
              >
                Creator
              </button>

              <p className="select-subtext">
                Set the game rules, deploy the contract.
              </p>
            </div>
            <div className="ml-12 text-center">
              <button
                className="selectButton"
                onClick={() => parent.selectPlayer()}
              >
                Player
              </button>

              <p className="select-subtext">
                Attach to the Creator's contract.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default exports;
