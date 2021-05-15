import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Login from '../pages/Login/Login';

const authRoute = (WrappedComponent) => {
    const AuthComponent = () => {
        const {currentUser} = useContext(AuthContext);
        if (currentUser) {
            return (
                <WrappedComponent />
            )
        }
        else {
            return <Login />
        }
    }
    return AuthComponent;
    
}
export default authRoute;