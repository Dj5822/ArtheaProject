import React from 'react';

class InfoPane extends React.Component {
  render() {
    let characterInfo = {};
    let infoList = [];
    if (this.props.currentSub !== ""){
      console.log(this.props.currentMain);
      console.log(this.props.currentSub);
      characterInfo = this.props.data[this.props.currentMain][this.props.currentSub];

      console.log(characterInfo);
      for (var i=0; i<Object.keys(characterInfo).length; i++) {
        let currentKey = Object.keys(characterInfo)[i];
        infoList.push(
          <p key={currentKey}>
            {currentKey + ": "}{characterInfo[currentKey]}
          </p>);
      }
    }

    return (
      <div id="charInfo">
        {infoList}
      </div>
    );
  }
}

export {InfoPane};