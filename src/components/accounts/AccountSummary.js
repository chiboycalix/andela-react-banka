import React, { Component } from 'react';
import './AccountSummary.css';

class AccountSummary extends Component {
  state = {
    open: false,
  };
  handleCollapse = e => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { accountnumber, balance, type, email } = this.props.account;
    return (
      <div
        className="card z-depth-0 grey-text darken-4 main"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <div className="card-content">
          <div className="row top">
            <div className="col s4">
              <p>Account number</p>
              <h5>{accountnumber}</h5>
            </div>
            <div className="col s4">
              <p>Available Balance</p>
              <h5>${balance}</h5>
            </div>
            <div className="col s4">
              <button className="waves-effect white black-text btn">
                Statement
              </button>
              <button
                className="waves-effect orange darken-3 btn"
                onClick={this.handleCollapse}
              >
                Details
              </button>
            </div>
          </div>
          <hr />
          {this.state.open ? (
            <div className="row">
              <div className="col s4">
                <p>Ownership status: Owner</p>
                <p>Open Date: 12/39/2009</p>
              </div>
              <div className="col s4">
                <p>Percentage: 0.00</p>
                <p>Currency: USD</p>
              </div>
              <div className="col s4">
                <p>Account Email: {email}</p>
                <p>Account Type: {type}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default AccountSummary;
