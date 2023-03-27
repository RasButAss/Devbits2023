import React from 'react'
import './homepage.css'
import mainimage from './blur_edges.png'

const Homepage = () => {
  return (
    <div className='homepage-main-div'>
      <div>
        <img src={mainimage} className="homepage-img" />
      </div>
      <div className='homepage-title'>
        <h1 className='homepage-heading'>Reimagining Investment Handling</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue. </p>
      </div>
    </div>
  )
}

export default Homepage