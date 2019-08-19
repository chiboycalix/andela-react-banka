import React, { Component } from 'react';
import AccountSummary from './AccountSummary';

class AccountList extends Component {
  render() {
    const { accounts } = this.props;
    return (
            <div className="section">
              { accounts && accounts.map((account) => {
                return (
                  <AccountSummary account={account} key={account.id}/>
                );
              })}
            </div>
    );
  }
}

export default AccountList;
