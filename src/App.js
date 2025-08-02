import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CodePage from './pages/CodePage';
import ArtPage from './pages/ArtPage';
import ProductionPage from './pages/ProductionPage';
import PersonalPage from './pages/PersonalPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/personal" element={<PersonalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
