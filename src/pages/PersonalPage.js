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
            Beyond the professional summary, I'm someone who finds deep satisfaction in the intersection of creativity and technology. My journey into programming began during my sophomore year at Syracuse, where I discovered that coding could be just as expressive and problem-solving oriented as creating art.
          </p>
          <p>
            When I'm not painting or coding, you'll often find me exploring the philosophical implications of artificial intelligence, reading about cognitive science, or experimenting with new digital art techniques. I believe that the future of creative expression lies in understanding and collaborating with intelligent systems, rather than competing against them.
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
