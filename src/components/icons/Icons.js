import React from 'react';
import './Icons.css';

const Icons = (props) => {
  return (
      <i className={props.className}>{props.children}</i>
  );
};
export default Icons;
