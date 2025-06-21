import { useSearch } from '../hooks/useSearch';
import ResultItem from './ResultItem';

const ResultsList = () => {
  const { results, hasSearched, query } = useSearch();

  if (!hasSearched) {
    return (
      <div className="mt-16 text-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16 text-gray-400 mx-auto mb-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
        <h2 className="text-xl font-medium text-gray-600 dark:text-gray-400">
          Enter a query to search documentation
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-500">
          Try asking "How do I center a div in Tailwind?" or "What are React hooks?"
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="mt-16 text-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16 text-gray-400 mx-auto mb-4" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
            clipRule="evenodd" 
          />
        </svg>
        <h2 className="text-xl font-medium text-gray-600 dark:text-gray-400">
          No results found for "{query}"
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-500">
          Try adjusting your search terms or filters
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-6">
      <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">
        Found {results.length} results for "{query}"
      </h2>
      {results.map((result) => (
        <ResultItem key={result.id} result={result} />
      ))}
    </div>
  );
};

export default ResultsList;