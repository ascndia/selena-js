import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Header from "./Component/Header"
import About from "./Component/About"
import Slide from './Component/SlideShow';
import { images } from './HandleImagess';


function App() {

  return (
    <>
      <Header />
      <Slide />
      <About />
    </>
  );
}

export default App;
