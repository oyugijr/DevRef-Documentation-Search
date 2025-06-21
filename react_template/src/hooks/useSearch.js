import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

// Custom hook that wraps the context for convenience
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};