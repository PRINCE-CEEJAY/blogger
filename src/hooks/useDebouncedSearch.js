import { useState, useEffect } from 'react';

export function useDebouncedSearch(searchInput, delay) {
  const [debouncedValue, setDebouncedValue] = useState(searchInput);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchInput);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput, delay]);

  return debouncedValue;
}
