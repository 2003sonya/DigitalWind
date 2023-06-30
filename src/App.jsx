import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css';
import Menu from './components/Menu';
import MainBanner from './components/MainBanner';
import AboutUs from './components/AboutUs';
import InformationStages from './components/InformationStages';
import Nominations from './components/Nominations';
import News from './components/News';
import Organizers from './components/Organizers';
import Partners from './components/Partners';
import TheEnd from './components/TheEnd';

function App() {

  return (
    <>
      <div className="menu">
          <Menu/>
      </div>

      <div className='mainbanner'>
          <MainBanner/>
      </div>

      <div className='aboutUs'>
          <AboutUs/>
      </div>

      <div className='informationStages'>
        <InformationStages/>
      </div>

      <div className='nominations'>
        <Nominations/>
      </div>

      <div className='news'>
        <News/>
      </div>

      <div className='organizers'>
        <Organizers/>
      </div>

      <div className='partners'>
        <Partners/>
      </div>

      <div className='theEnd'>
        <TheEnd/>
      </div>

    </>
  )
}

export default App
