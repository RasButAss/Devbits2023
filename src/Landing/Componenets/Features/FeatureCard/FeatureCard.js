import React from 'react'
import './featurecard.css'
import security from '../images/security.png'
import rename from '../images/rename.png'

const FeatureCard = () => {
  return (
    <div className='featurecard-main-div'>
      <div className='featurecard-image-div'>
        <img src={security} className='featurecard-image' />
      </div>
      <div className='featurecard-content'>
        <h1>Feature 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default FeatureCard