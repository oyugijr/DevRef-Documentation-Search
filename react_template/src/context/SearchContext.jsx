import React, { createContext, useState, useEffect, useContext } from 'react';
import { searchDocumentation } from '../utils/apiClient';

// Create the context
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [filters, setFilters] = useState({
    sources: [],
    types: [],
    dateRange: 'all'
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedReferences, setSavedReferences] = useState([]);

  // Perform search
  const performSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);

    try {
      // Call the backend API to perform the search
      const searchResults = await searchDocumentation(query, filters);
      setResults(searchResults);
    } catch (error) {
      console.error('Error performing search:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Update filters
  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    
    // If we've already searched, rerun the search with new filters
    if (hasSearched && query.trim()) {
      performSearch();
    }
  };

  // Toggle login state (for demo purposes)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Save a reference
  const saveReference = (reference) => {
    setSavedReferences([...savedReferences, reference]);
  };

  // Remove a saved reference
  const removeSavedReference = (id) => {
    setSavedReferences(savedReferences.filter(ref => ref.id !== id));
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        isSearching,
        hasSearched,
        filters,
        performSearch,
        updateFilters,
        isLoggedIn,
        toggleLogin,
        savedReferences,
        saveReference,
        removeSavedReference
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook moved to separate file in hooks/useSearch.js