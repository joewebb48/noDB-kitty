import React from 'react';

export default function Rps() {
  var things = ['Rock', 'Paper', 'Scissor'];
  var thing = things[Math.floor(Math.random() * things.length)];
  console.log('The computer chose:' + thing);
  return (
    <div style={{ border: '2px black solid' }}>
      <header>
        <h6>R_P_S</h6>
      </header>
      <answer>
        <p>{thing}</p>
      </answer>
      <div>
        <select>
          <option>Rock</option>
          <option>Paper</option>
          <option>Scissor</option>
        </select>
      </div>
    </div>
  );
}
