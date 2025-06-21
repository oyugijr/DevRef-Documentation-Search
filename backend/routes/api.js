const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

// Search endpoints
router.post('/search', searchController.searchDocumentation);
router.get('/search/sources', searchController.getAvailableSources);
router.get('/search/types', searchController.getContentTypes);

// Code examples endpoints
router.get('/code/:id', searchController.getCodeExample);
router.post('/code/highlight', searchController.highlightCode);

// User endpoints (for future implementation)
router.post('/auth/login', (req, res) => {
  // This is a mock endpoint for future implementation
  res.status(200).json({ success: true, token: 'mock-token-123' });
});

router.post('/references/save', (req, res) => {
  // This is a mock endpoint for future implementation
  res.status(200).json({ success: true, message: 'Reference saved successfully' });
});

module.exports = router;