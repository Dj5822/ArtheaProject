import React from 'react';
import {Link} from 'react-router-dom';

import './ShortStories.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNavButton: 0
    }

    this.navButtonPressed = this.navButtonPressed.bind(this);
  }

  navButtonPressed(num) {
    this.setState({
      selectedNavButton: num
    });
  }

  render() {
    let buttonClassList = new Array(2).fill("navButton");

    for (var i=0; i<buttonClassList.length; i++){
      if (this.state.selectedNavButton === i+1) {
        buttonClassList[i] = "selectedNavButton";
      }
    }

    return (
      <div id="navbar">
        <Link to="/">
          <button id="returnButton" className="navButton">&lt;</button>
        </Link>
        <button id="button1" className={buttonClassList[0]} onClick={() => this.navButtonPressed(1)}>Story 1</button>
        <button id="button2" className={buttonClassList[1]} onClick={() => this.navButtonPressed(2)}>Story 2</button>
      </div>
    );
  }
}

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSideButton: 0
    }

    this.sideButtonPressed = this.sideButtonPressed.bind(this);
  }

  sideButtonPressed(num) {
    this.setState({
      selectedSideButton: num
    });
  }

  render() {
    let buttonClassList = new Array(3).fill("sideButton");

    for (var i=0; i<buttonClassList.length; i++){
      if (this.state.selectedSideButton === i+1) {
        buttonClassList[i] = "selectedSideButton";
      }
    }

    return (
      <div id="sidebar">
        <button className={buttonClassList[0]} onClick={() => this.sideButtonPressed(1)}>Chapter 1</button>
        <button className={buttonClassList[1]} onClick={() => this.sideButtonPressed(2)}>Chapter 2</button>
        <button className={buttonClassList[2]} onClick={() => this.sideButtonPressed(3)}>Chapter 3</button>
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
