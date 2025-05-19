import React from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContextProvider from '../Context'


function App() {


  return (
    <>
    <ContextProvider>
     <BrowserRouter>
      <Routes>
        <Route/>
      </Routes>
      </BrowserRouter>
    </ContextProvider>
 
    </>
  )
}

export default App
