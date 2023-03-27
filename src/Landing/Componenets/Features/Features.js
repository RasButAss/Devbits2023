import React from 'react'
import './features.css'
import FeatureCard from './FeatureCard/FeatureCard'

const Features = () => {
  return (
    <div className='features-main-div'>
      <h1 className='features-heading'>Features</h1>
      <div className='features-featurecard-container'>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  )
}

export default Features