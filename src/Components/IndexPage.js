import React from 'react';

import './IndexPage.scss';

import StoryData from '../Data/shortStories.json';
import {NavBar} from './SubComponents/NavBar.js';
import {SideBar} from './SubComponents/SideBar.js';
import {ContentSelection} from './SubComponents/ContentSelection.js';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHeader: Object.keys(StoryData)[0],
      selectedSubHeader: Object.keys(StoryData[Object.keys(StoryData)[0]])[0]
    }

    this.navButtonPressed = this.navButtonPressed.bind(this);
    this.sideButtonPressed = this.sideButtonPressed.bind(this);
  }

  // shows data pertaining to the selected navbutton button.
  navButtonPressed(header) {
    this.setState({
      selectedHeader: header,
      selectedSubHeader: Object.keys(StoryData[Object.keys(StoryData)[0]])[0]
    });
  }

  // shows data pertaining to the selected side button.
  sideButtonPressed(subHeader) {
    this.setState({
      selectedSubHeader: subHeader
    });
  }

  render() {
    // data is currently set to story data.
    let pageData = StoryData;
    return (
      <div id="IndexPage">
        <NavBar data={pageData} selectedButton={this.state.selectedHeader}
        onButtonClick={this.navButtonPressed} />
        <SideBar data={pageData} selectedMain={this.state.selectedHeader}
        selectedSub={this.state.selectedSubHeader} onButtonClick={this.sideButtonPressed} />
        <ContentSelection data={pageData} currentMain={this.state.selectedHeader}
        currentSub={this.state.selectedSubHeader} />
      </div>
    );
  }
}

export { IndexPage };
