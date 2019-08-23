import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({component: Component}, ...rest) => {
  const isLogout = useSelector((state) => state.auth.isLogout);
  return (
    <Route {...rest} render={
      (props) => {
        if (!isLogout) {
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