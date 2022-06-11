import React from 'react'
import GlobalStyle from './Global'
import Header from './Component/Header/Header'
import Reside from './Component/Reside/Reside'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Schedule from '../src/Component/Navigations/Schedule'
import Hero from './Component/Hero/Hero'
import Car from '../src/Component/Navigations/CarCollection'
import Foter from './Component/Hero/Foter'
import About from './Component/Navigations/About'


const App = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Header/> 
    <Routes>
      <Route path='/' element={<Reside/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
      <Route path='/hero' element={<Hero/>}/>
      <Route path='/car' element={<Car/>}/>
      <Route path='/about' element={<About/>}/>

    </Routes>
      <Foter/>
      </BrowserRouter>
    
    </>
  )
}

export  default App