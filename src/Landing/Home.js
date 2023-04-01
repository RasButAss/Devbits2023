import React,{useEffect, useRef} from 'react'
import axios from 'axios'
import Navbar from './Componenets/Navbar/Navbar'
import Homepage from './Componenets/Homepage/Homepage'
import About from './Componenets/AboutUs/About'
import Features from './Componenets/Features/Features'
import Footer from './Componenets/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Features />
      <About />
      <Footer />
    </div>
  )
}

export default Home