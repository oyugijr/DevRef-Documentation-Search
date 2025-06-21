import { getMockResults } from './mockData';

/**
 * Search through documentation using a query and optional filters
 * In a real application, this would call the backend API that would use
 * vector search and NLP processing to find relevant documentation
 * 
 * @param {string} query - The search query
 * @param {Object} filters - Optional filters to apply to the search
 * @returns {Promise<Array>} - Promise resolving to an array of search results
 */
export const searchDocumentation = async (query, filters = {}) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  try {
    // In a real app, this would be an API call to the backend
    // For now, we're using our mock data function
    const results = getMockResults(query, filters);
    return results;
  } catch (error) {
    console.error('Error searching documentation:', error);
    throw error;
  }
};

/**
 * This would be the interface to the NLP processor in a real application
 * For the prototype, we'll just mock these functions
 */
export const nlpProcessor = {
  processQuery: async (query) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    return {
      originalQuery: query,
      keywords: query.toLowerCase().split(' '),
      intent: 'search', // Could be 'search', 'how-to', 'definition', etc.
      embedding: [], // This would be a vector in a real app
      detectedSources: [] // NLP could extract mentioned sources
    };
  },
  
  extractKeywords: (query) => {
    // Simple implementation for the prototype
    // A real implementation would use NLP techniques
    return query
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 3)
      .filter(word => !['what', 'when', 'where', 'which', 'with'].includes(word));
  },
  
  determineIntent: (query) => {
    // Simple intent detection for prototype
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('how to') || lowerQuery.includes('how do i')) {
      return 'how-to';
    } else if (lowerQuery.includes('what is') || lowerQuery.includes('definition')) {
      return 'definition';
    } else if (lowerQuery.includes('example') || lowerQuery.includes('sample')) {
      return 'example';
    } else {
      return 'search';
    }
  }
};

/**
 * This would handle code previews in a real application
 * For the prototype, we'll just mock these functions
 */
export const codePreviewEngine = {
  createPreview: async (code, language, dependencies = []) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 200));
    
    return {
      id: `preview-${Math.random().toString(36).substring(2, 9)}`,
      renderedOutput: code, // In a real app, this would be the rendered output
      code,
      language,
      errors: []
    };
  },
  
  validateCode: (code, language) => {
    // Simple validation for the prototype
    if (!code || code.trim() === '') {
      return {
        isValid: false,
        errors: ['Code cannot be empty']
      };
    }
    
    return {
      isValid: true,
      errors: []
    };
  }
};