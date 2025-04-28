import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import { getApps } from './utils/Helper';
function App() {
const CurrentApp=getApps();
  return (
    <>
    <NavBar/>
    <CurrentApp/>
    <Footer/>
    </>
  )
}

export default App
