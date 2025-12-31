'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Update the state initially
    setMatches(media.matches);

    // Define callback for changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    media.addEventListener('change', listener);

    // cleanup
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}
