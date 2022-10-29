import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { Navigate, redirect, useLocation } from "react-router-dom";
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }

    return children
};

export default RequireAuth;