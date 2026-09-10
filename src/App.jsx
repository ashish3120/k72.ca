import React from 'react'
// import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Agents from './pages/Agents.jsx'
import './index.css'
const App = () => {
  return (
    <div className='text-3xl font-bold '>
      {/* <Link to="/" className='text-blue-500 px-10'>Home</Link>
      <Link to="/projects" className='text-blue-500 px-10'>Projects</Link>
      <Link to="/agents" className='text-blue-500 px-10'>Agents</Link> */}
      <Routes className='text-blue-500'>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agents' element={<Agents />} />
      </Routes>
    </div>
  )
}

export default App