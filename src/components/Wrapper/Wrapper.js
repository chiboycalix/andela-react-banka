import React from 'react';
import './Wrapper.css';
import Header from '../Header/Header';
import creditcard from '../../assets/creditcard.svg';

export default function wrapper() {
  return (<div className="wrapper">
    <Header />
    <img src={creditcard} className="creditcard" data-test='creditcard'/>
  </div>);
}
