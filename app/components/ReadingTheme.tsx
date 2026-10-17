'use client';

import { useEffect, useState } from 'react';

export function useReadingTheme() {
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try { setIsLight(localStorage.getItem('blog-theme') === 'light'); } catch { /* Use the default when storage is unavailable. */ }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const next = !isLight;
    setIsLight(next);
    try { localStorage.setItem('blog-theme', next ? 'light' : 'dark'); } catch { /* Reading mode still works without persistence. */ }
  }
  return { isLight, toggleTheme };
}

export default function ReadingTheme({ isLight, onToggle }: { isLight: boolean; onToggle: () => void }) {
  return (
    <button className="reading-theme" onClick={onToggle} aria-label="Modo de leitura claro" aria-pressed={isLight}>
      <span aria-hidden="true">{isLight ? '◐' : '◑'}</span> {isLight ? 'Leitura escura' : 'Leitura clara'}
    </button>
  );
}
