/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import './Dashboard.css';
import AccountList from '../accounts/AccountList';


class Dashboard extends Component {
  render() {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="col s12 m8">
                  <AccountList accounts={this.props.accounts}/>
                </div>
                <div className="col s12 m4 notifs">
                    <Notifications />
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.account.accounts,
  };
};
export default connect(mapStateToProps)(Dashboard);
