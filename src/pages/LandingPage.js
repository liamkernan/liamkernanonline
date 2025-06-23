import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="site-title">Liam Kernan</h1>
      <nav className="landing-nav">
        <Link to="/code" className="nav-button">Code</Link>
        <Link to="/art" className="nav-button">Art</Link>
        <Link to="/production" className="nav-button">Production</Link>
        <Link to="/personal" className="nav-button">Personal</Link>
      </nav>
    </div>
  );
}

export default LandingPage;
