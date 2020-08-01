import React, { useState } from 'react';
import './App.css';

function App() {

  const [currentAnimation, setCurrentAnimation] = useState('')
  return (
    <div className={ 'App ' + currentAnimation }>
      <div  className={ currentAnimation } style={{ marginBottom: '7rem' }} >
        <menu>
          <button id="run" onClick={() => setCurrentAnimation('running')} >Run</button>
          <button id="sit" onClick={() => setCurrentAnimation('sitting')} >Sit</button>
          <button id="off" onClick={() => setCurrentAnimation('')} >Animation Off</button>
        </menu>
        <div class="announce">
          <p>Ready</p>
          <p>Set</p>
          <p>Go!</p>
        </div>
        <div class="tuna"></div>
      </div>

      <div  className='stage' style={{ margin: '7rem 0' }} >
        <div class="window">
          <div class="tail"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
