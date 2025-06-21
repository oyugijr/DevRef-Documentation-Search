const searchService = require('../services/searchService');

// Controller for handling search-related requests
const searchController = {
  /**
   * Search documentation with natural language query and filters
   */
  searchDocumentation: async (req, res, next) => {
    try {
      const { query, filters } = req.body;
      
      if (!query || query.trim() === '') {
        return res.status(400).json({ 
          error: { message: 'Search query is required' } 
        });
      }

      const results = await searchService.performSearch(query, filters);
      
      return res.status(200).json({
        success: true,
        query,
        resultsCount: results.length,
        results
      });
    } catch (error) {
      next(error);
    }
  },
  
  /**
   * Get available documentation sources
   */
  getAvailableSources: async (req, res, next) => {
    try {
      const sources = await searchService.getAvailableSources();
      
      return res.status(200).json({
        success: true,
        sources
      });
    } catch (error) {
      next(error);
    }
  },
  
  /**
   * Get available content types
   */
  getContentTypes: async (req, res, next) => {
    try {
      const types = await searchService.getContentTypes();
      
      return res.status(200).json({
        success: true,
        types
      });
    } catch (error) {
      next(error);
    }
  },
  
  /**
   * Get a specific code example by ID
   */
  getCodeExample: async (req, res, next) => {
    try {
      const { id } = req.params;
      const codeExample = await searchService.getCodeExampleById(id);
      
      if (!codeExample) {
        return res.status(404).json({
          error: { message: 'Code example not found' }
        });
      }
      
      return res.status(200).json({
        success: true,
        codeExample
      });
    } catch (error) {
      next(error);
    }
  },
  
  /**
   * Highlight code with syntax highlighting
   */
  highlightCode: async (req, res, next) => {
    try {
      const { code, language } = req.body;
      
      if (!code || !language) {
        return res.status(400).json({
          error: { message: 'Code and language are required' }
        });
      }
      
      const highlightedCode = await searchService.highlightCodeSnippet(code, language);
      
      return res.status(200).json({
        success: true,
        highlightedCode
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = searchController;