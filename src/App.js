import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Detail from "./pages/Details";
import './App.css';
import Header from './components/Header'
import AppNavbar from './components/Navbar'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppNavbar/>
        <Routes>
            <Route exact path="/">
              <Route index element={<Home />} />
              <Route path="/detail" element={<Detail />} />
            </Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
