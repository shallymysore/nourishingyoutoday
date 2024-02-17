import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import './App.css';
import { Route, Routes,HashRouter, useNavigate } from 'react-router-dom'
import Home from './Components/Pages/Home';
import Signup from './Components/Pages/Signup';
import Aboutme from './Components/Pages/Aboutme';

export default function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-up' element={<Signup/>} />
      </Routes>
      
      </div>
  );
}

/**/