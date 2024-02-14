import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from '../component/Signup.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Use Route to render content when the path matches */}
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  </BrowserRouter>
)