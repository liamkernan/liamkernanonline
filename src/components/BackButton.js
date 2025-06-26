import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

function BackButton() {
  return (
    <Link to="/" className="back-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z"/>
      </svg>
      Back
    </Link>
  );
}

export default BackButton;