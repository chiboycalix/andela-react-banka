
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Notifications from './Notifications';
import './Dashboard.css';
import AccountList from '../accounts/AccountList';
import Sidebar from './Sidebar';


class Dashboard extends Component {
  render() {
    return (
        <div className="wrapper">
           <Sidebar />
            <div className="row">
            <div className="col s12 m1">
                </div>
                <div className="col s12 m8">
                <nav>
                  <div className="nav-wrapper white">
                      <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink to="/dashboard" className="black-text">Account List</NavLink></li>
                        <li><NavLink to="/account" className="black-text">Account History</NavLink></li>
                        <li><NavLink to="/logout" className="black-text">Bank Statement</NavLink></li>
                    </ul>
                  </div>
                </nav>
        <AccountList accounts={this.props.accounts}/>
  </div>
    <div className="col s12 m3 notifs">
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
