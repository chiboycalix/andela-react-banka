import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => (
    <nav>
        <div className="nav-wrapper white">
            <div className="container">
            <Link to="/" className="brand-logo orange-text darken-3">Banka</Link>
            <SignedInLinks />
            <SignedOutLinks />
            </div>
        </div>
    </nav>
);

export default Navbar;
