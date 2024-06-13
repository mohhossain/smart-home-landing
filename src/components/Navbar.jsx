import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import lights from '../assets/lights.png'
import glow from '../assets/glow.png'



function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <NavLink to="/" exact>home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/services">prices</NavLink>
            <NavLink to="/contact">contact</NavLink>
        </nav>

        <div className='hang-lights' >
            <img height={400} src={lights} alt="lights" />
        </div>

        <div className="logo">
            <h3>Logo</h3>
        </div>

        <div className="app-download">
            <button> <IoLogoApple /> App Store</button>
            <button><FaGooglePlay/> Google Play</button>
        </div>


    </div>
  )
}

export default Navbar