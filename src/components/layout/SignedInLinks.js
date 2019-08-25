import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style.css';
import { logoutInit } from '../store/actions/authAction';

const SignedInLinks = () => {
    const dispatch = useDispatch()
    const initLogout = () => {
        location.reload()
        localStorage.removeItem('token');
        return dispatch(logoutInit())
    }
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/dashboard" className="black-text">Dashboard</NavLink></li>
            <li><NavLink to="/account" className="black-text">Create Account</NavLink></li>
            <li><a onClick={initLogout} className="black-text">Logout</a></li>
            {/* <li><NavLink to="/name" className="btn btn-floating orange darken-3">CN</NavLink></li> */}
        </ul>
    )
}

export default SignedInLinks;
