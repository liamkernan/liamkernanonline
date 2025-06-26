import "./PageStyles.css";
import React from 'react';
import BackButton from '../components/BackButton';
import SocialButtons from '../components/SocialButtons';

function PersonalPage() {
  return (
    <div className="page-container">
      <BackButton />
      <p className="bio-text">
        My name is Liam Kernan - I am a student at Syracuse University, a visual artist with a focus in painting, and a programmer with an interest in the safety and development of LLM models and Artificial Intelligence products.
      </p>
      <SocialButtons />
    </div>
  );
}

export default PersonalPage;
