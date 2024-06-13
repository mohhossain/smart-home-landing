import React from 'react'
import mockup from '../assets/mockup.png'
import { FaToggleOn } from "react-icons/fa";
import { MdToggleOff } from "react-icons/md";



function MainSection() {
  return (
    <div className='main-top'>
        <div className='main-background'>
            {/* <h1 className='background'>Easy <span style={{
                textAlign: "end", 
                color: "#0b6af8",
                opacity: "0.3",
                marginLeft: "10px",
            }}>Smart</span></h1> */}
            
        </div>
        <div className='slogan'> 
            <h1>Control your home with your fingertip</h1>
            <MdToggleOff className='toggle' />
        </div>
        <div className='mockup'>
            <img width={400}  src={mockup} alt='mockup'  />
        </div>

        <div className='main-bottom'>
            <p>With tail in the air fight own tail or give attitude. White cat sleeps on a black shirt check cat door for ambush 10 times.</p>
            <p>Chew the plant catch eat throw up catch eat throw up bad birds. Touch water with paw then recoil in horror eat the fat cats food so touch my tail</p>
        </div>
    </div>

  )
}

export default MainSection