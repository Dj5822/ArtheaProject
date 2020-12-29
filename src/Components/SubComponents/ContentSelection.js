import React from 'react';

class ContentSelection extends React.Component {
  render() {
    let currentText = "";
    if (this.props.currentSub !== ""){
      currentText = this.props.data[this.props.currentMain][this.props.currentSub];
    }

    return (
      <div id="content">
        <button>{currentText}</button>
        <button>{currentText}</button>
        <button>{currentText}</button>
      </div>
    );
  }
}

export {ContentSelection};
