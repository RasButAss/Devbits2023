import React from 'react'
import Navbar from './Componenets/Navbar/Navbar'
import Homepage from './Componenets/Homepage/Homepage'
import About from './Componenets/AboutUs/About'
import Features from './Componenets/Features/Features'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Features />
    </div>
  )
}

export default Home