import React from 'react'
import './about.css'
import aboutus from './aboutus.png'

const About = () => {
  return (
    <div className='about-main-div'>
      <h1>About Us</h1>
      <div className='aboutus-content'>
        <p>WeldRight is a comprehensive stock buying and selling website that provides its users with the essential features required to make informed decisions in the stock market. Our platform includes a user-friendly interface, allowing users to easily navigate through the various features of the website. With WeldRight, users can manage their portfolios, view real-time stock quotes, and access a wealth of trading tools and research to help them make informed decisions.Our platform also provides users with news and analysis, enabling them to stay up-to-date with the latest market trends and insights. For out future update we plan to add consumer support. With this, users can access reliable customer support, ensuring that their concerns are addressed and resolved quickly. Our website is the perfect platform for investors, from beginners to experienced professionals, to take advantage of the stock market and maximize their returns.</p>
          <img src={aboutus} className='aboutus-img' />
      </div>
    </div>
  )
}

export default About