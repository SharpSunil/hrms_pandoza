import React from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContextProvider from '../Context'
import SendOtp from './pages/SendOtp/SendOtp'


function App() {


  return (
    <>
    <ContextProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/otp' element={<SendOtp />}/>
      </Routes>
      </BrowserRouter>
    </ContextProvider>
 
    </>
  )
}

export default App
