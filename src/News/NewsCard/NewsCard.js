import React from 'react'
import './newscard.css'
import placeholderimg from './placeholder_image.jpg'

const NewsCard = ({imgurl, heading, summary, redirect}) => {
  return (
    <div className='newscard-main-div'>
      <img className="newscard-image" src={imgurl === null ? placeholderimg : imgurl} alt="news" />
      <div className='newscard-heading'>
        <h3>{heading}</h3>
      </div>
      <div className='newscard-content'>
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default NewsCard