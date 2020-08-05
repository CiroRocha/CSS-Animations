import React, { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [scrollPosition, setScrollPosition] = useState(0)
  const [aliceMood, setAliceMood] = useState('curious')

  const handleScroll = () => {
    const position = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)

    if(position >= 10 && position < 20) {
      setAliceMood('curious')
    } else if(position >= 20 && position < 30) {
        setAliceMood('bored')
    } else if(position >= 30 && position < 40) {
        setAliceMood('sleeping')
    } else if(position >= 40 && position < 50) {
        setAliceMood('waking')
    } else if(position >= 50 && position < 60) {
        setAliceMood('weird')
    } else if(position >= 60) {
        setAliceMood('jolted')
    } else {
      setAliceMood('frightened')
    }

    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`App ${aliceMood}`} >
      {/* http://rachelnabors.com/alice-in-videoland/book */}
      <div class="wrapper">
        <div class="alice-falling" style={{ top: `${scrollPosition}vh` }} ></div>
        {/* Now make Tuna "fall" from the bottom. See if you can expose him as the Cheshire cat he is! */}
        <div class="tuna-falling" style={{ bottom: `${scrollPosition}vh` }} >
          <img class="black-tuna" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/tuna-alice3.png" alt='' />
          <img class="tuna-glow" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/tuna-alice2.png" alt='' style={{ opacity: `${scrollPosition}%` }} />
          <img class="real-tuna" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/tuna-alice1.png" alt='' />
        </div>
        <div>
        <div id="tunnel" class="frightened">
          <div class="page page_falling falling_frightened" data-mood="frightened">
            <p>Either the well was very deep or she fell very slowly, for she had plenty of time to look about her on the way down.</p>
          </div>
          <div class="page page_falling falling_curious" data-mood="curious">
            <p>At first it was too dark for her to see anything, but as her eyes adjusted, she could make out what seemed to be cupboards, bookshelves, paintings, lining the walls she was rushing past. </p>
          </div>
          <div class="page page_falling falling_bored" data-mood="bored">
            <p>Down, down, down she fell. Would it never come to an end? She began to wonder how many miles she’d fallen and whether she’d end up at the center of the Earth&mdash;or come out the other side!</p>
          </div>
          <div class="page page_falling falling_sleeping" data-mood="sleeping">
            <p>How would she call her sister? What if she didn’t speak the language? What if they couldn’t understand her and put her in an orphanage? She’d never see her sister or her cat again!</p>
          </div>
          <div class="page page_falling falling_waking" data-mood="waking">
            <p>Poor Tuna! Would they remember to clean his litter box or give him his kibble? If only Tuna were with her now. There were no mice to live on in the air, but perhaps he could catch a bat. </p>
          </div>

          {/* Wait 3 seconds or so for the video to end. Then return to the scene */}
          <div class="page page_falling falling_weird" data-mood="weird">
            <p>Before she could worry too much, her eyes grew heavy and she began to nod off whispering, “Do cats eat bats?” to no one in particular.</p>
          </div>
          <div class="page page_falling falling_aftermath" data-mood="jolted">
            <p>She must’ve been dreaming, because for a moment she imagined he was there with her, as large as her sister.</p>
          </div>
          <div class="page page_falling falling_lookit-cat" data-mood="jolted"></div>
          <div class="page page_falling falling_cat-reveal" data-mood="jolted"></div>
          <div class="page page_falling falling_cat-out" data-mood="jolted">
            <p>&ldquo;Oh yes, cats eat bats all the time. You wouldn’t happen to be a bat, now would you?&rdquo;</p>
          </div>
        </div>
      </div> {/* #tunnel */}
      </div> {/* .wrapper */}
    </div>
  );
}

export default App;
