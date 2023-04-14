import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Detail from "./pages/Details";
import MyRewards from "./pages/MyRewards";
import RedeemCode from "./pages/redeem/RedeemCode";
import RedeemQR from "./pages/redeem/RedeemQR";
import RedeemComplete from "./pages/RedeemComplete";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/">
              <Route index element={<Rewards />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/myrewards" element={<MyRewards />} />
              <Route path="/myrewards/redeem/code" element={<RedeemCode />} />
              <Route path="/myrewards/redeem/qr" element={<RedeemQR />} />
              <Route path="/myrewards/complete" element={<RedeemComplete />} />
            </Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
