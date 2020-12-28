import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.scss';

class Menu extends React.Component {

  render() {
    return (
      <div id="Menu">
        <h1>Arthea Project</h1>
        <Link to="/short-stories">
          <button>Short Stories</button>
        </Link>
        <button>Skills</button>
        <button>Map</button>
        <button>Items</button>
        <button>Characters</button>
        <button>History</button>
      </div>
    );
  }
}

export { Menu };
