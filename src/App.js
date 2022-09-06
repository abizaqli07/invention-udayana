import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Habitat from './components/Habitat';
import Population from './components/Population';
import PollutionPlastic from './components/PollutionPlastic';
import ClimateChange from './components/ClimateChange';
import TakeAction from './components/TakeAction';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/habitat" element={<Habitat />} />
        <Route path="/population" element={<Population />} />
        <Route path="/pollutionplastic" element={<PollutionPlastic />} />
        <Route path="/climatechange" element={<ClimateChange />} />
        <Route path="/takeaction" element={<TakeAction />} />
      </Routes>
    </Router>
  );
}

export default App;
