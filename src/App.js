import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Menu } from './Components/Menu.js';
import { IndexPage } from './Components/IndexPage.js';
import StoryData from './Data/shortStories.json';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/short-stories">
            <IndexPage data={StoryData} />
          </Route>
          <Route path="/skills">
            <IndexPage data={StoryData} />
          </Route>
          <Route path="/map">
            <IndexPage data={StoryData} />
          </Route>
          <Route path="/items">
            <IndexPage data={StoryData} />
          </Route>
          <Route path="/characters">
            <IndexPage data={StoryData} />
          </Route>
          <Route path="/history">
            <IndexPage data={StoryData} />
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
