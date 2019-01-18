import React, { Component } from 'react';
import DisplayName from './DisplayName';
import './Name.css';

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
    this.setState({
      name: [...this.state.name, this.state.input],
      input: ''
    });
  }

  render() {
    let newName = this.state.name.map((element, index) => {
      return <DisplayName key={index} name={element} />;
    });
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
          <h1>{newName}</h1>
        </div>
      </main>
    );
  }
}
