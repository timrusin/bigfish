import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
        <img src="/assets/images/Big_Fish_Logo_2.png"
            className='big-logo'
            alt='Big Fish Aquarium Large Logo'
        ></img>

      <div className="banner-video-container">
          <video
            src='/assets/videos/BF_test_video.mov'
            autoPlay
            playsInline
            loop
            muted
            className="banner-video"
          />
      </div>

    </div>
  )
}

export default Home