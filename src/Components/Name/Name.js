import React, { Component } from 'react';
import DisplayName from './DisplayName';
import './Name.css';
import DeleteName from './DeleteName/DeleteName';
import GetName from './GetName/GetName';
import axios from 'axios';

export default class name extends Component {
  constructor() {
    super();

    this.state = {
      name: [],
      input: ''
    };

    this.addName = this.addName.bind(this);
  }
  handleInput(val) {
    this.setState({
      input: val
    });
  }

  addName() {
    const person = {
      name: this.state.name,
      input: this.state.input
    };
    axios.post('/api/name', person).then(response => {
      this.setState({
        name: response.data
      });
      this.setState({ input: '' });
    });
  }

  render() {
    // let newName = this.state.name.map((element, index) => {
    //   return <DisplayName key={index} name={element} />;
    // });
    return (
      <main>
        <div className='add-name'>
          <input
            value={this.state.input}
            placeholder='Enter a name or something'
            onChange={e => {
              this.handleInput(e.target.value);
            }}
          />
          <button onClick={this.addName}>Add</button>
          {/* <h1>{newName}</h1> */}
        </div>
        <DeleteName />
        <GetName />
      </main>
    );
  }
}
