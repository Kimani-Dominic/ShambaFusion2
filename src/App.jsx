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
import DiseaseModelForm from './pages/disease/DiseaseModelForm';
import DiseaseDetailsPage from "./pages/disease/DiseaseDetailsPage";
import FarmInsightsComponent from './pages/farminsight/FarmInsightsComponent';



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

              {/* <Route path='/diseasemodelform' element={<DiseaseModelForm />} />

              <Route path='/diseasedetails' element={<DiseaseDetailsPage />} />
              
              <Route path='/farminsights' element={<FarmInsightsComponent />} /> */}

              <Route path='/admin-panel/*' element={<RoleProvider><Admin /></RoleProvider>} />
              
              <Route path='/contact' element={<Contact />} />

              <Route path='/market' element={<Market />} />

              <Route path='/choose-role' element={<Role />} />

            </Routes>
          </div>
      </Router>
    </>
  )
}

export default App
