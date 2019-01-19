import React, { Component } from 'react';
import axios from 'axios';
import './DadJoke.css';

export default class DadJokes extends Component {
  constructor() {
    super();

    this.state = {
      joke: []
    };
    this.handleJoke = this.handleJoke.bind(this);
  }

  handleJoke() {
    console.log('hit');
    axios
      .get('https://icanhazdadjoke.com', {
        headers: {
          Accept: 'text/plain'
        }
      })
      .then(res => {
        console.log('dj-res.data', res.data);
        this.setState({
          joke: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log('joke', this.state.joke);
    // const showJoke = this.state.joke.map((joke, index) => (
    //   <h1 key={index}>{joke}</h1>
    // ));
    return (
      <div className='joke-card'>
        <button className='joke-button' onClick={this.handleJoke}>
          Dont Click
        </button>
        <div className='joke-container'>
          <h5>{this.state.joke}</h5>
        </div>
        {/* {showJoke} */}
      </div>
    );
  }
}
