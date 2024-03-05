import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
     const {user,loading} = useContext(AuthContext)
     const location = useLocation()
     console.log(location)

     if(user?.email)
     {
           return children
     }
     
     if(loading)
     {
        return <progress className="progress w-56"></progress>
     }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
    ;
};

export default PrivateRoute;