
import React from 'react';
import {Spinner} from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
// Cerating Admin Route

const AdminRoute=({children, ...rest}) => {
    //State Declare
    const {user, admin, isLoading}=useAuth();
    //Checking Admin or not
    if(isLoading || !admin) {return <div className='d-flex align-items-center justify-content-center'> <Spinner animation="grow" variant="danger" /></div>}
    console.log(user.email, admin, 'from l');
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
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

export default AdminRoute;