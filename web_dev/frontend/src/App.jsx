import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header'
import Center from './Center'
import Result from './Result'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Center /></>} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
