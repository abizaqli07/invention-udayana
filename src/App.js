import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Population from './components/Population';
import PollutionPlastic from './components/PollutionPlastic';
import ClimateChange from './components/ClimateChange';
import TakeAction from './components/TakeAction';
import ScrollToTop from './components/subComponents/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/population" element={<Population />} />
        <Route path="/pollutionplastic" element={<PollutionPlastic />} />
        <Route path="/climatechange" element={<ClimateChange />} />
        <Route path="/takeaction" element={<TakeAction />} />
      </Routes>
    </Router>
  );
}

export default App;
