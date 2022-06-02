import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'


export default function Router() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            
        </Routes>
      </BrowserRouter>
  )
}


