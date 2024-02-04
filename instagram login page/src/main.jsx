import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from '../component/Signup.jsx'

<Routes>
  {/* Use Route to render content when the path matches */}
  <Route path="/signup" element={<Signup />} />

</Routes>


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
