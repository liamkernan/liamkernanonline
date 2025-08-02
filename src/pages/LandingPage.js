import React from 'react';
import { Link } from 'react-router-dom';
import SocialButtons from '../components/SocialButtons';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="site-title">Liam Kernan</h1>
      <nav className="landing-nav">
        <Link to="/code" className="nav-button">Code</Link>
        <Link to="/art" className="nav-button">Art</Link>
        <Link to="/personal" className="nav-button">Me</Link>
      </nav>
      
      <SocialButtons />
    </div>
  );
}

export default LandingPage;
