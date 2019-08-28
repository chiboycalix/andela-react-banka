import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  const isLogout = useSelector(state => state.auth.isLogout);
  const bool = window.localStorage.getItem('token');
  return !bool && isLogout ? (
    <nav>
      <div className="nav-wrapper white">
        <div className="container">
          <Link to="/" className="brand-logo orange-text darken-3">
            Banka
          </Link>
          <SignedOutLinks />
        </div>
      </div>
    </nav>
  ) : (
    <nav style={{ position: 'fixed', zIndex: '10', top: '-10px' }}>
      <div className="nav-wrapper white">
        <div className="container">
          <Link to="/" className="brand-logo orange-text darken-3">
            Banka
          </Link>
          <SignedInLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
