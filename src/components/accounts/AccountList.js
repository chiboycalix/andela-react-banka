import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountSummary from './AccountSummary';
import { getAccounts } from '../store/actions/getAccountAction';

class AccountList extends Component {
  state = {
    accounts: [],
  }
  async componentDidMount() {
    const { fetchAccounts } = this.props;
    fetchAccounts();
    const response = await fetchAccounts();
    this.setState({
      ...this.state,
      accounts: response.payload,
    })
  }

  render() {
    return (
      <div className="section">
        { this.state.accounts && this.state.accounts.map((account) => {
          return (
            <AccountSummary account={account} key={account.id}/>
          );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.getAccounts,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAccounts: () => dispatch(getAccounts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
