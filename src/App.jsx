import React from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContextProvider from '../../jungle boosh/seller_jb_frontend/src/Context'

function App() {


  return (
    <>
    <ContextProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </ContextProvider>
 
    </>
  )
}

export default App
