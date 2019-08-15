import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class LeftSideBar extends Component {
  routeChange = () => {
    this.props.history.push('/dashboard');
  }

  render() {
    return (
        <div>
            <h1 className="indigo-text darken-4">Mobile Payment</h1>
            <p>It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that
             </p>
             <br />
             <Link to="dashboard" className="btn waves-effect waves-light orange darken-3"
                     >
                    Get Started
                    <i className="material-icons right">send</i>
            </Link>
        </div>
    );
  }
}

export default withRouter(LeftSideBar);
