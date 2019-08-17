import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import HomePage from './homepage/HomePage';
import Dashboard from './dashboard/Dashboard';
import AccountDetails from './accounts/AccountDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/Signup';
import CreateAccounts from './accounts/CreateAccounts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/account/:id" component={AccountDetails}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={SignIn}/>
            <Route path="/logout" component={HomePage}/>
            <Route path="/account" component={CreateAccounts}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
