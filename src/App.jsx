import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Dashboard from './pages/account/Dashboard';
import Market from './pages/marketplace/Market';
import Contact from './pages/contact/Contact';

function App() {


  return (
    <>
      <Router>
          <div>
            <Routes>

              <Route path='/' element={<Home />} />

              <Route path='/login' element={<Login />} />

              <Route path='/signup' element={<Signup />} />

              <Route path='/about' element={<About />} />

              <Route path='/account' element={<Dashboard />} />

              <Route path='/contact' element={<Contact />} />

              <Route path='/market' element={<Market />} />

              
            </Routes>
          </div>
      </Router>
    </>
  )
}

export default App
