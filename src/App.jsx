import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import About from "./components/About";
import Media from "./components/Media";
import Banner from "./components/Banner";
import Products from "./components/Products";
import lights from './assets/lights.png'
import Footer from "./components/Footer";
import glow from './assets/glow.png'

import "./App.css";

function App() {

  const [isDark, setIsDark] = useState(false)

  const[isLight, setLights] = useState(false)

  useEffect(() => {
    // light flicker effect for 2 seconds, change the lights to glow after continiously for 2 seconds
    setTimeout(() => {
      setLights(isDark)
    }, 1000)
  }
  , [isDark])



  return (
    <div className={isDark? 
    "app dark" : "app"
    }>
      <div className="container">
        <div className='hang-lights' >
            <img height={600} src={isLight ?  glow : lights} alt="lights" />
        </div>
        <Navbar isDark={isDark} />
        <MainSection setIsDark={ setIsDark } isDark={isDark}/>
        <About />
        <Media />
        <Banner />
        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default App;
