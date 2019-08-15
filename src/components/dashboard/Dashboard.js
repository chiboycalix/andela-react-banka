import React, { Component } from 'react';
import Notifications from './Notifications';
import './Dashboard.css';
import AccountList from '../accounts/AccountList';


class Dashboard extends Component {
  render() {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="col s12 m8">
                  <AccountList />
                </div>
                <div className="col s12 m4 notifs">
                    <Notifications />
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;
