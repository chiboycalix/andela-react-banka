import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  return (
    <div>
      <h1 className="indigo-text darken-4" data-test="mobile-payment">
        Mobile Payment
      </h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that
      </p>
      <br />
      <Link
        to="signup"
        className="btn waves-effect waves-light orange darken-3"
      >
        Get Started
      </Link>
    </div>
  );
};

export default LeftSideBar;
