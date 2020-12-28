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
        <button className="menuButton">Skills</button>
        <button className="menuButton">Map</button>
        <button className="menuButton">Items</button>
        <button className="menuButton">Characters</button>
        <button className="menuButton">History</button>
      </div>
    );
  }
}

export { Menu };
