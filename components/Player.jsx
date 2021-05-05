import React, { Component } from "react";

class MusicPlayer extends Component {
  render() {
    const { playing } = this.props.player;

    return (
      <div>
        <button onClick={this.props.toggleMusic.bind(this, playing)}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default MusicPlayer;
