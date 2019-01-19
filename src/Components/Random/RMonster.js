import React, { Component } from 'react';

export default class RRobot extends Component {
  render() {
    let text = 'random';
    return (
      <div>
        {/* <input value={} /> */}
        <img src={`https://robohash.org/${text}.png?set=set2`} />
      </div>
    );
  }
}
