import React, { useCallback, useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../transitions';
import './MorphName.css';

const NAME = 'Liam Kernan';

// Each pass of the cursor rewrites the name in the next of these.
const STYLES = [
  { key: 'serif' },
  { key: 'greek', text: 'Λιαμ Κερναν' },
  { key: 'pixel' },
  { key: 'cyrillic', text: 'Лиам Кернан' },
  { key: 'outline' },
];

// Glyphs a letter flickers through on its way between styles.
const NOISE = '{}[]<>/\\;:=+*#&_|~^!?01';
const FRAME_MS = 45;
const FRAMES = 3;

const FONT_WARMUPS = [
  ['italic 400 1em "Instrument Serif"', NAME],
  ['400 1em Silkscreen', NAME],
  ['italic 500 1em "EB Garamond"', STYLES[1].text + STYLES[3].text],
];

// Character indices of each word, so the name only ever wraps between words.
const WORDS = [];
NAME.split(' ').reduce((start, word) => {
  WORDS.push([...word].map((_, k) => start + k));
  return start + word.length + 1;
}, 0);

// Decode the name in once per page load, not every time someone comes back to the landing page.
let introPlayed = false;

const base = (i) => ({ glyph: NAME[i], style: null });
const noise = () => ({ glyph: NOISE[Math.floor(Math.random() * NOISE.length)], style: 'noise' });
const inName = (i) => i >= 0 && i < NAME.length && NAME[i] !== ' ';

function MorphName({ className = '' }) {
  const [chars, setChars] = useState(() => NAME.split('').map((_, i) => base(i)));
  const morphTimers = useRef(NAME.split('').map(() => []));
  const releaseTimers = useRef([]);
  // Style key each letter is showing or heading to; undefined means it's itself.
  const targets = useRef([]);
  const hovered = useRef(null);
  const styleIndex = useRef(0);

  const show = useCallback((i, value) => {
    setChars((prev) => {
      const next = prev.slice();
      next[i] = value;
      return next;
    });
  }, []);

  // Flicker letter i through some noise glyphs, then land on `final`.
  const play = useCallback(
    (i, final, delay = 0, frames = FRAMES) => {
      morphTimers.current[i].forEach(clearTimeout);
      const count = prefersReducedMotion() ? 0 : frames;
      const timers = [];
      for (let f = 0; f < count; f++) {
        timers.push(setTimeout(() => show(i, noise()), delay + f * FRAME_MS));
      }
      timers.push(setTimeout(() => show(i, { ...final, settle: true }), delay + count * FRAME_MS));
      morphTimers.current[i] = timers;
    },
    [show]
  );

  const morph = useCallback(
    (i, style, delay = 0) => {
      if (!inName(i)) return;
      clearTimeout(releaseTimers.current[i]);
      if (targets.current[i] === style.key) return;
      targets.current[i] = style.key;
      play(i, { glyph: style.text ? style.text[i] : NAME[i], style: style.key }, delay);
    },
    [play]
  );

  const release = useCallback(
    (i, delay) => {
      if (!inName(i)) return;
      clearTimeout(releaseTimers.current[i]);
      releaseTimers.current[i] = setTimeout(() => {
        if (hovered.current === i || !targets.current[i]) return;
        targets.current[i] = undefined;
        play(i, base(i));
      }, delay);
    },
    [play]
  );

  useEffect(() => {
    const morphs = morphTimers.current;
    const releases = releaseTimers.current;
    return () => {
      morphs.forEach((timers) => timers.forEach(clearTimeout));
      releases.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    FONT_WARMUPS.forEach(([font, text]) => document.fonts?.load(font, text).catch(() => {}));
    if (introPlayed || prefersReducedMotion()) return undefined;

    setChars(NAME.split('').map((c, i) => (c === ' ' ? base(i) : noise())));
    NAME.split('').forEach((c, i) => {
      if (c !== ' ') play(i, base(i), 0, 5 + i);
    });
    const done = setTimeout(() => {
      introPlayed = true;
    }, (5 + NAME.length) * FRAME_MS);

    const morphs = morphTimers.current;
    return () => {
      clearTimeout(done);
      morphs.forEach((timers) => timers.forEach(clearTimeout));
    };
  }, [play]);

  const enterChar = (e, i) => {
    if (e.pointerType === 'touch') return;
    const style = STYLES[styleIndex.current];
    hovered.current = i;
    morph(i, style);
    [i - 1, i + 1].forEach((j) => {
      morph(j, style, 40);
      release(j, 900);
    });
  };

  const leaveChar = (i) => {
    if (hovered.current === i) hovered.current = null;
    release(i, 700);
  };

  const leaveName = () => {
    hovered.current = null;
    styleIndex.current = (styleIndex.current + 1) % STYLES.length;
  };

  // A click or tap sends a wave through the whole name.
  const wave = () => {
    styleIndex.current = (styleIndex.current + 1) % STYLES.length;
    const style = STYLES[styleIndex.current];
    NAME.split('').forEach((_, i) => {
      morph(i, style, i * 35);
      release(i, 1400 + i * 35);
    });
  };

  return (
    <h1
      className={`morph-name ${className}`}
      aria-label={NAME}
      onPointerLeave={leaveName}
      onClick={wave}
    >
      {WORDS.map((indices, w) => (
        <React.Fragment key={w}>
          {w > 0 && ' '}
          <span className="mn-word">
            {indices.map((i) => {
              const c = chars[i];
              return (
                <span
                  key={i}
                  className="mn-char"
                  aria-hidden="true"
                  onPointerEnter={(e) => enterChar(e, i)}
                  onPointerLeave={() => leaveChar(i)}
                >
                  <span className="mn-ghost">{NAME[i]}</span>
                  <span
                    key={`${c.style}${c.glyph}`}
                    className={`mn-glyph${c.style ? ` mn-${c.style}` : ''}${c.settle ? ' mn-settle' : ''}`}
                  >
                    {c.glyph}
                  </span>
                </span>
              );
            })}
          </span>
        </React.Fragment>
      ))}
    </h1>
  );
}

export default MorphName;
