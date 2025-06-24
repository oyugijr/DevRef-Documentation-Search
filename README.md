# Project Summary
The DevRef Documentation Search Companion is a web application designed to facilitate natural language searches across various documentation sources. It enhances the developer experience by providing an interactive interface that allows efficient retrieval of relevant information with features such as code previews and customizable display options. The project aims to improve documentation accessibility for developers, making it easier to find and utilize information effectively.

# Project Module Description
The application consists of several functional modules:
- **Search Interface:** Facilitates natural language queries.
- **Filter Options:** Enables filtering of results by documentation source and content type.
- **Results Viewing:** Presents search results with relevance scoring.
- **Code Previews:** Displays interactive code snippets with syntax highlighting.
- **Theme Toggle:** Allows users to switch between dark and light themes.
- **Responsive Design:** Adapts the interface for various device sizes.
- **Backend Integration:** Supports API endpoints for search functionality and data retrieval.

# Directory Tree
```
devref_class_diagram.mermaid          # Class diagram for application structure
devref_documentation_search_companion_prd.md  # Product requirements document
devref_sequence_diagram.mermaid       # Sequence diagram for application flow
devref_system_design.md                # System design documentation
backend/                               # Backend server implementation
  ├── package.json                     # Backend project dependencies and scripts
  ├── server.js                        # Main server file for the backend
  ├── routes/api.js                   # API endpoints for the application
  ├── controllers/searchController.js  # Logic for handling search requests
  ├── services/searchService.js        # Service layer for search functionality
  ├── data/documentationData.js        # Sample documentation content
  └── .env                             # Environment variables for backend
react_template/                        # React application template
  ├── README.md                        # Overview of the React template
  ├── eslint.config.js                 # ESLint configuration file
  ├── index.html                       # Main HTML file
  ├── package.json                     # Project dependencies and scripts
  ├── postcss.config.js                # PostCSS configuration
  ├── public/data/example.json         # Example data for the application
  ├── src/                             # Source files for the React application
  │   ├── App.jsx                      # Main application component
  │   ├── components/                  # React components
  │   ├── context/                     # Context providers for state management
  │   ├── hooks/                       # Custom hooks
  │   ├── index.css                    # Global styles
  │   ├── main.jsx                     # Entry point for the React application
  │   ├── utils/                       # Utility functions
  │   └── apiClient.js                 # API client for backend communication
  ├── tailwind.config.js               # Tailwind CSS configuration
  └── vite.config.js                   # Vite configuration for the application
```

# File Description Inventory
- **devref_class_diagram.mermaid:** Visual representation of class structure.
- **devref_documentation_search_companion_prd.md:** Outlines product requirements.
- **devref_sequence_diagram.mermaid:** Illustrates the interaction sequence in the application.
- **devref_system_design.md:** Describes the overall system design.
- **backend/:** Contains the backend server implementation files.
- **react_template/:** Contains the React application structure and files.

# Technology Stack
- **Frontend:** React, Tailwind CSS
- **State Management:** Context API
- **Build Tool:** Vite
- **Linting:** ESLint
- **Styling:** PostCSS, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB
- **APIs:** RESTful API for communication between frontend and backend

# Usage
To set up the project:
1. Install frontend dependencies:
   ```bash
   pnpm i
   ```
2. Start the frontend development server:
   ```bash
   pnpm run dev
   ```
3. Set up the backend:
   - Navigate to the backend directory and install dependencies:
     ```bash
     cd backend && npm install
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```
