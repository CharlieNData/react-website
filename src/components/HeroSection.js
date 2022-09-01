import React from 'react'
import Button from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video className="hero-video" src='/videos/video.mp4' autoPlay loop muted></video>
        <h1>I'm Charlie.</h1>
        <p>I enjoy frontend development, particularly React.</p>
        <div className='hero-btns'>
            <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
            CLICK HERE!
            </Button>
            <Button 
                className="btns" 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
            WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection