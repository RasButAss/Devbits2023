import React from 'react'
import './featurecard.css'
import security from '../images/security.png'
import rename from '../images/rename.png'
import stayuptodate from '../images/stayuptodate.png'
import speedy from '../images/speedy.png'

const data = [
  {
    heading: "Speedy",
    description: "Fast and easy to use",
    src:rename
  },
  {
    heading: "Stay Updated",
    description: "Stay updated with the latest financial tea",
    src:stayuptodate
  },
  {
    heading: "Secure",
    description: "Fast and easy to use",
    src:security
  },
  {
    heading: "Descriptive",
    description: "Fast and easy to use",
    src: speedy
  },
]

const FeatureCard = ({index}) => {
  const thing = data[index];
  return (
    <div className='featurecard-main-div'>
      <div className='featurecard-image-div'>
        <img src={thing['src']} className='featurecard-image' />
      </div>
      <div className='featurecard-content'>
        <h1>{thing['heading']}</h1>
        <p>{thing['description']}</p>
      </div>
    </div>
  )
}

export default FeatureCard