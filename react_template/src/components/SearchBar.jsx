import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';

const SearchBar = () => {
  const { query, setQuery, performSearch, isSearching } = useSearch();
  const [placeholder] = useState(() => {
    const placeholders = [
      'How do I center a div in Tailwind?',
      'What are React hooks?',
      'How to create a responsive grid in CSS?',
      'JavaScript array methods example',
      'React component lifecycle'
    ];
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch();
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-5 py-4 pr-12 text-lg rounded-xl border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-transparent transition-all duration-200"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 dark:text-gray-300 
                     hover:text-blue-600 dark:hover:text-blue-400"
          >
            {isSearching ? (
              <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;