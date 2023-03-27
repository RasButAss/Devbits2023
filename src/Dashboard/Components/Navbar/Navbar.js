import React from 'react'
// import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
          <div class="nav-header">
            <div class="nav-title">
              WELDRIGHT
            </div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links">
            <Link>Reports</Link>
            <a href="">News</a>
            <a href="">Support</a>
            <a href="">Signup</a> 
          </div>
      </div>
    </div>
  )
}

export default Navbar