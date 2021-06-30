import React from 'react';
import {Link} from 'react-router-dom';

import './Menu.scss';

class Menu extends React.Component {

  render() {
    return (
      <div id="Menu">
        <h1>Arthea Project</h1>
        <Link to="/short-stories">
          <button className="menuButton">Short Stories</button>
        </Link>
        <Link to="/skills">
          <button className="menuButton">Skills</button>
        </Link>
        <Link to="/map">
          <button className="menuButton">Map</button>
        </Link>
        <Link to="/items">
          <button className="menuButton">Items</button>
        </Link>
        <Link to="/characters">
          <button className="menuButton">Characters</button>
        </Link>
        <Link to="/history">
          <button className="menuButton">History</button>
        </Link>
      </div>
    );
  }
}

export { Menu };
