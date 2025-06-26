/**
 * API client for DevRef Documentation Search Companion
 * This file handles all communication with the backend API
 */

// Base URL for the API - use environment variable or default to localhost
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Search documentation with natural language query and optional filters
 * 
 * @param {string} query - The search query
 * @param {Object} filters - Optional filters (sources, types, dateRange)
 * @returns {Promise<Array>} - Promise resolving to an array of search results
 */
export const searchDocumentation = async (query, filters = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, filters })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Error searching documentation');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching documentation:', error);
    throw error;
  }
};

/**
 * Get available documentation sources
 * 
 * @returns {Promise<Array>} - Promise resolving to an array of source names
 */
export const getAvailableSources = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/sources`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Error fetching sources');
    }

    const data = await response.json();
    return data.sources;
  } catch (error) {
    console.error('Error fetching sources:', error);
    throw error;
  }
};

/**
 * Get available content types
 * 
 * @returns {Promise<Array>} - Promise resolving to an array of content types
 */
export const getContentTypes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/types`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Error fetching content types');
    }

    const data = await response.json();
    return data.types;
  } catch (error) {
    console.error('Error fetching content types:', error);
    throw error;
  }
};

/**
 * Get a specific code example by ID
 * 
 * @param {string} id - The code example ID
 * @returns {Promise<Object>} - Promise resolving to the code example details
 */
export const getCodeExample = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/code/${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Error fetching code example');
    }

    const data = await response.json();
    return data.codeExample;
  } catch (error) {
    console.error('Error fetching code example:', error);
    throw error;
  }
};

/**
 * Apply syntax highlighting to a code snippet
 * 
 * @param {string} code - The code snippet to highlight
 * @param {string} language - The programming language
 * @returns {Promise<string>} - Promise resolving to the highlighted HTML
 */
export const highlightCode = async (code, language) => {
  try {
    const response = await fetch(`${API_BASE_URL}/code/highlight`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code, language })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Error highlighting code');
    }

    const data = await response.json();
    return data.highlightedCode;
  } catch (error) {
    console.error('Error highlighting code:', error);
    throw error;
  }
};

/**
 * Authenticate user (mock implementation for now)
 * 
 * @param {string} username - Username
 * @param {string} password - Password
 * @returns {Promise<Object>} - Promise resolving to authentication result
 */
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Save a reference (requires authentication)
 * 
 * @param {Object} reference - The reference object to save
 * @returns {Promise<Object>} - Promise resolving to the save operation result
 */
export const saveReference = async (reference) => {
  try {
    const response = await fetch(`${API_BASE_URL}/references/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(reference)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Error saving reference');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error saving reference:', error);
    throw error;
  }
};