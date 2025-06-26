const natural = require('natural');
const hljs = require('highlight.js');
const documentationData = require('../data/documentationData');

// Tokenizer and stemmer for natural language processing
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

// Create a TF-IDF (Term Frequency-Inverse Document Frequency) model
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

// Initialize TF-IDF with documentation data
documentationData.forEach((doc, index) => {
  // Add document text (title and content) to the TF-IDF model
  tfidf.addDocument(`${doc.title} ${doc.content}`);
  // Store the document index for later retrieval
  doc.docIndex = index;
});

const searchService = {
  /**
   * Perform search across documentation using natural language query and filters
   * 
   * @param {string} query - The search query
   * @param {Object} filters - Optional filters (sources, types, dateRange)
   * @returns {Array} - Search results sorted by relevance
   */
  performSearch: async (query, filters = {}) => {
    // Process the query using NLP techniques
    const processedQuery = searchService.processQuery(query);
    
    // Calculate TF-IDF scores for the query against all documents
    let results = documentationData.map(doc => {
      const relevanceScore = searchService.calculateRelevanceScore(processedQuery, doc);
      return {
        ...doc,
        relevanceScore
      };
    });
    
    // Filter by source if specified
    if (filters.sources && filters.sources.length > 0) {
      results = results.filter(doc =>
        filters.sources.includes(doc.source.toLowerCase())
      );
    }
    
    // Filter by content type if specified
    if (filters.types && filters.types.length > 0) {
      results = results.filter(doc =>
        filters.types.includes(doc.type)
      );
    }
    
    // Sort results by relevance score (highest first)
    results = results.sort((a, b) => b.relevanceScore - a.relevanceScore);
    
    // Only return results with at least minimal relevance
    return results.filter(doc => doc.relevanceScore > 0.2);
  },
  
  /**
   * Process the query using NLP techniques
   * 
   * @param {string} query - The raw search query
   * @returns {Object} - Processed query details
   */
  processQuery: (query) => {
    const tokens = tokenizer.tokenize(query.toLowerCase());
    const stems = tokens.map(token => stemmer.stem(token));
    
    // Determine query intent based on keywords
    let intent = 'search';
    if (query.toLowerCase().includes('how to') || query.toLowerCase().includes('how do i')) {
      intent = 'how-to';
    } else if (query.toLowerCase().includes('what is') || query.toLowerCase().includes('definition')) {
      intent = 'definition';
    } else if (query.toLowerCase().includes('example') || query.toLowerCase().includes('sample')) {
      intent = 'example';
    }
    
    return {
      originalQuery: query,
      tokens,
      stems,
      intent
    };
  },
  
  /**
   * Calculate relevance score between a query and document
   * 
   * @param {Object} processedQuery - The processed query
   * @param {Object} document - The document to calculate relevance for
   * @returns {number} - Relevance score between 0 and 1
   */
  calculateRelevanceScore: (processedQuery, document) => {
    // Use TF-IDF to calculate term importance
    let score = 0;
    
    // Calculate TF-IDF score for each query token
    processedQuery.tokens.forEach(token => {
      const tfidfScore = tfidf.tfidf(token, document.docIndex);
      score += tfidfScore;
    });
    
    // Add bonus points for matching intent with document type
    if (processedQuery.intent === document.type) {
      score += 1;
    }
    
    // Add bonus points for title match
    const titleMatches = processedQuery.tokens.filter(token => 
      document.title.toLowerCase().includes(token)
    ).length;
    
    score += (titleMatches / processedQuery.tokens.length) * 2;
    
    // Normalize score between 0 and 1
    return Math.min(score / (processedQuery.tokens.length + 3), 1);
  },
  
  /**
   * Get all available documentation sources
   * 
   * @returns {Array} - List of unique sources
   */
  getAvailableSources: async () => {
    const sources = documentationData.map(doc => doc.source);
    return [...new Set(sources)];
  },
  
  /**
   * Get all available content types
   * 
   * @returns {Array} - List of unique content types
   */
  getContentTypes: async () => {
    const types = documentationData.map(doc => doc.type);
    return [...new Set(types)];
  },
  
  /**
   * Get a specific code example by ID
   * 
   * @param {string} id - The document ID
   * @returns {Object|null} - The found code example or null
   */
  getCodeExampleById: async (id) => {
    // First try to find the document that contains this code example
    const document = documentationData.find(doc => doc.id === id);
    
    if (document && document.codeExamples && document.codeExamples.length > 0) {
      return {
        documentId: document.id,
        documentTitle: document.title,
        codeExamples: document.codeExamples.map(ex => ({
          ...ex,
          highlightedCode: searchService.highlightCodeSnippet(ex.code, ex.language)
        }))
      };
    }
    
    // If no direct document match, look through all code examples
    for (const doc of documentationData) {
      if (doc.codeExamples) {
        const example = doc.codeExamples.find(ex => ex.id === id);
        if (example) {
          return {
            documentId: doc.id,
            documentTitle: doc.title,
            codeExamples: [{
              ...example,
              highlightedCode: searchService.highlightCodeSnippet(example.code, example.language)
            }]
          };
        }
      }
    }
    
    return null;
  },
  
  /**
   * Highlight code snippet with syntax highlighting
   * 
   * @param {string} code - The code to highlight
   * @param {string} language - The programming language
   * @returns {string} - HTML with syntax highlighting
   */
  highlightCodeSnippet: (code, language) => {
    try {
      if (language) {
        return hljs.highlight(code, { language }).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    } catch (error) {
      console.error('Error highlighting code:', error);
      return code; // Return unhighlighted code if there's an error
    }
  }
};

module.exports = searchService;