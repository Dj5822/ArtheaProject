import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Menu } from './Components/Menu.js';
import { IndexPage } from './Components/IndexPage.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/short-stories">
            <IndexPage />
          </Route>
          <Route path="/skills">
            <IndexPage />
          </Route>
          <Route path="/map">
            <IndexPage />
          </Route>
          <Route path="/items">
            <IndexPage />
          </Route>
          <Route path="/characters">
            <IndexPage />
          </Route>
          <Route path="/history">
            <IndexPage />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
