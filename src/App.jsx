import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
