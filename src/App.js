import React from 'react';

import './App.css';


import Login from './login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddRegist from './pages/regist-user-backup/addRegist';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<AddRegist/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
