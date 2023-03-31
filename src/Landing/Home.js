import React,{useEffect, useRef} from 'react'
import axios from 'axios'
import Navbar from './Componenets/Navbar/Navbar'
import Homepage from './Componenets/Homepage/Homepage'
import About from './Componenets/AboutUs/About'
import Features from './Componenets/Features/Features'

const Home = () => {
  const didFetch = useRef(true)
  useEffect(() => {
    function getData() {
      axios({
        method: "GET",
        url:"/profile",
      })
      .then((response) => {
        const res =response.data
        console.log(res);
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })}
      if(didFetch.current) {
        getData();
        didFetch.current = false;
      }
  },[])
  return (
    <div>
      <Navbar />
      <Homepage />
      <Features />
    </div>
  )
}

export default Home