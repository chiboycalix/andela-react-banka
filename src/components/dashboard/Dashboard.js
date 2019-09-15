import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Notifications from './Notifications';
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos';
import './Dashboard.css';
import AccountList from '../accounts/AccountList';
import Sidebar from './Sidebar';

class Dashboard extends Component {
  componentWillReceiveProps() {
    AOS.refresh();
  }
  render() {
    AOS.init();
    return (
      <div
        className="wrapper"
        style={{ padding: '0px 1px', position: 'absolute', top: '51.3px' }}
      >
        <Sidebar />
        <div className="row">
          <div className="col s12 m1"></div>
          <div className="col s12 m8">
            <nav style={{ position: 'fixed', zIndex: '10' }}>
              <div className="nav-wrapper white">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                  <li>
                    <NavLink to="/dashboard" className="black-text">
                      Account List
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <AccountList />
          </div>
          <div className="col s12 m3 notifs">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.create.accounts,
  };
};
export default connect(mapStateToProps)(Dashboard);
