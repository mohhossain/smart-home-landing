import React from 'react'
import mockup from '../assets/mockup.png'
import { FaToggleOn } from "react-icons/fa";


function MainSection() {
  return (
    <div className='main-top'>
        <div className='main-background'>
            <h1 className='background'>Easy Smart</h1>
            
        </div>
        <div className='slogan'> 
            <h1>Control your home with your fingertip</h1>
            <FaToggleOn className='toggle' />
        </div>
        <div className='mockup'>
            <img width={400} height={500} src={mockup} alt='mockup' />
        </div>

        <div className='main-bottom'>
            <p>With tail in the air fight own tail or give attitude. White cat sleeps on a black shirt check cat door for ambush 10 times.</p>
            <p>Chew the plant catch eat throw up catch eat throw up bad birds. Touch water with paw then recoil in horror eat the fat cats food so touch my tail</p>
        </div>
    </div>

  )
}

export default MainSection