import "./PageStyles.css";
import "./ArtPage.css";
import React, { useState } from 'react';

function ArtPage() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => {
      const src = URL.createObjectURL(file);
      const width = 150 + Math.random() * 100;
      return {
        id: src,
        src,
        style: {
          left: Math.random() * 80 + "%",
          top: Math.random() * 80 + "%",
          transform: `rotate(${Math.random() * 60 - 30}deg)`,
          zIndex: Math.floor(Math.random() * 10),
          width: width + "px",
        },
      };
    });
    setImages((prev) => [...prev, ...newImages]);
  };

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="art-page">
      <h2>Art</h2>
      <input type="file" accept="image/*" multiple onChange={handleUpload} />
      <div className="art-container">
        {images.map((img) => (
          <div
            key={img.id}
            className="art-image-box"
            style={img.style}
            onClick={() => openImage(img.src)}
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
