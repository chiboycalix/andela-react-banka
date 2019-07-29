import React from 'react';
import './Header.css';

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Banka</h1>
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#" className="signup">Signup</a></li>
          <li><a href="#" className="signin">Signin</a></li>
        </ul>
      </div>
    </header>
  );
}
