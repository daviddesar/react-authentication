import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const AuthRoute = ({component: Component, ...rest}) => {
    const currentUser = useContext(AuthContext);
    return currentUser.currentUser ? (<Route exact {...rest} component={Component}/>) : (<Redirect to="/login" />)
}

export default AuthRoute;
