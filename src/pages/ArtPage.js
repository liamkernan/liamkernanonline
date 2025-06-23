import "./PageStyles.css";
import "./ArtPage.css";
import React, { useState, useEffect, useRef } from 'react';

function ArtPage() {
  const ART_IMAGES = [
    '/art/1, oil on canvas, 16x20, 2024.jpg',
    '/art/2, oil on canvas, 24x18, 2025.png',
    '/art/3, acrylic on canvas, 16x20, 2024.jpg',
    '/art/4, charcoal wash on paper, 16x24, 2025.jpg',
    '/art/5, pastel on paper, 20x15, 2025.jpg',
    '/art/6, colored pencil on paper, 20x25, 2025.jpg',
    '/art/7, pastel on paper, 20x15, 2025.jpg',
    '/art/8, charcoal on paper, 23x25, 2025.jpg',
    '/art/9, white charcoal on black, 19x26, 2025.jpg',
    '/art/10, acrylic on box canvas, 20x16, 2025.png',
    '/art/11, acrylic on box canvas, 20x16, 2025.png',
  ];

  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragState, setDragState] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();

    const newImages = ART_IMAGES.map((src, index) => {
      const w = 150 + Math.random() * 100;
      return {
        id: index,
        src,
        style: {
          left: Math.random() * (width - w),
          top: Math.random() * (height - w),
          zIndex: Math.floor(Math.random() * 10),
          width: w,
        },
      };
    });
    setImages(newImages);
  }, []);

  const handleMouseDown = (index) => (e) => {
    e.preventDefault();
    const img = images[index];
    setDragState({
      index,
      offsetX: e.clientX - img.style.left,
      offsetY: e.clientY - img.style.top,
      moved: false,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragState) return;
    const { index, offsetX, offsetY } = dragState;
    const container = containerRef.current.getBoundingClientRect();
    const left = e.clientX - container.left - offsetX;
    const top = e.clientY - container.top - offsetY;
    setImages((imgs) => {
      const arr = [...imgs];
      arr[index] = { ...arr[index], style: { ...arr[index].style, left, top } };
      return arr;
    });
    setDragState({ ...dragState, moved: true });
  };

  const handleMouseUp = () => {
    if (!dragState) return;
    const { index, moved } = dragState;
    setDragState(null);
    if (!moved) {
      setSelectedImage(images[index].src);
    }
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="art-page">
      <h2>Art</h2>
      <div
        className="art-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {images.map((img, idx) => (
          <div
            key={img.id}
            className="art-image-box"
            style={{
              left: img.style.left,
              top: img.style.top,
              zIndex: img.style.zIndex,
              width: img.style.width,
              position: 'absolute',
            }}
            onMouseDown={handleMouseDown(idx)}
          >
            <img src={img.src} alt="artwork" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <img src={selectedImage} alt="full screen artwork" className="overlay-image" />
        </div>
      )}
    </div>
  );
}

export default ArtPage;
