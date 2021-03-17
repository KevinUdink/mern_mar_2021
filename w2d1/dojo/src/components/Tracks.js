import React, { Component } from 'react';

// React.Component same as importing { Component } and then using it directly
class Tracks extends Component {
  render() {
    return (
      <div className="track">
        <h3 className="track-header">{ this.props.title } { this.props.userName } </h3>
        <div className="track-module"></div>
        <div className="track-module"></div>
        <div className="track-module"></div>
        <div className="track-module"></div>
      </div>
    )
  }
}

export default Tracks;
