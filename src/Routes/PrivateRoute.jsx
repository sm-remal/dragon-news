import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
    // console.log(location)

    if(loading){
        return <Spinner></Spinner>
    }

    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;