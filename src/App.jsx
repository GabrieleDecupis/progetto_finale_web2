import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Clienti from './components/Clienti';
import Prodotti from './components/Prodotti';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clienti" element={<Clienti />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;