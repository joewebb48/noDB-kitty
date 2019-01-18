import React from 'react';
import './Bird.css';

export default function Bird() {
  return (
    <div className='main-bird'>
      <div className='container'>
        <div className='bird-container'>
          <div className='bird' />
          <div className='bird' />
        </div>
      </div>
      <div className='main-bird other-bird' />
    </div>
  );
}
