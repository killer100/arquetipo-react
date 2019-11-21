import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { renderRoutes } from 'react-router-config';
import { Router } from 'react-router-dom';

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
          <div className="App">
            <React.Suspense fallback={<div>Loading... </div>}>
              {renderRoutes(routes)}
            </React.Suspense>
          </div>
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
