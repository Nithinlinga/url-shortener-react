import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import AboutPage from './components/About';
import DashboardLayout from './components/Dashboard/Dashboard';
import ShortenUrlPage from './components/ShortenUrlPage';
import PrivateRoute from './PrivateRouter';
import ErrorPage from './components/ErrorPage';
const AppRouter = () => {
  return (
    <>
      <Toaster position='top-center' />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute publicPage={true}><Login /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>} />
        <Route path="/s/:url" element={<ShortenUrlPage />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default AppRouter

export const subDomainRouter = () => {
  return (
    <Routes>
    </Routes>
  )
}