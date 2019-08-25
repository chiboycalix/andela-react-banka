import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({component: Component}, ...rest) => {
  const bool = window.localStorage.getItem('token');
  return (
    <Route {...rest} render={
      (props) => {
        if (bool) {
          return <Component {...props} />
        }else {
          return <Redirect to={
              {
                 pathname: '/',
              state: {
                  from: props.location
               }
              }
           }/>
        }
      }
    }/>
  )
}

export default ProtectedRoute;