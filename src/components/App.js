import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './layout/Navbar';
import HomePage from './homepage/HomePage';
import Dashboard from './dashboard/Dashboard';
import AccountDetails from './accounts/AccountDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/Signup';
import CreateAccounts from './accounts/CreateAccounts';
import ProtectedRoute from './ProtectedRoute';
import Sidebar from './dashboard/Sidebar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ToastContainer autoClose={2500} />
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute path="/account/:id" component={AccountDetails} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/account" component={CreateAccounts} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route path="/logout" component={HomePage} />
            <Route path="*" component={() => '404 not found'} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
