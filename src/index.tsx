import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import 'normalize.css';
import { GlobalStyle } from './globalStyles';
import { FirebaseContext } from './context/firebase';
import { firebase } from './lib/firebase.prod';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
