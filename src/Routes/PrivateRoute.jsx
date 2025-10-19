import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
    console.log(location)

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;