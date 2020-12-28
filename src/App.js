import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Menu } from './Components/Menu.js';
import { ShortStories } from './Components/ShortStories.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/short-stories">
            <ShortStories />
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
