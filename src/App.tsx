import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import LoginUser from './components/LoginUser';
import SignupUser from './components/SignupUser';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './components/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/' element={<LoginUser/>}/>
      <Route path='/sign-up' element={<SignupUser/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Routes>
  );
}

export default App;
