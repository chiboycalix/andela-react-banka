import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Icons from '../icons/Icons';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul id="nav-mobile" className="hide-on-med-and-down">
        <li>
          <Link to="/dashboard" className="black-text">
            <Icons className={'icon ion-ios-home center-align'}></Icons>
            <p className={'center-align nono'}>{'Dashboard'}</p>
          </Link>
        </li>

        <li>
          <Link to="/account" className="black-text">
            <Icons className={'icon ion-md-card center-align'}></Icons>
            <p className={'center-align nono'}>{'Accounts'}</p>
          </Link>
        </li>
        <li>
          <Link to="/account" className="black-text">
            <Icons className={'icon ion-md-settings center-align'}></Icons>
            <p className={'center-align nono'}>{'Settings'}</p>
          </Link>
        </li>
        <li>
          <Link to="/account" className="black-text">
            <Icons className={'icon ion-md-contacts center-align'}></Icons>
            <p className={'center-align nono'}>{'Contacts'}</p>
          </Link>
        </li>
        <li>
          <Link to="/account" className="black-text">
            <Icons className={'icon ion-md-log-out center-align'}></Icons>
            <p className={'center-align nono'}>{'Logout'}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
