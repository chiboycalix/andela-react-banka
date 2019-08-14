import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './layout/Navbar';
import HomePage from './homepage/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <HomePage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
