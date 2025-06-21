import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useSearch } from '../hooks/useSearch';

const Navbar = () => {
  const { isLoggedIn, toggleLogin } = useSearch();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-blue-600"
          >
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
          <span className="font-bold text-xl">DevRef</span>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <button
            onClick={toggleLogin}
            className="text-sm px-4 py-2 rounded-lg font-medium transition-all duration-200
              hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isLoggedIn ? 'My Account' : 'Log In'}
          </button>

          {!isLoggedIn && (
            <button className="text-sm px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200">
              Sign Up Free
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;