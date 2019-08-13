import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="" className="black-text">Signup</NavLink></li>
        <li><NavLink to="" className="black-text">Signin</NavLink></li>
  </ul>
);

export default SignedOutLinks;
