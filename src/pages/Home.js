import React from 'react'
import './Home.css'
import News from '../data/News'
import NewsCard from '../components/NewsCard'


// https://www.youtube.com/watch?v=yqe5UB_BF7Q

const Home = () => {
  return (
    <div className='home-container'>
      <div className='logo-container'>
        <img src="/assets/images/Big_Fish_Logo_2.png"
            className='big-logo'
            alt='Big Fish Aquarium Large Logo'
        ></img>
      </div>

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

      <div className='news-container'>
        {News.map((item)=> {
          return <NewsCard key={item.id} {...item}/>
        })}
      </div>

    </div>
  )
}

export default Home