import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars

import {
  Browse, Home, SignIn, SignUp,
} from './pages';
import * as ROUTE from './constans/routes';

export const App: React.FC = () => (

  <BrowserRouter>

    <Route exact path={ROUTE.HOME}>
      <Home />
    </Route>

    <Route exact path={ROUTE.BROWSE}>
      <Browse />
    </Route>

    <Route exact path={ROUTE.SIGN_IN}>
      <SignIn />
    </Route>

    <Route exact path={ROUTE.SIGN_UP}>
      <SignUp />
    </Route>

  </BrowserRouter>
);
