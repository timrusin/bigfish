import React from 'react'
import parse from 'html-react-parser'
import './NewsCard.css'


const NewsCard = (props) => {
    const test = typeof props.body3 === "string" ? parse(props.body3) : null

  return (
    <div className='news-card'>
        <h1 className='news-item'>{props.title}</h1>
        <h2 className='news-item'>{props.date}</h2>
        <p className='news-item'>{props.body1}</p>
        <h4 className='news-item'>{props.body2}</h4>
        <h4 className='news-item'>{test}</h4>
        <p className='news-item'>{props.body4}</p>
    </div>
  )
}

export default NewsCard