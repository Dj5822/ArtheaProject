import React from 'react';
import {Link} from 'react-router-dom';

import './ShortStories.scss';
import StoryData from '../Data/shortStories.json';

class NavBar extends React.Component {
  render() {
    /*
      Renders buttons based on the number of stories.
    */
    let storyButtons = [];
    for (let i=0; i<Object.keys(StoryData).length; i++){
      let buttonKey = Object.keys(StoryData)[i]+"button";
      if (this.props.currentStory === Object.keys(StoryData)[i]) {
        storyButtons.push(<button key={buttonKey} className="selectedNavButton" onClick={() => this.props.onButtonClick(Object.keys(StoryData)[i])}>{Object.keys(StoryData)[i]}</button>);
      }
      else {
        storyButtons.push(<button key={buttonKey} className="navButton" onClick={() => this.props.onButtonClick(Object.keys(StoryData)[i])}>{Object.keys(StoryData)[i]}</button>);
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
  render() {
    let volumeButtons = [];
    if (this.props.currentStory !== ""){
      for (let i=0; i<Object.keys(StoryData[this.props.currentStory]).length; i++){
        let buttonKey = Object.keys(StoryData[this.props.currentStory])[i]+"button";
        if (this.props.currentVolume === Object.keys(StoryData[this.props.currentStory])[i]) {
          volumeButtons.push(<button key={buttonKey} className="selectedSideButton"
          onClick={() => this.props.onButtonClick(Object.keys(StoryData[this.props.currentStory])[i])}>{Object.keys(StoryData[this.props.currentStory])[i]}</button>);
        }
        else {
          volumeButtons.push(<button key={buttonKey} className="sideButton"
          onClick={() => this.props.onButtonClick(Object.keys(StoryData[this.props.currentStory])[i])}>{Object.keys(StoryData[this.props.currentStory])[i]}</button>);
        }
      }
    }

    return (
      <div id="sidebar">
        {volumeButtons}
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
  constructor(props) {
    super(props);
    this.state = {
      selectedStory: "",
      selectedVolume: ""
    }

    this.navButtonPressed = this.navButtonPressed.bind(this);
    this.sideButtonPressed = this.sideButtonPressed.bind(this);
  }

  navButtonPressed(storyTitle) {
    this.setState({
      selectedStory: storyTitle
    });
  }

  sideButtonPressed(volumeTitle) {
    this.setState({
      selectedVolume: volumeTitle
    });
  }

  render() {
    return (
      <div id="ShortStories">
        <NavBar currentStory={this.state.selectedStory} onButtonClick={this.navButtonPressed} />
        <SideBar currentStory={this.state.selectedStory} currentVolume={this.state.selectedVolume}
        onButtonClick={this.sideButtonPressed} />
        <Content currentStory={this.state.selectedStory} currentVolume={this.state.selectedVolume} />
      </div>
    );
  }
}

export { ShortStories };
