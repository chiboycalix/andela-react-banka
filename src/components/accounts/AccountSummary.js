import React from 'react';

const AccountSummary = ({ account }) => {
  console.log(account.id);
  return (
        <div className="card z-depth-0 grey-text darken-4">
            <div className="card-content">
                <span className="card-title">
                <p>Account Name: { account.firstname }</p>
                <p>Account number: { account.accountNumber }</p>
                <p>Account type: { account.type }</p>
                <p>Account status: { account.status }</p>
                <p>Account balance: { account.balance }</p>
                <p className="grey-text">
                    4th, October 4pm
                </p>
                </span>
            </div>
        </div>
  );
};
export default AccountSummary;
