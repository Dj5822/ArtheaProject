import React from 'react';
import {Link} from 'react-router-dom';

import './ShortStories.scss';

import StoryData from '../Data/shortStories.json';
import {NavBar} from './SubComponents/NavBar.js';
import {SideBar} from './SubComponents/SideBar.js';

class Content extends React.Component {
  render() {
    let currentText = "";
    if (this.props.currentSub !== ""){
      currentText = StoryData[this.props.currentMain][this.props.currentSub];
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
      selectedHeader: "",
      selectedSubHeader: ""
    }

    this.navButtonPressed = this.navButtonPressed.bind(this);
    this.sideButtonPressed = this.sideButtonPressed.bind(this);
  }

  navButtonPressed(header) {
    this.setState({
      selectedHeader: header,
      selectedSubHeader: ""
    });
  }

  sideButtonPressed(subHeader) {
    this.setState({
      selectedSubHeader: subHeader
    });
  }

  render() {
    return (
      <div id="ShortStories">
        <NavBar data={StoryData} selectedButton={this.state.selectedHeader}
        onButtonClick={this.navButtonPressed} />
        <SideBar data={StoryData} selectedMain={this.state.selectedHeader}
        selectedSub={this.state.selectedSubHeader} onButtonClick={this.sideButtonPressed} />
        <Content currentMain={this.state.selectedHeader}
        currentSub={this.state.selectedSubHeader} />
      </div>
    );
  }
}

export { ShortStories };
