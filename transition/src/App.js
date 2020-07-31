import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  const [playingClass, setPlayingClass] = useState(false)

  return (
    <div className={ playingClass ? "App playing" : "App" } >
      <button onClick={ () => setPlayingClass(!playingClass) } >Animate me!</button>
      <div class="ball"></div>
      <img class="paw" src="https://s3.amazonaws.com/stash.rachelnabors.com/codepen/css-animation-workshop/paw.png" />
    </div>
  );
}

export default App;
