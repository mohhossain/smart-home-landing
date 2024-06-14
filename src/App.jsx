import { useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import About from "./components/About";
import Media from "./components/Media";
import Banner from "./components/Banner";
import Products from "./components/Products";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <MainSection />
        <About />
        <Media />
        <Banner />
        <Products />
      </div>
    </div>
  );
}

export default App;
