import "./PageStyles.css";
import "./ArtPage.css";
import React, { useState, useEffect, useRef } from 'react';

function ArtPage() {
  const ART_IMAGES = [
    '/art/art1.png',
    '/art/art2.png',
    '/art/art3.png',
    '/art/art4.png',
    '/art/art5.png',
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
