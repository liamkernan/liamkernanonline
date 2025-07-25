import "./PageStyles.css";
import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import SocialButtons from '../components/SocialButtons';

function PersonalPage() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="page-container">
      <BackButton />
      <p className="bio-text">
        My name is Liam Kernan - I am a student at Syracuse University, a visual artist with a focus in painting, and a programmer with an interest in the safety and development of LLM models and Artificial Intelligence products.
      </p>
      
      {!showDetails && (
        <div className="toggle-container">
          <button className="toggle-button" onClick={toggleDetails}>
            Actually About Me
          </button>
        </div>
      )}

      {showDetails && (
        <div className="detailed-bio">
          <p>
              In my free time, I love to ski more then anything else; I've been on trips out to Utah, Montana, California, Vermont, and I ski my local PA mountains almost everyday during the season (still working on my backflip). Powder Mountain is the best resort in the country, no contest!
          </p>
          <p>
             Im also a huge audiophile; its something that ive been
          </p>
          <p>
            My art practice has taught me patience, attention to detail, and the importance of iteration - skills that translate directly to software development. Whether I'm debugging a complex algorithm or working through a challenging composition, I approach problems with the same methodical curiosity and creative problem-solving mindset.
          </p>
        </div>
      )}
      
      <SocialButtons />
    </div>
  );
}

export default PersonalPage;
