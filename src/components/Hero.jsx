import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef(null);
    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate = 2;
    },[])
  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro Maxxxxxxxxxxxx</h1>
            <img src='/title.png' alt='macbook-title'/>
        </div>
        <video ref={videoRef} src='/videos/hero.mp4' autoPlay muted playsInline/>
        <button>Buy</button>
        <p>From 1500$ or 122$/mo for 12 months</p>
    </section>
  )
}

export default Hero
