import React from 'react'
import './newscard.css'
import placeholderimg from './placeholder_image.jpg'

const NewsCard = ({imgurl, heading, summary, redirect}) => {
  return (
    <div className='newscard-main-div'>
      <a href={redirect} className='fill-div' target='_blank' rel="noreferrer"></a>
      <img className="newscard-image" src={imgurl === null ? placeholderimg : imgurl} alt="news" />
      <div className='newscard-text'>
        <div className='newscard-heading'>
          <h3>{heading}</h3>
        </div>
        <div className='newscard-content'>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard