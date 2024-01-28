import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import About from './pages/About/about.jsx'
import Contact from './pages/Contact/contact.jsx'
import Projects from './pages/Projects/projects.jsx'
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
