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
              <a href='/'>
                WELDRIGHT 
              </a>
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
            {/* <Link>Reports</Link> */}
            <Link to={'/news'}>News</Link>
            <a href="">Support</a>
            <Link to={'/signup'}>Signup</Link> 
          </div>
      </div>
    </div>
  )
}

export default Navbar