import React, { Component } from 'react';
import axios from 'axios';
import NameComp from './NameComp';

export default class GetName extends Component {
  constructor() {
    super();

    this.state = {
      name: [],
      displayName: []
    };
    this.handleGetName = this.handleGetName.bind(this);
  }

  componentDidMount() {
    axios.get('/api/name').then(response => {
      console.log(333, response.data);
      this.setState({
        displayName: response.data
      });
    });
  }
  handleGetName() {
    axios.get('/api/name').then(response => {
      console.log(333, response.data);
      this.setState({
        name: response.data
      });
    });
  }

  render() {
    const mappedNames = this.state.name.map(eachName => {
      console.log('MN', eachName);
      return <NameComp key={eachName.index} nameMaybe={eachName} />;
    });
    const mappedDNames = this.state.displayName.map(eachName => {
      console.log('DNames', eachName);
      return <NameComp key={eachName.index} nameMaybe={eachName} />;
    });
    return (
      <div>
        <h1>{mappedNames}</h1>
        <h2>words</h2>
        <button onClick={this.handleGetName}>GetName</button>
        {/* <h1>{this.state.name}</h1> */}
        <h1>{mappedDNames}</h1>
      </div>
    );
  }
}
