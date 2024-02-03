import { useEffect, useLayoutEffect, useState } from "react";

const getMatches = (query) => {
  // Prevents SSR issues
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
};

export function useMediaQuery(query) {
  const [hasMatch, setHasMatches] = useState(getMatches(query));
  const [initialLoad, setInitialLoad] = useState(true);

  // onli for static site generation
  useLayoutEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, []);

  function handleChange() {
    setHasMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener('change', handleChange);
    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return initialLoad ? undefined : hasMatch;
}
