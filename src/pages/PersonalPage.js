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
        <h2 className="text-center google-sanscode text-8xl">me</h2>

        <p className="bio-text">
        My name is Liam Kernan. I am a Computer Science student at Syracuse University, with an interest in the safety and development of LLM models & Computer Vision. In my other academic interests, I'm a visual artist with a focus in painting and a creative writer.
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
              In my free time, I love to ski more then anything else; I've been on trips out to Utah, Montana, California, Vermont, and I ski my local PA mountains almost everyday during the season (still working on my backflip). Powder Mountain is the best resort in the country, no debate.
          </p>
          <p>
             I'm a huge audiophile; its something that my best friend got me into and I've been loving it since. For my home setup, I have a pair of passive Polk ES15s and a Airmotiv SE8 sub driven through a Sony STR-DH190 and a Schiit Modi 3. I taught myself how to play keyboard and guitar, working on the latter right now.
          </p>
          <p>
            In the summer, I lifeguard religiously; I love to swim and I remember looking up to the lifeguards at my public pool as a kid, so it feels great to maybe be that to a kid like me. I've worked at 4 pools and am the lifeguard manager at my current pool.
          </p>
        </div>
      )}
      
      <SocialButtons />
    </div>
  );
}

export default PersonalPage;
