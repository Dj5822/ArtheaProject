import React from 'react';
import {Link} from 'react-router-dom';

import './ShortStories.scss';

import StoryData from '../Data/shortStories.json';
import {NavBar} from './SubComponents/NavBar.js';
import {SideBar} from './SubComponents/SideBar.js';
import {ContentSelection} from './SubComponents/ContentSelection.js';

class ShortStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHeader: Object.keys(StoryData)[0],
      selectedSubHeader: Object.keys(StoryData[Object.keys(StoryData)[0]])[0]
    }

    this.navButtonPressed = this.navButtonPressed.bind(this);
    this.sideButtonPressed = this.sideButtonPressed.bind(this);
  }

  navButtonPressed(header) {
    this.setState({
      selectedHeader: header,
      selectedSubHeader: Object.keys(StoryData[Object.keys(StoryData)[0]])[0]
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
        <ContentSelection data={StoryData} currentMain={this.state.selectedHeader}
        currentSub={this.state.selectedSubHeader} />
      </div>
    );
  }
}

export { ShortStories };
