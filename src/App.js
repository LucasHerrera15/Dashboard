import React, { setState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navBar';
import Home from './components/home'
import Products from './components/products';
import Users from './components/users';

function App() {
  return (
    <div className='App'> 
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product' element={<Products/>}/> 
              <Route path='/users' element={<Users/>}/> 
            </Routes>  
    </div> 
  );
}

export default App;
