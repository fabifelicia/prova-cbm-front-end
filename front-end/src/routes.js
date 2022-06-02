import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Data from './pages/Data'
import Experience from './pages/Experience'
import Resume from './pages/Resume'
import Profile from './pages/Profile'
import Candidates from './pages/Candidates'


export default function Router() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />            
            <Route path="/data" exact element={<Data/>} />            
            <Route path="/experience" exact element={<Experience/>} />            
            <Route path="/resume" exact element={<Resume/>} />            
            <Route path="/profile" exact element={<Profile/>} />            
            <Route path="/list" exact element={<Candidates/>} />            
        </Routes>
      </BrowserRouter>
  )
}


