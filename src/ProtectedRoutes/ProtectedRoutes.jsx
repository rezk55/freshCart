import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


export default function ProtectedRoutes({children}) {

    const token = localStorage.getItem('token');

    try {
        const decoded = jwtDecode(token);
        if(decoded) return children;  //If the user is logged in, they can view the page
        console.log(decoded);
    } catch (error) {
        console.log('err');
        localStorage.clear();
        return <Navigate to='/signIn' />;
  
    }

    // return <Navigate to='/signIn' />;
}
