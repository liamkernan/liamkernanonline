import "./PageStyles.css";
import "./ArtPage.css";
import React, { useState, useEffect, useRef } from 'react';

function ArtPage() {
  const ART_FILES = [
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

  const ART_PAIR_FILES = [
    '/art/part1.png',
     '/art/part2.png',
     '/art/part3.png',
     '/art/part4.png',
  ];

  const ART_IMAGES = ART_FILES.map((src, index) => {
    const nameString = src.split('/').pop().replace(/\.[^/.]+$/, '');
    const parts = nameString.split(',').map((s) => s.trim());
    
    // Add descriptions for each piece
    const descriptions = {
      0: "This is the first piece in my Sleep & Dreams series, that I started back in August, and completely overhauled in December when I had more clarity on what I wanted my series to represent.  While this piece was challenging to complete and took me longer then it probably should have, i'm glad I completed it, because it gave me so much clarity on what I want to make and how I want to go about pairs in the future. In terms of the theme, this one falls on the \"dream\" side. I tried to blend surrealist elements and application with a realistic and typically uneventful scene, to make a piece that you could stare at endlessly and still have questions. It's a fun challange to use no refrences and completely conjure your peice from your imgination. It can hurt the proportions, sure, but I really think it adds a unreplicatable and personal touch to the whole piece. Like the fact this place, or the form of any of these objects, does not exist anywhere in the real world. I should probably explain why the figures and giraffe are blacked out. Its meant to represent how when you try to think back and remember a dream, there are always aspects of your dreams that feel like they're incomplete or missing. That aspect - the part that just doesn't quite make sense - is seemingly a constant in everyones dreams. The figure laying on the ground is having a heat stroke from the oppresive and vsicreal sky above him. I wanted this peice to just feel off in a way that only a bizzare dream could. I think I could've added more detail to the building in the background, and the proportions of the cage could have been planned better, but overall im very happy with this piece, and the tone it sets for my sustained investigation.",
      1: "This piece the counterpart to my first sustained, forming the first \"pair\" in my series of pairs. With this project I wanted to take the color palette and general aesthetic of the first piece, but fully focus on a more realistic and delicate scenery to juxtapose the stranger and more unrelenting of the first. I'm really happy with how the lines of color form the ground at the bottom of the piece, and the shifts in color and warmth. The upper portion of the trees was initially a challenger, because I wasn't sure how bold I wanted to go on the color, but i'm very happy with how they came out and stand against the paler lower portion of the sky. Speaking on the sky, I intially had a much more saturated and vertically-blending sky, but I changed this to be radially-blending and have a more gradual and less agressive pallete (esapically towards the bottom). I think this goes a long way in making the piece feel less overwhelming, and highlights the centered tree's color.",
      2: "I think this is the piece that really made the goal of my sustained investigation click for me. Up until this piece, I was struggling to find a strong source of inspiration for my groupings of paintings, but the creation of this one really made everything click, and now i'm overwhelmed with ideas. With this one, I set out to make a peice that was bold and dramatic in its contrast between warm and dark. The way the women is obscured in darkness, drowning in blues and purples, while the warmth is pulling away from her, leaving behind a trail of yellows and oranges, is one of my favorite color contrasts ive ever done. The womens shadow leaves behind the subtle distinction of a former partner, connected to the women metaphorically, while she's turned away . The bed seems to stretch endlessly where someone once lied, signifgifying the hole and emptiness that loss can have. I could keep explaining all of the subtleties and my intentions behind the story of this piece, but I dont want to force a story if you see something different. Regardless, I'm very proud of everything ive done here, and it was nice to take a break and use acrylics. I want to do more pieces with a bold contrast like this for sure.",
      3: "Dramatic use of charcoal wash creates depth and movement.",
      4: "This series of 3 is a mini-series of sorts within my broader sustained investigation, sleep & dreams. I wanted to depict sleep at the beginning of life, sleep at the end of life, and then curate a collage of contrasting “dreams” within one piece to show the overlap and similarities of dreams (and nightmares) across your life. All three are meant to be viewed together as one, and are sort of the exception to my rule of pairs. However, I think they can still be appreciated independently. I'm really happy with how this came together. I'm particularly happy with the form of the pastel portraits, and the colored-pencil collage piece in the middle is one of my favorite dream sequences i've done. I'm going to make the warm tones in the end of life piece more distinct, and make the collage more dense, but I think this will serve as another interesting perspective on the relationship of dreams and sleep.",
      5: "This series of 3 is a mini-series of sorts within my broader sustained investigation, sleep & dreams. I wanted to depict sleep at the beginning of life, sleep at the end of life, and then curate a collage of contrasting “dreams” within one piece to show the overlap and similarities of dreams (and nightmares) across your life. All three are meant to be viewed together as one, and are sort of the exception to my rule of pairs. However, I think they can still be appreciated independently. I'm really happy with how this came together. I'm particularly happy with the form of the pastel portraits, and the colored-pencil collage piece in the middle is one of my favorite dream sequences i've done. I'm going to make the warm tones in the end of life piece more distinct, and make the collage more dense, but I think this will serve as another interesting perspective on the relationship of dreams and sleep.",
      6: "This series of 3 is a mini-series of sorts within my broader sustained investigation, sleep & dreams. I wanted to depict sleep at the beginning of life, sleep at the end of life, and then curate a collage of contrasting “dreams” within one piece to show the overlap and similarities of dreams (and nightmares) across your life. All three are meant to be viewed together as one, and are sort of the exception to my rule of pairs. However, I think they can still be appreciated independently. I'm really happy with how this came together. I'm particularly happy with the form of the pastel portraits, and the colored-pencil collage piece in the middle is one of my favorite dream sequences i've done. I'm going to make the warm tones in the end of life piece more distinct, and make the collage more dense, but I think this will serve as another interesting perspective on the relationship of dreams and sleep.",
      7: "I feel like this duo is easily my most morbid and dark yet. Stylistically, it felt like a total departure from my typically very colorful and saturated style, which is a change im very glad I made for two reasons. One, it gives my portfolio more variety, and two, it feel like a more comprehensive outlook on the relationship between sleep and dreams for a larger variety of people. I think it's important to fully recognize concepts and not only include the \"good\", and in this context that means recognizing nightmares and paralysis. I think I can still improve some aspects of the perspective, but overall I understand the strength of this piece is the reaction it elicits and im trying to capitalize on that.",
      8: "I feel like this duo is easily my most morbid and dark yet. Stylistically, it felt like a total departure from my typically very colorful and saturated style, which is a change im very glad I made for two reasons. One, it gives my portfolio more variety, and two, it feel like a more comprehensive outlook on the relationship between sleep and dreams for a larger variety of people. I think it's important to fully recognize concepts and not only include the \"good\", and in this context that means recognizing nightmares and paralysis. Im really happy with the composition and uncomfortable aire that floats in this one, but im defintely gonna take steps to improve the detail and quality of drawing.",
      9: "Textured canvas adds depth to this abstract exploration.",
      10: "Companion piece exploring similar themes with varied technique.",
    };
    
    return {
      id: index,
      src,
      title: `${parts[0]}`,
      materials: parts[1] || '',
      size: parts[2] || '',
      year: parts[3] || '',
      description: descriptions[index] || '',
    };
  });

  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragState, setDragState] = useState(null);

  const groupings = [
    [0, 1],
    [2, 3],
    [4, 5, 6],
    [7, 8],
    [9, 10],
  ];

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
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();

    const newImages = ART_IMAGES.map((img) => {
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
    setImages(newImages);
  }, []);

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
  };

  return (
    <div className="art-page">
      <h2>Art</h2>
      <button className="arrange-button" onClick={arrangePairs}>Intended Pairs</button>
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
      {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="overlay-image" />
            <div className="overlay-details">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.materials}</p>
              <p>{selectedImage.size}</p>
              <p>{selectedImage.year}</p>
              {selectedImage.description && <p>{selectedImage.description}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtPage;
