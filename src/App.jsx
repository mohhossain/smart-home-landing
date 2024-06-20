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

import { Routes, Route, useLocation  } from "react-router-dom";
import "./App.css";

function App() {

  const [isDark, setIsDark] = useState(false)

  const[isLight, setLights] = useState(false)

  const location = useLocation();

  useEffect(() => {
    if (!isDark) {
      setLights(false);
      return;
    }
    
    let intervalId;

    const toggleLight = () => {
      setLights(prev => !prev);
    };

    intervalId = setInterval(toggleLight, 400);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setLights(true); // ensure the light is on after 2 seconds
    }, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };

  }
  , [isDark])

  useEffect(() => {
    const sectionId = location.pathname.slice(1) || 'navbar';
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);



  return (
    <div className={isDark? 
    "app dark" : "app"
    }>
      <div className="smart">
        <h1> Smart </h1>
      </div>

      <div className="ready" >
        <h1 > Ready </h1>
      </div>
      
      <div className="transition-wrapper"></div>
      <div className="container">
        <div className='hang-lights' >
            <img height={600} src={isLight ?  glow : lights} alt="lights" />
        </div>

        <div id = "navbar">
        <Navbar isDark={isDark} />
        </div>
{/* 
        <MainSection setIsDark={ setIsDark } isDark={isDark}/>
        <About />
        <Media />
        <Banner />
        <Products isDark={isDark} />
        <Footer isDark={isDark} /> */}
        <div id="main-section">
            <MainSection setIsDark={setIsDark} isDark={isDark} />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Media />
          </div>
          <div id="contact">
            <Banner />
          </div>
          <div id="products">
            <Products isDark={isDark} />
          </div>
          <div id="footer">
            <Footer isDark={isDark} />
          </div>
      </div>
    </div>
  );
}
export default App;
