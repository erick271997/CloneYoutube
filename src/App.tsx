import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Search from './componets/Search';
import Watch from './pages/Watch';

function App() {
  return (
    <BrowserRouter>
  <Routes>
      <Route path='/search' element={<Search/>}/>
      <Route path='/Watch/:id' element={<Watch/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes> 
    </BrowserRouter>

  );
}


export default App;
