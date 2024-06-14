import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


function About() {
  return (
    <div className='about-section add-margin'>
        <div className='about-left'>
            <h3>Discover new horizons of comfort</h3>
        </div>
        <div className='about-right'>
             <h2>
                A smart home app that lets you control your home with your fingertip. 
                Such as lighting, climate, entertainment systems, and appliances.
             </h2>

             <div className='more-info' style={{
               display: "flex",
                flexDirection: "column",
                width: "300px",
                
             }}>
                <div className='arrow-p' style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer"
                }} >
                    <p> Get more information about app </p>
                    <FaArrowRight />
                </div>
                <hr style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#141414",
                    border: "none",
                    marginBottom: "20px",
                }} />
             </div>
        </div>
    </div>
  )
}

export default About