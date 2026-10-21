import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialButtons from '../components/SocialButtons';
import MorphName from '../components/MorphName';
import { openFrom, recentReturn, prefersReducedMotion } from '../transitions';
import './LandingPage.css';

// How long a button gets to play its click animation before the page opens out of it.
const LAUNCH_MS = 420;

const SECTIONS = [
  {
    to: '/code',
    label: 'code',
    icon: (
      <>
        <path className="code-bracket-r" d="m18 16 4-4-4-4"/>
        <path className="code-bracket-l" d="m6 8-4 4 4 4"/>
        <path className="code-slash" d="m14.5 4-5 16"/>
      </>
    ),
  },
  {
    to: '/art',
    label: 'art',
    icon: (
      <>
        <circle className="art-dot" cx="13.5" cy="6.5" r=".5" fill="#666" style={{ '--dx': '0.8px', '--dy': '-2.9px' }}/>
        <circle className="art-dot" cx="17.5" cy="10.5" r=".5" fill="#666" style={{ '--dx': '2.9px', '--dy': '-0.8px' }}/>
        <circle className="art-dot" cx="8.5" cy="7.5" r=".5" fill="#666" style={{ '--dx': '-1.8px', '--dy': '-2.4px' }}/>
        <circle className="art-dot" cx="6.5" cy="12.5" r=".5" fill="#666" style={{ '--dx': '-3px', '--dy': '0.3px' }}/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </>
    ),
  },
  {
    to: '/documents',
    label: 'writing',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        <path className="doc-line" d="M8 9h2" pathLength="1" style={{ '--i': 0 }}/>
        <path className="doc-line" d="M8 13h8" pathLength="1" style={{ '--i': 1 }}/>
        <path className="doc-line" d="M8 17h8" pathLength="1" style={{ '--i': 2 }}/>
      </>
    ),
  },
  {
    to: '/personal',
    label: 'me',
    icon: (
      <>
        <path className="me-body" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle className="me-head" cx="12" cy="7" r="4"/>
      </>
    ),
  },
];

function LandingPage() {
  const navigate = useNavigate();
  const [launching, setLaunching] = useState(null);
  const [returnedFrom] = useState(recentReturn);

  useEffect(() => {
    if (!launching) return undefined;
    const timer = setTimeout(() => openFrom(navigate, launching.to, launching.origin), LAUNCH_MS);
    return () => clearTimeout(timer);
  }, [launching, navigate]);

  const open = (e, to) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (launching) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    if (prefersReducedMotion()) {
      openFrom(navigate, to, origin);
      return;
    }
    setLaunching({ to, origin });
  };

  const buttonClass = (to, label) => {
    let name = `nav-button nav-${label}`;
    if (launching?.to === to) name += ' is-launching';
    else if (!launching && returnedFrom === to) name += ' is-returning';
    return name;
  };

  return (
    <div className={`landing-container${launching ? ' is-leaving' : ''}`}>
      <MorphName className="site-title google-sanscode" />
      <nav className="landing-nav">
        {SECTIONS.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            aria-label={label}
            className={buttonClass(to, label)}
            onClick={(e) => open(e, to)}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
              {icon}
            </svg>
            <span className="nav-label" aria-hidden="true" style={{ '--chars': label.length }}>
              <span className="nav-label-text">{label}</span>
            </span>
          </Link>
        ))}
      </nav>

      <SocialButtons />
    </div>
  );
}

export default LandingPage;
