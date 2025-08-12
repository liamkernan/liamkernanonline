import "./PageStyles.css";
import "./ArtPage.css";
import React, { useState, useEffect, useRef } from 'react';
import BackButton from '../components/BackButton';

function ArtPage() {
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
      `${process.env.PUBLIC_URL}/art/selected 2, oil on canvas, 16x20, 2024.png`
  ];

  const ART_PAIR_FILES = [
    `${process.env.PUBLIC_URL}/art/part1.png`,
     `${process.env.PUBLIC_URL}/art/part2.png`,
     `${process.env.PUBLIC_URL}/art/part3.png`,
     `${process.env.PUBLIC_URL}/art/part4.png`,
      `${process.env.PUBLIC_URL}/art/part5.png`,
      `${process.env.PUBLIC_URL}/art/selectedpair.png`
  ];

  const ART_IMAGES = ART_FILES.map((src, index) => {
    const nameString = src.split('/').pop().replace(/\.[^/.]+$/, '');
    const parts = nameString.split(',').map((s) => s.trim());

    const titles = {
      0: "remains of true beauty still exist in what humans have altered",
      1: "the true beauty in question",
      2: "the widow",
      3: "her everything",
      4: "beginning of life;",
      5: "vision board;",
      6: "conclusion of life;",
      7: "Imposter",
      8: "Home Invasion",
      9: "HUNGOVER",
      10: "FOLLOW THE CROSS",
      11: "Big Sky, Montana",
      12: "Morgan, Utah"
    };

    const descriptions = {
      0: "This is the first piece in my Sleep & Dreams series, that I started back in August, and completely overhauled in December when I had more clarity on what I wanted my series to represent.  While this piece was challenging to complete and took me longer then it probably should have, i'm glad I completed it, because it gave me so much clarity on what I want to make and how I want to go about pairs in the future. In terms of the theme, this one falls on the \"dream\" side. I tried to blend surrealist elements and application with a realistic and typically uneventful scene, to make a piece that you could stare at endlessly and still have questions. It's a fun challange to use no refrences and completely conjure your peice from your imgination. It can hurt the proportions, sure, but I really think it adds a unreplicatable and personal touch to the whole piece. Like the fact this place, or the form of any of these objects, does not exist anywhere in the real world. I should probably explain why the figures and giraffe are blacked out. Its meant to represent how when you try to think back and remember a dream, there are always aspects of your dreams that feel like they're incomplete or missing. That aspect - the part that just doesn't quite make sense - is seemingly a constant in everyones dreams. The figure laying on the ground is having a heat stroke from the oppresive and vsicreal sky above him. I wanted this peice to just feel off in a way that only a bizzare dream could. I think I could've added more detail to the building in the background, and the proportions of the cage could have been planned better, but overall im very happy with this piece, and the tone it sets for my sustained investigation.",
      1: "This piece the counterpart to my first sustained, forming the first \"pair\" in my series of pairs. With this project I wanted to take the color palette and general aesthetic of the first piece, but fully focus on a more realistic and delicate scenery to juxtapose the stranger and more unrelenting of the first. I'm really happy with how the lines of color form the ground at the bottom of the piece, and the shifts in color and warmth. The upper portion of the trees was initially a challenger, because I wasn't sure how bold I wanted to go on the color, but i'm very happy with how they came out and stand against the paler lower portion of the sky. Speaking on the sky, I intially had a much more saturated and vertically-blending sky, but I changed this to be radially-blending and have a more gradual and less agressive pallete (esapically towards the bottom). I think this goes a long way in making the piece feel less overwhelming, and highlights the centered tree's color.",
      2: "I think this is the piece that really made the goal of my sustained investigation click for me. Up until this piece, I was struggling to find a strong source of inspiration for my groupings of paintings, but the creation of this one really made everything click, and now i'm overwhelmed with ideas. With this one, I set out to make a peice that was bold and dramatic in its contrast between warm and dark. The way the women is obscured in darkness, drowning in blues and purples, while the warmth is pulling away from her, leaving behind a trail of yellows and oranges, is one of my favorite color contrasts ive ever done. The women's shadow leaves behind the subtle distinction of a former partner, connected to the women metaphorically, while she's turned away . The bed seems to stretch endlessly where someone once lied, signifgifying the hole and emptiness that loss can have. I could keep explaining all of the subtleties and my intentions behind the story of this piece, but I dont want to force a story if you see something different. Regardless, I'm very proud of everything ive done here, and it was nice to take a break and use acrylics. I want to do more pieces with a bold contrast like this for sure.",
      3: "Dramatic use of charcoal wash creates depth and movement.",
      4: "This first piece in my tryptic is a mini-series of sorts within my broader sustained investigation, sleep & dreams. I wanted to depict sleep at the beginning of life, sleep at the end of life, and then curate a collage of contrasting “dreams” within one piece to show the overlap and similarities of dreams (and nightmares) across your life. All three are meant to be viewed together as one, and are sort of the exception to my rule of pairs. However, I think they can still be appreciated independently. I'm really happy with how this came together. I'm particularly happy with the form of the pastel portraits, and the colored-pencil collage piece in the middle is one of my favorite dream sequences i've done. I'm going to make the warm tones in the end of life piece more distinct, and make the collage more dense, but I think this will serve as another interesting perspective on the relationship of dreams and sleep.",
      5: "This second piece in my tryptic is a mini-series of sorts within my broader sustained investigation, sleep & dreams. I wanted to depict sleep at the beginning of life, sleep at the end of life, and then curate a collage of contrasting “dreams” within one piece to show the overlap and similarities of dreams (and nightmares) across your life. All three are meant to be viewed together as one, and are sort of the exception to my rule of pairs. However, I think they can still be appreciated independently. I'm really happy with how this came together. I'm particularly happy with the form of the pastel portraits, and the colored-pencil collage piece in the middle is one of my favorite dream sequences i've done. I'm going to make the warm tones in the end of life piece more distinct, and make the collage more dense, but I think this will serve as another interesting perspective on the relationship of dreams and sleep.",
      6: "This third piece in my tryptic is a mini-series of sorts within my broader sustained investigation, sleep & dreams. I wanted to depict sleep at the beginning of life, sleep at the end of life, and then curate a collage of contrasting “dreams” within one piece to show the overlap and similarities of dreams (and nightmares) across your life. All three are meant to be viewed together as one, and are sort of the exception to my rule of pairs. However, I think they can still be appreciated independently. I'm really happy with how this came together. I'm particularly happy with the form of the pastel portraits, and the colored-pencil collage piece in the middle is one of my favorite dream sequences i've done. I'm going to make the warm tones in the end of life piece more distinct, and make the collage more dense, but I think this will serve as another interesting perspective on the relationship of dreams and sleep.",
      7: "I feel like this duo is easily my most morbid and dark yet. Stylistically, it felt like a total departure from my typically very colorful and saturated style, which is a change im very glad I made for two reasons. One, it gives my portfolio more variety, and two, it feel like a more comprehensive outlook on the relationship between sleep and dreams for a larger variety of people. I think it's important to fully recognize concepts and not only include the \"good\", and in this context that means recognizing nightmares and paralysis. I think I can still improve some aspects of the perspective, but overall I understand the strength of this piece is the reaction it elicits and im trying to capitalize on that.",
      8: "I feel like this duo is easily my most morbid and dark yet. Stylistically, it felt like a total departure from my typically very colorful and saturated style, which is a change im very glad I made for two reasons. One, it gives my portfolio more variety, and two, it feel like a more comprehensive outlook on the relationship between sleep and dreams for a larger variety of people. I think it's important to fully recognize concepts and not only include the \"good\", and in this context that means recognizing nightmares and paralysis. Im really happy with the composition and uncomfortable aire that floats in this one, but im definitely gonna take steps to improve the detail and quality of drawing.",
      9: "",
      10: "",
    };
    
    return {
      id: index,
      src,
      title: titles[index] || '',
      materials: parts[1] || '',
      size: parts[2] || '',
      year: parts[3] || '',
      description: descriptions[index] || '',
    };
  });

  // eslint-disable-next-line no-unused-vars
  const ART_PAIR_IMAGES = ART_PAIR_FILES.map((src, index) => ({
    id: `pair-${index}`,
    src,
    title: '',
    materials: '',
    size: '',
    year: '',
    description: '',
  }));

  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragState, setDragState] = useState(null);
  const [isPairView, setIsPairView] = useState(window.innerWidth <= 768);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  const groupings = [
    [0, 1],
    [2, 3],
    [4, 5, 6],
    [7, 8],
    [9, 10],
    [11, 12]
  ];

  const pairMappings = {
    0: `${process.env.PUBLIC_URL}/art/part2.png`,
    1: `${process.env.PUBLIC_URL}/art/part2.png`,
    2: `${process.env.PUBLIC_URL}/art/part1.png`,
    3: `${process.env.PUBLIC_URL}/art/part1.png`,
    4: `${process.env.PUBLIC_URL}/art/part3.png`,
    5: `${process.env.PUBLIC_URL}/art/part3.png`,
    6: `${process.env.PUBLIC_URL}/art/part3.png`,
    7: `${process.env.PUBLIC_URL}/art/part4.png`,
    8: `${process.env.PUBLIC_URL}/art/part4.png`,
    9: `${process.env.PUBLIC_URL}/art/part5.png`,
    10: `${process.env.PUBLIC_URL}/art/part5.png`,
    11: `${process.env.PUBLIC_URL}/art/selectedpair.png`,
    12: `${process.env.PUBLIC_URL}/art/selectedpair.png`
  };

  const scrambleFromSource = (source) => {
    const container = containerRef.current;
    if (!container) return [];
    const { width, height } = container.getBoundingClientRect();

    return source.map((img) => {
      const w = 250 + Math.random() * 150;
      return {
        ...img,
        style: {
          left: Math.random() * (width - w),
          top: Math.random() * (height - w),
          zIndex: Math.floor(Math.random() * 10),
          width: w,
        },
      };
    });
  };

  // eslint-disable-next-line no-unused-vars
  const arrangePairs = () => {
    const container = containerRef.current.getBoundingClientRect();
    const margin = 10;
    const imgWidth = 200; // fixed width so all pairs fit on screen
    const rowHeight = 220;

    setImages((imgs) => {
      const arr = [...imgs];

      groupings.forEach((group, i) => {
        const groupWidth =
          imgWidth * group.length + margin * (group.length - 1);

        let x = margin;
        let y = margin;
        switch (i) {
          case 0: // top left
            x = margin;
            y = margin;
            break;
          case 1: // top right
            x = container.width - groupWidth - margin;
            y = margin;
            break;
          case 2: // middle
            x = (container.width - groupWidth) / 2;
            y = container.height / 2 - rowHeight / 2;
            break;
          case 3: // bottom right
            x = container.width - groupWidth - margin;
            y = container.height - rowHeight - margin;
            break;
          case 4: // bottom left
            x = margin;
            y = container.height - rowHeight - margin;
            break;
          default:
            break;
        }

        group.forEach((idx) => {
          arr[idx] = {
            ...arr[idx],
            style: {
              ...arr[idx].style,
              left: x,
              top: y,
              width: imgWidth,
            },
          };
          x += imgWidth + margin;
        });
      });

      return arr;
    });
  };

  useEffect(() => {
    setImages(scrambleFromSource(ART_IMAGES));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsPairView(isMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const toggleView = () => {
    setIsPairView(!isPairView);
    setSelectedImage(null);
  };

  const showPairImage = (pieceIndex) => {
    const pairImageSrc = pairMappings[pieceIndex];
    if (pairImageSrc) {
      setSelectedImage({
        src: pairImageSrc,
        title: '',
        materials: '',
        size: '',
        year: '',
        description: ''
      });
    }
  };

  const handleMouseDown = (index) => (e) => {
    e.preventDefault();
    const img = images[index];
    const container = containerRef.current.getBoundingClientRect();

    // Bring the clicked image to the top layer
    setImages((imgs) => {
      const maxZ = Math.max(...imgs.map((im) => im.style.zIndex || 0));
      const arr = [...imgs];
      arr[index] = {
        ...arr[index],
        style: { ...arr[index].style, zIndex: maxZ + 1 },
      };
      return arr;
    });
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
      setSelectedImage(images[index]);
    }
  };

  const closeImage = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setPanX(0);
    setPanY(0);
    setIsPanning(false);
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => {
      const newZoom = Math.max(prev - 0.25, 0.25);
      if (newZoom <= 1) {
        setPanX(0);
        setPanY(0);
      }
      return newZoom;
    });
  };

  const handleImageMouseDown = (e) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      setIsPanning(true);
      setPanStart({
        x: e.clientX - panX,
        y: e.clientY - panY
      });
    }
  };

  const handleImageMouseMove = (e) => {
    if (isPanning && zoomLevel > 1) {
      e.preventDefault();
      setPanX(e.clientX - panStart.x);
      setPanY(e.clientY - panStart.y);
    }
  };

  const handleImageMouseUp = () => {
    setIsPanning(false);
  };

  // Touch events for mobile
  const handleImageTouchStart = (e) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      const touch = e.touches[0];
      setIsPanning(true);
      setPanStart({
        x: touch.clientX - panX,
        y: touch.clientY - panY
      });
    }
  };

  const handleImageTouchMove = (e) => {
    if (isPanning && zoomLevel > 1) {
      e.preventDefault();
      const touch = e.touches[0];
      setPanX(touch.clientX - panStart.x);
      setPanY(touch.clientY - panStart.y);
    }
  };

  const handleImageTouchEnd = () => {
    setIsPanning(false);
  };

  return (
    <div className="art-page">
      <BackButton />
      <h2 className="text-center text-8xl">art</h2>
        {!selectedImage && (
          <button className="arrange-button" onClick={toggleView}>
            {isPairView ? 'Intended View' : 'Organized View'}
          </button>
        )}

      {isPairView ? (
        <div className="organized-view">
          {ART_IMAGES.map((artwork, index) => (
            <div key={artwork.id} className="artwork-row">
              <div className="artwork-image-container">
                <img 
                  src={artwork.src} 
                  alt={artwork.title}
                  className="artwork-image"
                  onClick={() => setSelectedImage(artwork)}
                />
              </div>
              <div className="artwork-details">
                <div className="artwork-content">
                  <h3 className="artwork-title">{artwork.title}</h3>
                  <p className="artwork-info">{artwork.materials}</p>
                  <p className="artwork-info">{artwork.size}</p>
                  <p className="artwork-info">{artwork.year}</p>
                  {artwork.description && (
                    <p className="artwork-description">{artwork.description}</p>
                  )}
                </div>
                <button 
                  className="show-pair-button"
                  onClick={() => showPairImage(index)}
                >
                  Show Pair
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
              <img src={img.src} alt={img.title} />
            </div>
          ))}
        </div>
      )}
      {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <div className="overlay-content fullscreen-only">
            <button className="close-button" onClick={closeImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div 
              className="image-container"
              onMouseMove={handleImageMouseMove}
              onMouseUp={handleImageMouseUp}
              onMouseLeave={handleImageMouseUp}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="overlay-image" 
                style={{ 
                  transform: `scale(${zoomLevel}) translate(${panX / zoomLevel}px, ${panY / zoomLevel}px)`,
                  cursor: zoomLevel > 1 ? (isPanning ? 'grabbing' : 'grab') : 'default'
                }}
                onMouseDown={handleImageMouseDown}
                onTouchStart={handleImageTouchStart}
                onTouchMove={handleImageTouchMove}
                onTouchEnd={handleImageTouchEnd}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </div>
            <div className="zoom-controls" onClick={(e) => e.stopPropagation()}>
              <button className="zoom-button" onClick={zoomOut}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 13H5v-2h14v2z"/>
                </svg>
              </button>
              <button className="zoom-button" onClick={zoomIn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtPage;
