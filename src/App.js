import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CodePage from './pages/CodePage';
import ArtPage from './pages/ArtPage';
import ProductionPage from './pages/ProductionPage';
import PersonalPage from './pages/PersonalPage';
import './App.css';

function App() {
  useEffect(() => {
    // Preload all art images for faster loading when user visits art page
    const ART_FILES = [
      `${process.env.PUBLIC_URL}/art/1, oil on canvas, 16x20, 2024.jpg`,
      `${process.env.PUBLIC_URL}/art/2, oil on canvas, 24x18, 2025.png`,
      `${process.env.PUBLIC_URL}/art/3, acrylic on canvas, 16x20, 2024.jpg`,
      `${process.env.PUBLIC_URL}/art/4, charcoal wash on paper, 16x24, 2025.jpg`,
      `${process.env.PUBLIC_URL}/art/5, pastel on paper, 20x15, 2025.jpg`,
      `${process.env.PUBLIC_URL}/art/6, colored pencil on paper, 20x25, 2025.jpg`,
      `${process.env.PUBLIC_URL}/art/7, pastel on paper, 20x15, 2025.jpg`,
      `${process.env.PUBLIC_URL}/art/8, charcoal on paper, 23x25, 2025.jpg`,
      `${process.env.PUBLIC_URL}/art/9, white charcoal on black, 19x26, 2025.jpg`,
      `${process.env.PUBLIC_URL}/art/10, acrylic on box canvas, 20x16, 2025.png`,
      `${process.env.PUBLIC_URL}/art/11, acrylic on box canvas, 20x16, 2025.png`,
      `${process.env.PUBLIC_URL}/art/selected 1, charcoal wash on paper, 22x30, 2024.png`,
      `${process.env.PUBLIC_URL}/art/selected 2, oil on canvas, 16x20, 2024.png`,
      `${process.env.PUBLIC_URL}/art/part1.png`,
      `${process.env.PUBLIC_URL}/art/part2.png`,
      `${process.env.PUBLIC_URL}/art/part3.png`,
      `${process.env.PUBLIC_URL}/art/part4.png`,
      `${process.env.PUBLIC_URL}/art/part5.png`,
      `${process.env.PUBLIC_URL}/art/selectedpair.png`
    ];

    // Use requestIdleCallback to preload during browser idle time
    const preloadImages = () => {
      ART_FILES.forEach((src, index) => {
        // Stagger the preloading to avoid overwhelming the browser
        setTimeout(() => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          document.head.appendChild(link);

          // Also create Image objects for more aggressive caching
          const img = new Image();
          img.src = src;
        }, index * 50); // 50ms delay between each image
      });
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if (window.requestIdleCallback) {
      window.requestIdleCallback(preloadImages);
    } else {
      setTimeout(preloadImages, 100);
    }
  }, []);

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
