import React from 'react'
import speaker from '../assets/speaker.jpg'
import speakerWhite from '../assets/speaker-white.jpg'
import appVideo from '../assets/app-video.mp4'


function Media() {
  return (
    <div className='media-section'>
        <div className='media-right'>
            <img 
            className='speaker'
            style={{
                borderRadius: "20px",
            }}  src={speakerWhite} alt='speaker' />
        </div>
        <div className='media-left'>
            <video
            className='video'
            style={{
                borderRadius: "20px",
            }} autoPlay loop controls> 
                <source src={appVideo} type='video/mp4' />
            </video>
        </div>

    </div>
  )
}

export default Media