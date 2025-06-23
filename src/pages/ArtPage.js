import "./PageStyles.css";
import "./ArtPage.css";
import React, { useState, useEffect, useRef } from 'react';

function ArtPage() {
  const ART_DATA = [
    {
      src: '/art/art1.png',
      title: 'Piece 1',
      materials: 'Mixed media',
      measurements: '20x20',
      description: 'Description of piece 1',
    },
    {
      src: '/art/art2.png',
      title: 'Piece 2',
      materials: 'Mixed media',
      measurements: '20x20',
      description: 'Description of piece 2',
    },
    {
      src: '/art/art3.png',
      title: 'Piece 3',
      materials: 'Mixed media',
      measurements: '20x20',
      description: 'Description of piece 3',
    },
    {
      src: '/art/art4.png',
      title: 'Piece 4',
      materials: 'Mixed media',
      measurements: '20x20',
      description: 'Description of piece 4',
    },
    {
      src: '/art/art5.png',
      title: 'Piece 5',
      materials: 'Mixed media',
      measurements: '20x20',
      description: 'Description of piece 5',
    },
  ];

  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragState, setDragState] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();

    const newImages = ART_DATA.map((info, index) => {
      const w = 250 + Math.random() * 150;
      return {
        id: index,
        info,
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
    const container = containerRef.current.getBoundingClientRect();
    setDragState({
      index,
      offsetX: e.clientX - container.left - img.style.left,
      offsetY: e.clientY - container.top - img.style.top,
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
      setSelectedImage(images[index].info);
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
            <img src={img.info.src} alt="artwork" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <div className="overlay-content">
            <img src={selectedImage.src} alt={selectedImage.title} className="overlay-image" />
            <div className="overlay-details">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.materials}</p>
              <p>{selectedImage.measurements}</p>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtPage;
