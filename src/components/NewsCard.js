import React from 'react'
import './NewsCard.css'


const NewsCard = (props) => {
    console.log(props);
  return (
    <div className='news-card'>
        <h1 className='news-item'>{props.title}</h1>
        <h2 className='news-item'>{props.date}</h2>
        <p className='news-item'>{props.body1}</p>
        <h4 className='news-item'>{props.body2}</h4>
        <h4 className='news-item'>{props.body3}</h4>
        <p className='news-item'>{props.body4}</p>
    </div>
  )
}

export default NewsCard