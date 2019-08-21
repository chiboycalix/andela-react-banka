import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const SignedInLinks = () => (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/dashboard" className="black-text">Dashboard</NavLink></li>
        <li><NavLink to="/account" className="black-text">Create Account</NavLink></li>
        <li><NavLink to="/logout" className="black-text">Logout</NavLink></li>
        <li><NavLink to="/name" className="btn btn-floating orange darken-3">CN</NavLink></li>
    </ul>
);

export default SignedInLinks;
