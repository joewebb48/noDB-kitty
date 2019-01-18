import React, { Component } from 'react';
// import Bird from './Components/Bird/Bird';
import Name from './Components/Name/Name';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='main-bird-div'>
          {/* <Bird className='bird-component' /> */}
          <Name />
        </div>
      </div>
    );
  }
}

export default App;
