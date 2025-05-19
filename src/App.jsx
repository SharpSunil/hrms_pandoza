import React from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContextProvider from '../Context'
import SendOtp from './pages/SendOtp/SendOtp'
import Login from './pages/Login/Login'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'


function App() {


  return (
    <>
    <ContextProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/otp' element={<SendOtp />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/change-password' element={<ForgotPassword />}/>
      </Routes>
      </BrowserRouter>
    </ContextProvider>
 
    </>
  )
}

export default App
