import React from 'react'
import './NewsCard.css'


const NewsCard = (props) => {
    console.log(props);
  return (
    <div className='news-card'>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <p>{props.body1}</p>
        <p>{props.body2}</p>
        <p>{props.body3}</p>
    </div>
  )
}

export default NewsCard