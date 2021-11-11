import { CircularProgress } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react';
import { Route,Redirect} from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth();

    if(isLoading){
        return<div style={{textAlign:'center', margin:'20px'}}><CircularProgress /></div> 
      }
    
    return (
        <Route 
        {...rest}
      render={({ location }) =>
        user.email ?
          children: 
          <Redirect
            to={{
              pathname: "/log",
              state: { from: location }
            }}
          />
        
      }
        >
        </Route>
    );
  

};

export default PrivateRoute;