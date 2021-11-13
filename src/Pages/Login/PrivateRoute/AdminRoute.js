import { LinearProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {isAdmin, isLoading} = useAuth();
    if(isLoading){
      return <LinearProgress />
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;