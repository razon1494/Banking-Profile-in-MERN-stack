import React from 'react';
import {Spinner} from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../context/useAuth';

// User Route only for user
const UserRoute=({children, ...rest}) => {
    console.log('hi for user route');
    const {user, isUser, isLoading}=useAuth();
    console.log(user.email, isUser, 'from user route');
    if(isLoading || !isUser) {return <Spinner className='d-flex align-items-center justify-content-center' animation="grow" variant="danger" />}
    console.log(user.email, isUser, 'from user route');
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isUser ? (
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

export default UserRoute;