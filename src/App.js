// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import{ HomePage }from './components/HomePage'; 
import SportsPool from './components/SportsPool'; 
import SignIn from './components/SignIn'; 
import MetaMall from './components/MetaMall/MetaMall'; 
import PlayToken from './components/PlayToken'; 
import Esports from './components/esports/Esports'; // Updated import for Esports

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/sportspool" element={<SportsPool />} />
      <Route path="/metamall" element={<MetaMall />} />
      <Route path="/playtoken" element={<PlayToken />} />
      <Route path="/esports" element={<Esports />} /> {/* Updated Esports route */}
    </Routes>
  </Router>
);

export default App;
