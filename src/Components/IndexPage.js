import React from 'react';

import './IndexPage.scss';

import {NavBar} from './SubComponents/NavBar.js';
import {SideBar} from './SubComponents/SideBar.js';
import {ContentSelection} from './SubComponents/ContentSelection.js';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHeader: Object.keys(this.props.data)[0],
      selectedSubHeader: Object.keys(this.props.data[Object.keys(this.props.data)[0]])[0]
    }

    this.navButtonPressed = this.navButtonPressed.bind(this);
    this.sideButtonPressed = this.sideButtonPressed.bind(this);
  }

  // shows data pertaining to the selected navbutton button.
  navButtonPressed(header) {
    this.setState({
      selectedHeader: header,
      selectedSubHeader: Object.keys(this.props.data[Object.keys(this.props.data)[0]])[0]
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
    let data = this.props.data;
    return (
      <div id="IndexPage">
        <NavBar data={data} selectedButton={this.state.selectedHeader}
        onButtonClick={this.navButtonPressed} />
        <SideBar data={data} selectedMain={this.state.selectedHeader}
        selectedSub={this.state.selectedSubHeader} onButtonClick={this.sideButtonPressed} />
        <ContentSelection data={data} currentMain={this.state.selectedHeader}
        currentSub={this.state.selectedSubHeader} />
      </div>
    );
  }
}

export { IndexPage };
