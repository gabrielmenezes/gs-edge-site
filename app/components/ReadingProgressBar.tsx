'use client';

import { useEffect, useState, RefObject } from 'react';

interface ReadingProgressBarProps {
  targetRef?: RefObject<HTMLElement | null>;
}

export default function ReadingProgressBar({ targetRef }: ReadingProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (targetRef && targetRef.current) {
            const element = targetRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Total scrollable distance for the article
            const elementTop = rect.top;
            const elementHeight = rect.height;
            
            // Start tracking when article top approaches viewport top
            const startOffset = 100; // navbar offset
            const scrolledDistance = (startOffset - elementTop);
            const totalDistance = elementHeight - windowHeight + startOffset + 200;

            if (scrolledDistance <= 0) {
              setProgress(0);
            } else if (totalDistance <= 0 || scrolledDistance >= totalDistance) {
              setProgress(100);
            } else {
              const currentProgress = (scrolledDistance / totalDistance) * 100;
              setProgress(Math.min(100, Math.max(0, currentProgress)));
            }
          } else {
            // Fallback: entire document scroll
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const currentScroll = window.scrollY;
            if (documentHeight <= 0) {
              setProgress(0);
            } else {
              const currentProgress = (currentScroll / documentHeight) * 100;
              setProgress(Math.min(100, Math.max(0, currentProgress)));
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetRef]);

  return (
    <div
      aria-hidden="true"
      className="editorial-progress"
    >
      <div
        className="editorial-progress-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
