import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Admin from './pages/account/Admin';
import Market from './pages/marketplace/Market';
import Contact from './pages/contact/Contact';
import { RoleProvider } from './hooks/useRole';
import Role from './components/client/Roles';
import { AuthProvider } from './hooks/useAuth';
import { CartProvider } from './hooks/useCart';
import CheckoutPage from './pages/checkout/CheckoutPage';

function App() {


  return (
    <>
      <CartProvider>
      <Router>
          <div>
            <RoleProvider>
              <AuthProvider>
              <Routes>
                  <Route path='/' element={<Home />} />

                  <Route path='/login' element={<Login />} />

                  <Route path='/signup' element={<Signup />} />

                  <Route path='/about' element={<About />} />

                  <Route path='/admin-panel/*' element={<Admin />} />

                  <Route path='/contact' element={<Contact />} />

                  <Route path='/market' element={<Market />} />

                  <Route path='/choose-role' element={<Role />} />

                  <Route path='/checkout' element={<CheckoutPage />} />

                </Routes>
              </AuthProvider>
            </RoleProvider>
          </div>
      </Router>
      </CartProvider>
    </>
  )
}

export default App
