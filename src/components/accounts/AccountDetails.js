/* eslint-disable react/prop-types */
import React from 'react';

const AccountDetails = (props) => {
  const { id } = props.match.params;
  return (
<div className="container section">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Account name - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Laboriosam aliquid officiis expedita sit consequatur sed
                 recusandae earum, cupiditate rerum nostrum aliquam dolore
                 ut ducimus facilis enim quasi quas maiores laudantium?</p>
                 <div className="card-action grey lighten-4 grey-text">
                     <div>Posted by chinonso</div>
                     <div>2nd october, 2009</div>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default AccountDetails;
