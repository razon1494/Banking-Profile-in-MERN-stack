import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../../context/useAuth';

// private Route for both admin and user

const PrivateRoute=({children, ...rest}) => {
  const {user, isLoading}=useAuth();

  if(isLoading) {
  //private route spinner
        return <div className='d-flex align-items-center justify-content-center'><Spinner animation="grow" variant="warning" />  </div>
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;