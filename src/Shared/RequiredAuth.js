import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';




const RequiredAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
//if he is not a user then send to log in page !user no user
  if(loading){
      return <Loading></Loading>
  }


if(!user){
       return <Navigate to='/landingPage'  state={{ from: location }} replace></Navigate>
    }
    return children;
}
export default RequiredAuth;