import { useState } from 'react';
import CodePreview from './CodePreview';

const ResultItem = ({ result }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSaved = () => {
    setIsSaved(!isSaved);
  };

  const sourceColors = {
    'MDN': 'blue',
    'React': 'cyan',
    'Tailwind': 'purple',
    'JavaScript': 'yellow',
    'TypeScript': 'blue',
    'CSS': 'pink',
    'HTML': 'orange'
  };

  const sourceColor = sourceColors[result.source] || 'gray';
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-200">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${colorClasses[sourceColor]}`}>
              {result.source}
            </span>
            {result.type && (
              <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                {result.type}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <button 
              onClick={toggleSaved} 
              className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                isSaved ? 'text-blue-500 dark:text-blue-400' : ''
              }`}
            >
              {isSaved ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
              )}
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Z" />
              </svg>
            </button>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-2 mb-1">{result.title}</h3>
        
        <div className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          <a href={result.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            {result.path}
          </a>
        </div>
        
        <div className={`prose dark:prose-invert max-w-none ${!isExpanded && 'line-clamp-3'}`}>
          <p>{result.content}</p>
        </div>
        
        {result.content.length > 200 && (
          <button
            onClick={toggleExpanded}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium mt-2 transition-colors"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
        
        {result.codeExamples && result.codeExamples.length > 0 && (
          <div className="mt-4">
            <CodePreview 
              code={result.codeExamples[0].code} 
              language={result.codeExamples[0].language}
              description={result.codeExamples[0].description}
              isInteractive={result.codeExamples[0].isInteractive}
              dependencies={result.codeExamples[0].dependencies}
            />
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-3 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Relevance score: {result.relevanceScore.toFixed(2)}</span>
        </div>
        <a 
          href={result.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          View original
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ResultItem;