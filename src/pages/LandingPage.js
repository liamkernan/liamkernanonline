import React from 'react';
import { Link } from 'react-router-dom';
import SocialButtons from '../components/SocialButtons';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="site-title google-sanscode">Liam Kernan</h1>
      <nav className="landing-nav">
        <Link to="/code" className="nav-button">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
            <path d="m18 16 4-4-4-4"/>
            <path d="m6 8-4 4 4 4"/>
            <path d="m14.5 4-5 16"/>
          </svg>
        </Link>
        <Link to="/art" className="nav-button">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
            <circle cx="13.5" cy="6.5" r=".5" fill="#666"/>
            <circle cx="17.5" cy="10.5" r=".5" fill="#666"/>
            <circle cx="8.5" cy="7.5" r=".5" fill="#666"/>
            <circle cx="6.5" cy="12.5" r=".5" fill="#666"/>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
          </svg>
        </Link>
        <Link to="/documents" className="nav-button">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path d="M14 2v6h6"/>
            <path d="M16 13H8"/>
            <path d="M16 17H8"/>
            <path d="M10 9H8"/>
          </svg>
        </Link>
        <Link to="/personal" className="nav-button">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </Link>
      </nav>
      
      <SocialButtons />
    </div>
  );
}

export default LandingPage;
