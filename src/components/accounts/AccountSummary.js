import React, { Component } from 'react';
import './AccountSummary.css';

class AccountSummary extends Component {
    state = {
           open: false
        }
    handleCollapse = (e) => {
        this.setState({open: !this.state.open})
    }
  render() {
    return (
            <div className="card z-depth-0 grey-text darken-4">
                <div className="card-content">
                    <div className="row top">
                        <div className="col s4">
                            <p>Account number</p>
                            <h5>090 564 7884 </h5>
                        </div>
                        <div className="col s4">
                            <p>Available Balance</p>
                            <h5>$50, 000, 909</h5>
                        </div>
                        <div className="col s4">
                        <button className="waves-effect white black-text btn">Statement</button>
                        <button className="waves-effect orange darken-3 btn" onClick={this.handleCollapse}>Details</button>
                        </div>
                    </div>
                    <hr />
                    { this.state.open
                        ?
                         (
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
                            <p>Bank statement: Downloadable from bank system</p>
                            <p>Account Type: savings</p>
                        </div>
                    </div>
                    )
                        :
                    null
                    }

                </div>
            </div>
    );
  }
}
export default AccountSummary;
