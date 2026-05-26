/**
 * Deterministic “random” spark positions for the construction / 404 animation.
 * Same values on server and client — avoids hydration mismatch from Math.random().
 */
function sparkUnit(i: number, salt: number): number {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453123;
  return x - Math.floor(x);
}

export const CONSTRUCTION_SPARKS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: sparkUnit(i, 1) * 100,
  delay: sparkUnit(i, 2) * 4,
  duration: 1.5 + sparkUnit(i, 3) * 2,
  size: 3 + sparkUnit(i, 4) * 5,
}));
