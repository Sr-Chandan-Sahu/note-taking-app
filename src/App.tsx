import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import LoginUser from './components/LoginUser';
import SignupUser from './components/SignupUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginUser/>}/>
      <Route path='/sign-up' element={<SignupUser/>}/>
    </Routes>
  );
}

export default App;
