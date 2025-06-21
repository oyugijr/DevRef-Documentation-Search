import React, { useState } from 'react';
import { useSearch } from '../hooks/useSearch';

const FilterOptions = () => {
  const { filters, updateFilters } = useSearch();
  const [isExpanded, setIsExpanded] = useState(false);

  const documentationSources = [
    { id: 'mdn', name: 'MDN', color: 'blue' },
    { id: 'react', name: 'React', color: 'cyan' },
    { id: 'tailwind', name: 'Tailwind CSS', color: 'purple' },
    { id: 'javascript', name: 'JavaScript', color: 'yellow' },
    { id: 'typescript', name: 'TypeScript', color: 'blue' },
    { id: 'css', name: 'CSS', color: 'pink' },
    { id: 'html', name: 'HTML', color: 'orange' }
  ];

  const contentTypes = [
    { id: 'guide', name: 'Guides' },
    { id: 'reference', name: 'References' },
    { id: 'api', name: 'API Docs' },
    { id: 'tutorial', name: 'Tutorials' },
    { id: 'example', name: 'Examples' }
  ];

  const handleSourceToggle = (sourceId) => {
    const updatedSources = filters.sources.includes(sourceId)
      ? filters.sources.filter(id => id !== sourceId)
      : [...filters.sources, sourceId];
    
    updateFilters({
      ...filters,
      sources: updatedSources
    });
  };

  const handleTypeToggle = (typeId) => {
    const updatedTypes = filters.types.includes(typeId)
      ? filters.types.filter(id => id !== typeId)
      : [...filters.types, typeId];
    
    updateFilters({
      ...filters,
      types: updatedTypes
    });
  };

  const clearFilters = () => {
    updateFilters({
      sources: [],
      types: [],
      dateRange: 'all'
    });
  };

  const sourceColors = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 border-pink-200 dark:border-pink-800',
    orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-800'
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`w-5 h-5 mr-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          Filter Options
        </button>
        
        {(filters.sources.length > 0 || filters.types.length > 0) && (
          <button 
            onClick={clearFilters}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Clear filters
          </button>
        )}
      </div>
      
      {isExpanded && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Documentation Sources</h3>
            <div className="flex flex-wrap gap-2">
              {documentationSources.map((source) => (
                <button
                  key={source.id}
                  onClick={() => handleSourceToggle(source.id)}
                  className={`
                    px-3 py-1.5 text-sm rounded-full border transition-colors
                    ${filters.sources.includes(source.id) 
                      ? sourceColors[source.color] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600'
                      : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {source.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Content Type</h3>
            <div className="flex flex-wrap gap-2">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeToggle(type.id)}
                  className={`
                    px-3 py-1.5 text-sm rounded-full border transition-colors
                    ${filters.types.includes(type.id) 
                      ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' 
                      : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {!isExpanded && (filters.sources.length > 0 || filters.types.length > 0) && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {filters.sources.map((sourceId) => {
            const source = documentationSources.find(s => s.id === sourceId);
            if (!source) return null;
            
            return (
              <span 
                key={sourceId}
                className={`inline-flex items-center text-xs px-2 py-1 rounded-full 
                  ${sourceColors[source.color] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}
              >
                {source.name}
                <button 
                  className="ml-1 hover:text-gray-700 dark:hover:text-gray-200" 
                  onClick={() => handleSourceToggle(sourceId)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                  </svg>
                </button>
              </span>
            );
          })}
          
          {filters.types.map((typeId) => {
            const type = contentTypes.find(t => t.id === typeId);
            if (!type) return null;
            
            return (
              <span 
                key={typeId}
                className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
              >
                {type.name}
                <button 
                  className="ml-1 hover:text-indigo-700 dark:hover:text-indigo-200" 
                  onClick={() => handleTypeToggle(typeId)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                  </svg>
                </button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterOptions;