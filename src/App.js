import React from 'react'
import Home from './comp/home'
import About from './comp/about'
import Contact from './comp/contact'
import Error from './comp/error'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div className='app'>
        
        <h1>Hi there</h1>
        <Link to={'/'} className='link'>Home</Link>
        <Link to={'/about'}className='link'>About</Link>
        <Link to={'/contact'}className='link'>Contact</Link>
       


        <Routes>
          <Route path= '/' element={<Home/>}/>

          <Route path= '/about' element={<About/>}/>

          <Route path= '/contact' element={<Contact/>}/>

          <Route path= '*' element={<Error/>}/>
        </Routes>
      
      </div>
    </Router>

  ) 
}

export default App