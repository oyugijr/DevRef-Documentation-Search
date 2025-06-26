// This file contains mock data for the DevRef application
// In a real application, this would be replaced by API calls to the backend

// Sample documentation sections that would typically come from the documentation indices
export const mockDocumentationData = [
  {
    id: '1',
    title: 'Centering Elements with Tailwind CSS',
    content: 'To center elements horizontally in Tailwind CSS, you can use the "mx-auto" utility class. This applies "margin-left: auto" and "margin-right: auto" to your element. For flexbox centering, use the "flex justify-center items-center" classes together.',
    path: 'Layout > Flexbox & Grid > Alignment',
    source: 'Tailwind',
    sourceUrl: 'https://tailwindcss.com/docs/flex',
    type: 'guide',
    relevanceScore: 0.95,
    codeExamples: [
      {
        code: '<div class="flex justify-center items-center h-screen">\n  <div class="bg-blue-500 p-6 rounded-lg shadow-lg text-white">\n    I am centered vertically and horizontally\n  </div>\n</div>',
        language: 'html',
        description: 'Centering a div both horizontally and vertically with Tailwind CSS',
        isInteractive: true,
        dependencies: []
      }
    ]
  },
  {
    id: '2',
    title: 'React Hooks Introduction',
    content: 'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are functions that let you "hook into" React state and lifecycle features from function components. The most basic Hook is useState, which lets you add React state to function components.',
    path: 'API Reference > Hooks > Introduction',
    source: 'React',
    sourceUrl: 'https://reactjs.org/docs/hooks-intro.html',
    type: 'reference',
    relevanceScore: 0.92,
    codeExamples: [
      {
        code: 'import React, { useState } from \'react\';\n\nfunction Example() {\n  // Declare a new state variable, which we\'ll call "count"\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}',
        language: 'jsx',
        description: 'Using the useState Hook in a functional component',
        isInteractive: true,
        dependencies: []
      }
    ]
  },
  {
    id: '3',
    title: 'CSS Grid Layout',
    content: 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning. To make an element a grid container, you set the display property to "grid" or "inline-grid".',
    path: 'CSS > CSS Grid Layout > Basic Concepts',
    source: 'MDN',
    sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout',
    type: 'guide',
    relevanceScore: 0.89,
    codeExamples: [
      {
        code: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  padding: 10px;\n}\n\n.grid-item {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n}',
        language: 'css',
        description: 'Creating a basic 3-column grid layout',
        isInteractive: true,
        dependencies: []
      },
      {
        code: '<div class="grid-container">\n  <div class="grid-item">1</div>\n  <div class="grid-item">2</div>\n  <div class="grid-item">3</div>\n  <div class="grid-item">4</div>\n  <div class="grid-item">5</div>\n  <div class="grid-item">6</div>\n  <div class="grid-item">7</div>\n  <div class="grid-item">8</div>\n  <div class="grid-item">9</div>\n</div>',
        language: 'html',
        description: 'HTML structure for the grid',
        isInteractive: false,
        dependencies: []
      }
    ]
  },
  {
    id: '4',
    title: 'JavaScript Array Methods',
    content: 'JavaScript provides several built-in methods for array manipulation. Common methods include map(), filter(), reduce(), forEach(), some(), every(), and find(). These methods are powerful tools for working with collections of data and can make your code more readable and expressive.',
    path: 'JavaScript > Reference > Standard built-in objects > Array',
    source: 'JavaScript',
    sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
    type: 'reference',
    relevanceScore: 0.87,
    codeExamples: [
      {
        code: '// map: Transform each element and create a new array\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\n// filter: Create a new array with elements that pass the test\nconst evenNumbers = numbers.filter(num => num % 2 === 0);\nconsole.log(evenNumbers); // [2, 4]\n\n// reduce: Reduce array to a single value\nconst sum = numbers.reduce((total, num) => total + num, 0);\nconsole.log(sum); // 15',
        language: 'javascript',
        description: 'Examples of common JavaScript array methods',
        isInteractive: true,
        dependencies: []
      }
    ]
  },
  {
    id: '5',
    title: 'React Component Lifecycle',
    content: 'React components go through a lifecycle of events: Mounting (adding to the DOM), Updating (changes in props or state), and Unmounting (removal from the DOM). With hooks, you can use useEffect to handle side effects that were previously managed with lifecycle methods. The dependency array in useEffect controls when the effect runs.',
    path: 'Main Concepts > Components and Props > Lifecycle of Components',
    source: 'React',
    sourceUrl: 'https://reactjs.org/docs/react-component.html#the-component-lifecycle',
    type: 'guide',
    relevanceScore: 0.85,
    codeExamples: [
      {
        code: 'import React, { useState, useEffect } from \'react\';\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    // Similar to componentDidMount and componentDidUpdate\n    const interval = setInterval(() => {\n      setSeconds(seconds => seconds + 1);\n    }, 1000);\n    \n    // Similar to componentWillUnmount\n    return () => clearInterval(interval);\n  }, []); // Empty dependency array means this effect runs once on mount\n\n  return <div>Seconds: {seconds}</div>;\n}',
        language: 'jsx',
        description: 'Using useEffect hook to mimic lifecycle methods',
        isInteractive: true,
        dependencies: []
      }
    ]
  },
  {
    id: '6',
    title: 'HTML Semantic Elements',
    content: 'Semantic HTML elements clearly describe their meaning to both the browser and the developer. Examples include <header>, <footer>, <article>, <section>, <nav>, <aside>, and <main>. Using semantic tags improves accessibility, SEO, and code readability.',
    path: 'HTML > Elements > Semantic elements',
    source: 'HTML',
    sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
    type: 'guide',
    relevanceScore: 0.83,
    codeExamples: [
      {
        code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Semantic HTML Example</title>\n</head>\n<body>\n  <header>\n    <h1>Website Title</h1>\n    <nav>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">About</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <article>\n      <h2>Article Title</h2>\n      <p>Article content goes here...</p>\n    </article>\n    \n    <aside>\n      <h3>Related Links</h3>\n      <ul>\n        <li><a href="#">Related Link 1</a></li>\n        <li><a href="#">Related Link 2</a></li>\n      </ul>\n    </aside>\n  </main>\n  \n  <footer>\n    <p>&copy; 2023 Your Website</p>\n  </footer>\n</body>\n</html>',
        language: 'html',
        description: 'Basic structure of a web page using semantic HTML elements',
        isInteractive: true,
        dependencies: []
      }
    ]
  },
];

// Function to simulate a search and return results based on the query
export const getMockResults = (query, filters = {}) => {
  if (!query) return [];

  // Convert query to lowercase for case-insensitive matching
  const lowerQuery = query.toLowerCase();
  
  // Filter results based on the query
  let results = mockDocumentationData.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const contentMatch = item.content.toLowerCase().includes(lowerQuery);
    return titleMatch || contentMatch;
  });
  
  // Apply source filters if provided
  if (filters.sources && filters.sources.length > 0) {
    results = results.filter(item => 
      filters.sources.includes(item.source.toLowerCase())
    );
  }
  
  // Apply type filters if provided
  if (filters.types && filters.types.length > 0) {
    results = results.filter(item => 
      filters.types.includes(item.type)
    );
  }
  
  // Sort by relevance score
  results = results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  
  return results;
};