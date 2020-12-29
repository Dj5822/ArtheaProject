import React from 'react';
import {Link} from 'react-router-dom';

import './SideBar.scss';

class SideBar extends React.Component {
  render() {
    let sideButtons = [];
    if (this.props.selectedMain !== ""){
      for (let i=0; i<Object.keys(this.props.data[this.props.selectedMain]).length; i++){
        let buttonKey = Object.keys(this.props.data[this.props.selectedMain])[i]+"button";
        if (this.props.selectedSub === Object.keys(this.props.data[this.props.selectedMain])[i]) {
          sideButtons.push(<button key={buttonKey} className="selectedSideButton"
          onClick={() => this.props.onButtonClick(Object.keys(this.props.data[this.props.selectedMain])[i])}>{Object.keys(this.props.data[this.props.selectedMain])[i]}</button>);
        }
        else {
          sideButtons.push(<button key={buttonKey} className="sideButton"
          onClick={() => this.props.onButtonClick(Object.keys(this.props.data[this.props.selectedMain])[i])}>{Object.keys(this.props.data[this.props.selectedMain])[i]}</button>);
        }
      }
    }

    return (
      <div id="sidebar">
        {sideButtons}
      </div>
    );
  }
}

export {SideBar}
