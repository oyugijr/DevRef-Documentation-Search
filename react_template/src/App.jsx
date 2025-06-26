import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import FilterOptions from './components/FilterOptions';
import BackendStatus from './components/BackendStatus';
import { SearchProvider } from './context/SearchContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // Simulate initial loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <SearchProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <Navbar />
          <main className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4 text-center">
                DevRef - Documentation Search Companion
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
                Search through MDN, React, Tailwind, and more documentation using natural language
              </p>
            </div>
            <SearchBar />
            <FilterOptions />
            {isLoading ? (
              <div className="flex justify-center mt-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <ResultsList />
            )}
          </main>
          <footer className="py-6 text-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto">
              <p>DevRef - Documentation Search Companion &copy; {new Date().getFullYear()}</p>
            </div>
          </footer>
          <BackendStatus />
        </div>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;