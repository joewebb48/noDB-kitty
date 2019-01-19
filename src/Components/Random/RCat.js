import React, { Component } from 'react';

export default class RCat extends Component {
  render() {
    let text = 'random';
    return (
      <div>
        {/* <input value={} /> */}
        <img src={`https://robohash.org/${text}.png?set=set4`} />
      </div>
    );
  }
}
