import React, { Component } from 'react';
import AccountSummary from './AccountSummary';

class AccountList extends Component {
  render() {
    return (
            <div className="section">
              <AccountSummary />
              <AccountSummary />
              <AccountSummary />
            </div>
    );
  }
}

export default AccountList;
