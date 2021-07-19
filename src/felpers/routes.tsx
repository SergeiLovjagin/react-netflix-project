import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const IsUserRedirect = (
  {
    children, user, loggedInPath, path, ...restProps
  }: {
    children: JSX.Element, user: any, loggedInPath: string, path: string
  },
) => {
  return (
    <Route
      exact
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
};

export const ProtectedRoute = (
  {
    children, user, loggedInPath, path, ...restProps
  }: {
    children: JSX.Element, user: any, path: string, loggedInPath: string
  },
) => {
  return (
    <Route
      exact
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect to={{
              pathname: '/signin',
              state: { from: location },
            }}
            />
          );
        }
        return null;
      }}
    />
  );
};
