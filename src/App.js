import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // Use Switch for v5

import routes from './routes.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}  // `exact` is still used in v5
            component={route.main}  // Use `component` instead of `element`
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
