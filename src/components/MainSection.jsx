import React from 'react'
import mockup from '../assets/mockup.png'

function MainSection() {
  return (
    <div className='main-top'>
        <div className='slogan'> 
            <h1>Control your home with your fingertip</h1>
        </div>
        <div className='mockup'>
            <img width={400} height={500} src={mockup} alt='mockup' />
        </div>
    </div>

  )
}

export default MainSection