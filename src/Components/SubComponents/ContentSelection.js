import React from 'react';
import './ContentSelection.scss'

class ContentSelection extends React.Component {
  render() {
    let selectedStory = {};
    let buttonsList = [];
    if (this.props.currentSub !== ""){
      selectedStory = this.props.data[this.props.currentMain][this.props.currentSub];
    }

    for (var i=0; i<Object.keys(selectedStory).length; i++) {
      buttonsList.push(
        <button class="selectionButton">
          {Object.keys(selectedStory)[i]}
        </button>);
    }

    return (
      <div id="content">
        {buttonsList}
      </div>
    );
  }
}

export {ContentSelection};
