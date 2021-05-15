import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const authRoute = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const history = useHistory();
        const {currentUser} = useContext(AuthContext);
        if (currentUser) {
            return (
                <WrappedComponent {...props} />
            )
        }
        else {
            history.push("/login")
            return (
                <></>
            )
        }
    }
    return AuthComponent;
    
}
export default authRoute;