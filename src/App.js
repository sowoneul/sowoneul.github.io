import React from 'react';
import Item from './Item.js';
import Menu from './Menu.js';
import logo from './logo.svg';
import './App.css';
import ParticleAnimation from 'react-particle-animation'
import gachaThumb from './img/gacha.png'
import gachaPreview from './img/gacha_preview.png'

class App extends React.Component {
  componentDidMount() {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    window.anime.timeline({loop: false})
      .add({
        targets: '.ml11 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700,
        delay: 350
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 5],
        easing: "easeOutExpo",
        duration: 900,
        delay: 100
      }).add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 900,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
      }).add({
        targets: '.ml11 .line',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 300
      })

    // window.anime.timeline({loop: true})
    //   .add({
    //     targets: '.ml11 .letter',
    //     translateY: [-10, 10],
    //     easing: "easeOutCubic",
    //     duration: 2000,
    //     delay: 250
    //   }).add({
    //     targets: '.ml11 .letter',
    //     translateY: [10, -10],
    //     easing: 'easeOutCubic',
    //     duration: 2000
    //   });
  }

  handleHoverIn(e) {
    e.currentTarget.src = gachaPreview;
  }

  handleHoverOut(e) {
    e.currentTarget.src = gachaThumb;
  }

  
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="head">
          <h1 className="ml11">
            <ParticleAnimation
              numParticles={115}
              style={{
                position: 'absolute',
                width: '100%',
                height: '8.5vw',
                minHeight: '50px',
                top: 0,
                borderBottom: '1px solid rgb(255, 136, 187, .5)'
              }}
              interactive={true}
              background={{r: 250, g: 250, b:250, a:255}}
              color={{r: 255, g: 136, b:187, a:125}}
              particleSpeed={0.25}
            />
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span className="letters title">sowoneul</span>
            </span>
          </h1>
        </div>
        <div className='main'>
          <div className='container h-100'>
            <div className='row h-100'>
              <div className='col-4 align-self-center'>
                <Item link='#' type='wip' />
              </div>
              <div className='col-4 align-self-center'>
                <Item link='https://sowoneul.github.io/bandori-gacha-sim' type='gacha' />
              </div>
              <div className='col-4 align-self-center'>
                <Item link='#' type='wip' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
