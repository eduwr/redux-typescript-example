import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './pages/Main';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main></Main>
        </Route>
      </Switch>
    </Router>
  );
};
