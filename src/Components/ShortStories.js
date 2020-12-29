import React from 'react';
import {Link} from 'react-router-dom';

import './ShortStories.scss';
import StoryData from '../Data/shortStories.json';

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
    let storyButtons = [];

    for (let i=0; i<Object.keys(StoryData).length; i++){
      let buttonId = "button"+(i+1);
      if (this.state.selectedNavButton === i+1) {
        storyButtons.push(<button key={buttonId} className="selectedNavButton" onClick={() => this.navButtonPressed(i+1)}>{Object.keys(StoryData)[i]}</button>);
      }
      else {
        storyButtons.push(<button key={buttonId} className="navButton" onClick={() => this.navButtonPressed(i+1)}>{Object.keys(StoryData)[i]}</button>);
      }
    }

    return (
      <div id="navbar">
        <Link to="/">
          <button id="returnButton" className="navButton">&lt;</button>
        </Link>
        {storyButtons}
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
