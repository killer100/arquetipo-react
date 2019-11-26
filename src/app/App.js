import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { Router } from 'react-router-dom';

import Layout from '@core/components/layout';

import AppContext from './AppContext';
import history from './config/history';
import routes from './config/routes.config';
import store from './store';

import './App.css';

function App() {
  return (
    <AppContext.Provider
      value={{
        routes
      }}
    >
      <Provider store={store}>
        <Router history={history}>
          <Layout />
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
