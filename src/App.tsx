import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './assets/paginas/home/Home';
import './App.css';
import Login from './assets/paginas/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/> 
        
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;