import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'

export default function App() {
  return (
    <>
    <Home/>
    <BrowserRouter>
    <Routes>
    {/* <Route path = '/' element = {<Home/>}></Route> */}
    <Route path = '/' element = {<About/>}></Route>
    <Route path = '/contact' element = {<Contact/>}></Route>
    <Route path = '/projects' element = {<Projects/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
