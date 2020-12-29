import React from 'react';
import {Link} from 'react-router-dom';

import './ShortStories.scss';

import StoryData from '../Data/shortStories.json';
import {NavBar} from './SubComponents/NavBar.js';
import {SideBar} from './SubComponents/SideBar.js';

class Content extends React.Component {
  render() {
    let currentText = "";
    if (this.props.currentVolume !== ""){
      currentText = StoryData[this.props.currentStory][this.props.currentVolume];
    }

    return (
      <div id="content">
        <p>{currentText}</p>
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
      selectedStory: storyTitle,
      selectedVolume: ""
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
        <NavBar data={StoryData} selectedButton={this.state.selectedStory} onButtonClick={this.navButtonPressed} />
        <SideBar data={StoryData} selectedMain={this.state.selectedStory} selectedSub={this.state.selectedVolume}
        onButtonClick={this.sideButtonPressed} />
        <Content currentStory={this.state.selectedStory} currentVolume={this.state.selectedVolume} />
      </div>
    );
  }
}

export { ShortStories };
