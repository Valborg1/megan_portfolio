// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MeganNavbar from './components/Navbar';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Awards from './pages/Awards';
import Experience from './pages/Experience';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <MeganNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
