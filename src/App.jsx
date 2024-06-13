import { useState } from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import About from './components/About'
import Media from './components/Media'

import './App.css'

function App() {

  return (
    <div className='app'>
  
      <Navbar />
      <MainSection />
      <About />
      <Media />

    </div>
  )
}

export default App
