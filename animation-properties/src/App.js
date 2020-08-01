import React, { useState } from 'react';
import './App.css';

function App() {

  const [currentAnimation, setCurrentAnimation] = useState('')
  return (
    <div className={ 'App ' + currentAnimation }>
      <menu>
        <button id="run" onClick={() => setCurrentAnimation(currentAnimation + ' running')} >Run</button>
        <button id="sit" onClick={() => setCurrentAnimation(currentAnimation + ' sitting')} >Sit</button>
        <button id="off" onClick={() => setCurrentAnimation('')} >Animation Off</button>
      </menu>
      <div class="announce">
        <p>Ready</p>
        <p>Set</p>
        <p>Go!</p>
      </div>
      <div class="tuna"></div>
    </div>
  );
}

export default App;
