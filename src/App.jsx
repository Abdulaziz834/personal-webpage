import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import About from './pages/About'

export default function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About Me</Link></li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  )
}
