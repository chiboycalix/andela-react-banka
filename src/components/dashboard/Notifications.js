import React, { Component } from 'react';
import './Notifications.css';

class Notifications extends Component {
  render() {
    return (
      <div className="notifs">
        <div></div>
        <br />
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
