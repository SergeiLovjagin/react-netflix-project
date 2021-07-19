import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import {
  Browse, Home, SignIn, SignUp,
} from './pages';
import * as ROUTE from './constans/routes';
import { IsUserRedirect, ProtectedRoute } from './felpers/routes';

export const App: React.FC = () => {
  const user = { };

  return (
    <BrowserRouter>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTE.BROWSE} path={ROUTE.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTE.BROWSE} path={ROUTE.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute user={user} loggedInPath={ROUTE.BROWSE} path={ROUTE.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect user={user} loggedInPath={ROUTE.BROWSE} path={ROUTE.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </BrowserRouter>
  );
};
