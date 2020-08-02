import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [loaded, setLoaded] = useState(false)
  const [transictioning, setTransictioning] = useState(false)

  useEffect(() => {
    setTimeout (
      () => loaderTransition(), 5900
    )
  }, [])

  function loaderTransition () {
    setTransictioning(true)
    setTimeout (
      () => {
        setTransictioning(false)
        setLoaded(true)
      }, 1500
    )
  }

  return (
    <div className="App">
      {/* swap the .loading class with .loaded using JavaScript, manipulate visibility with CSS */}
      <div id="stage" className={ loaded ? 'loaded' : transictioning ? 'transictioning' : 'loading' }>
        <div className="loader">
          <div className="rollout">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/yarnball.svg" className="yarn" alt='' />
          </div>
          <div className="loading-text">Loading</div>
        </div>
        <div className="scene window">
          <div className="tail"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
