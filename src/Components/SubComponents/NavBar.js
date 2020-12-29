import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    /*
      Renders buttons based on the number of stories.
    */
    let buttonList = [];
    for (let i=0; i<Object.keys(this.props.data).length; i++){
      let buttonKey = Object.keys(this.props.data)[i]+"button";
      if (this.props.selectedButton === Object.keys(this.props.data)[i]) {
        buttonList.push(<button key={buttonKey} className="selectedNavButton" onClick={() => this.props.onButtonClick(Object.keys(this.props.data)[i])}>{Object.keys(this.props.data)[i]}</button>);
      }
      else {
        buttonList.push(<button key={buttonKey} className="navButton" onClick={() => this.props.onButtonClick(Object.keys(this.props.data)[i])}>{Object.keys(this.props.data)[i]}</button>);
      }
    }

    return (
      <div id="navbar">
        <Link to="/">
          <button id="returnButton" className="navButton">&lt;</button>
        </Link>
        {buttonList}
      </div>
    );
  }
}

export {NavBar};
