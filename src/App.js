import React, { Component } from 'react';
import Name from './Components/Name/Name';
import DadJokes from './Components/DadJokes/DadJokes';
import RCat from './Components/Random/RCat';
import RRobot from './Components/Random/RRobot';
import RMonster from './Components/Random/RMonster';
import Flex from './Components/Flex/Flex';
import Rps from './Components/RPS/Rps';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='components'>
          <Name />
          {/* <Flex /> */}
          <DadJokes />
          <Rps />
          {/* <RCat /> */}
          {/* <RRobot /> */}
          {/* <RMonster /> */}
        </div>
      </div>
    );
  }
}

export default App;
