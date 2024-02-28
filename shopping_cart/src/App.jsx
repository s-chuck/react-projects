import React from 'react';
import Product from '../components/Product'
import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  

  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default App;