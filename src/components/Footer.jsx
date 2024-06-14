import React from 'react'
import footer from '../assets/footer.png'
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";

function Footer() {
  return (
    <div className='footer add-margin'>

        <div className='footer-left'>
            <h1>Make your living space better now with Zome</h1>
            <p>Get started now and make your living space more comfortable and convenient. Control your home and ecosystem from wherever you are. It's convinient and easy to use. Have a peace of mind with Zome.
            </p>
            <div className='footer-buttons'>
                <p>Get started</p>

                <div className="app-download">
                    <button> <IoLogoApple /> App Store</button>
                    <button><FaGooglePlay/> Google Play</button>
                </div>
            </div>
        </div>

        <div className='footer-right'>
            <img src={footer} alt='footer' />
        </div>


    </div>
  )
}

export default Footer