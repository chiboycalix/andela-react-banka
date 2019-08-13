import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const SignedInLinks = () => (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="" className="black-text active">Create Account</NavLink></li>
        <li><NavLink to="" className="black-text">Logout</NavLink></li>
        <li><NavLink to="" className="btn btn-floating orange darken-3">CN</NavLink></li>
    </ul>
);

export default SignedInLinks;
