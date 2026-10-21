import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EASE = 'cubic-bezier(0.65, 0, 0.35, 1)';
const OPEN_MS = 650;
const CLOSE_MS = 550;

// The last section opened from the landing page, and the point on screen it grew out of.
let opened = null;
let returned = null;
let settleRoute = null;
let navigated = false;

export const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const circle = (r, { x, y }) => `circle(${r}px at ${x}px ${y}px)`;

const coverRadius = ({ x, y }) =>
  Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

function transition(kind, navigate, to, animate) {
  const root = document.documentElement;
  root.dataset.transition = kind;
  const t = document.startViewTransition(
    () =>
      new Promise((resolve) => {
        // React Router renders the new route in a React transition, so wait for it to commit.
        settleRoute = resolve;
        navigate(to);
        setTimeout(resolve, 500);
      })
  );
  if (animate) t.ready.then(animate).catch(() => {});
  const cleanup = () => delete root.dataset.transition;
  t.finished.then(cleanup, cleanup);
}

// Grow the next page out of the button that was clicked.
export function openFrom(navigate, to, origin) {
  opened = { to, origin };
  returned = null;
  if (!document.startViewTransition || prefersReducedMotion()) {
    navigate(to);
    return;
  }
  transition('open', navigate, to, () =>
    document.documentElement.animate(
      { clipPath: [circle(0, origin), circle(coverRadius(origin), origin)] },
      { duration: OPEN_MS, easing: EASE, fill: 'forwards', pseudoElement: '::view-transition-new(root)' }
    )
  );
}

// Fold the page back into the button it came from, or crossfade if it wasn't opened from one.
export function closeTo(navigate, to) {
  if (!document.startViewTransition || prefersReducedMotion()) {
    navigate(to);
    return;
  }
  if (!opened) {
    transition('fade', navigate, to);
    return;
  }
  const { origin } = opened;
  returned = { to: opened.to, at: Date.now() };
  transition('close', navigate, to, () =>
    document.documentElement.animate(
      { clipPath: [circle(coverRadius(origin), origin), circle(0, origin)] },
      // Hold the closed circle until the transition tears down, or the old page flashes back for a frame.
      { duration: CLOSE_MS, easing: EASE, fill: 'forwards', pseudoElement: '::view-transition-old(root)' }
    )
  );
}

// The section the landing page was just folded back from, if that happened a moment ago.
export function recentReturn() {
  return returned && Date.now() - returned.at < 1500 ? returned.to : null;
}

// Whether the visitor has moved between pages yet, so first-load-only effects stay that way.
export const hasNavigated = () => navigated;

// Lets a pending view transition know the new route has been committed to the DOM.
export function RouteSettle() {
  const location = useLocation();
  useLayoutEffect(() => {
    if (location.key !== 'default') navigated = true;
    settleRoute?.();
    settleRoute = null;
  }, [location]);
  return null;
}
