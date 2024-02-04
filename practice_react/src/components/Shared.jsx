import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const Shared = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Shared