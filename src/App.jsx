import React from 'react'
import {Routes, Route} from "react-router-dom"
import Game from '../pages/GamePage'
import Gamling from '../pages/Gamling'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Game/>}/>
      <Route path="/gambling" element={<Gamling/>}/>
    </Routes>
  )
}

export default App