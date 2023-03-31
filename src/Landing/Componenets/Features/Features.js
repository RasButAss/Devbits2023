import React from 'react'
import './features.css'
import FeatureCard from './FeatureCard/FeatureCard'

const Features = () => {
  return (
    <div className='features-main-div'>
      <h1 className='features-heading'>Features</h1>
      <div className='features-featurecard-container'>
        <FeatureCard index={0}/>
        <FeatureCard index={1}/>
        <FeatureCard index={2}/>
        <FeatureCard index={3}/>      
      </div>
    </div>
  )
}

export default Features