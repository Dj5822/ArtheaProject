import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Return to Menu</button>
        </Link>
        <button>Story 1</button>
      </div>
    );
  }
}

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <button>Sub Story 1</button>
      </div>
    );
  }
}

class ShortStories extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SideBar />
      </div>
    );
  }
}

export { ShortStories };
