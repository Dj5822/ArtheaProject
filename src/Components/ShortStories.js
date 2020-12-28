import React from 'react';
import {Link} from 'react-router-dom';

import './ShortStories.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.navButtonPressed = this.navButtonPressed.bind(this);
  }

  navButtonPressed(event) {

  }

  render() {

    return (
      <div id="navbar">
        <Link to="/">
          <button id="returnButton" className="navButton">&lt;</button>
        </Link>
        <button id="button1" className="navButton" onClick={this.navButtonPressed}>Story 1</button>
        <button id="button2" className="navButton" onClick={this.navButtonPressed}>Story 2</button>
      </div>
    );
  }
}

class SideBar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <button className="sideButton">Chapter 1</button>
        <button className="sideButton">Chapter 2</button>
        <button className="sideButton">Chapter 3</button>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div id="content">
        <p>Test</p>
      </div>
    );
  }
}

class ShortStories extends React.Component {
  render() {
    return (
      <div id="ShortStories">
        <NavBar />
        <SideBar />
        <Content />
      </div>
    );
  }
}

export { ShortStories };
