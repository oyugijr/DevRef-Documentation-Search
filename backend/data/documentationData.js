// This file contains the documentation data used by the search service
// In a production environment, this would likely be stored in a database
const documentationData = [
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
        id: 'code-1',
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
        id: 'code-2',
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
        id: 'code-3a',
        code: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  padding: 10px;\n}\n\n.grid-item {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n}',
        language: 'css',
        description: 'Creating a basic 3-column grid layout',
        isInteractive: true,
        dependencies: []
      },
      {
        id: 'code-3b',
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
        id: 'code-4',
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
        id: 'code-5',
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
        id: 'code-6',
        code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Semantic HTML Example</title>\n</head>\n<body>\n  <header>\n    <h1>Website Title</h1>\n    <nav>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">About</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <main>\n    <article>\n      <h2>Article Title</h2>\n      <p>Article content goes here...</p>\n    </article>\n    \n    <aside>\n      <h3>Related Links</h3>\n      <ul>\n        <li><a href="#">Related Link 1</a></li>\n        <li><a href="#">Related Link 2</a></li>\n      </ul>\n    </aside>\n  </main>\n  \n  <footer>\n    <p>&copy; 2023 Your Website</p>\n  </footer>\n</body>\n</html>',
        language: 'html',
        description: 'Basic structure of a web page using semantic HTML elements',
        isInteractive: true,
        dependencies: []
      }
    ]
  },
  {
    id: '7',
    title: 'Node.js Express Middleware',
    content: 'Express middleware are functions that execute during the request-response cycle. They can modify request and response objects, end the cycle, or call the next middleware. Common uses include authentication, logging, body parsing, and error handling.',
    path: 'Express > Guide > Using middleware',
    source: 'Express',
    sourceUrl: 'https://expressjs.com/en/guide/using-middleware.html',
    type: 'guide',
    relevanceScore: 0.8,
    codeExamples: [
      {
        id: 'code-7',
        code: 'const express = require(\'express\');\nconst app = express();\n\n// Custom middleware function\nconst loggerMiddleware = (req, res, next) => {\n  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);\n  next(); // Call next middleware\n};\n\n// Apply middleware to all routes\napp.use(loggerMiddleware);\n\n// Route handler\napp.get(\'/\', (req, res) => {\n  res.send(\'Hello World\');\n});\n\napp.listen(3000, () => {\n  console.log(\'Server is running on port 3000\');\n});',
        language: 'javascript',
        description: 'Creating and using custom middleware in Express',
        isInteractive: true,
        dependencies: []
      }
    ]
  },
  {
    id: '8',
    title: 'Python Virtual Environments',
    content: 'Virtual environments in Python are isolated spaces where you can install packages without affecting the global Python installation. This helps manage dependencies between different projects. The venv module is included with Python 3.3+ and is the recommended way to create virtual environments.',
    path: 'Python > Tutorial > Virtual Environments',
    source: 'Python',
    sourceUrl: 'https://docs.python.org/3/tutorial/venv.html',
    type: 'guide',
    relevanceScore: 0.78,
    codeExamples: [
      {
        id: 'code-8',
        code: '# Create a virtual environment\npython -m venv myenv\n\n# Activate the virtual environment (Windows)\nmyenv\\Scripts\\activate\n\n# Activate the virtual environment (macOS/Linux)\nsource myenv/bin/activate\n\n# Install packages\npip install requests\n\n# Deactivate the environment\ndeactivate',
        language: 'bash',
        description: 'Creating and using a Python virtual environment',
        isInteractive: false,
        dependencies: []
      }
    ]
  },
  {
    id: '9',
    title: 'Git Branching and Merging',
    content: 'Git branches are lightweight movable pointers to commits. They allow you to work on features or fixes isolated from the main codebase. After completing work on a branch, you can merge it back to the main branch, integrating your changes.',
    path: 'Git > Reference > Branching and Merging',
    source: 'Git',
    sourceUrl: 'https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging',
    type: 'reference',
    relevanceScore: 0.75,
    codeExamples: [
      {
        id: 'code-9',
        code: '# Create and switch to a new branch\ngit checkout -b feature-branch\n\n# Make changes and commit\ngit add .\ngit commit -m "Add new feature"\n\n# Switch back to main branch\ngit checkout main\n\n# Merge feature branch into main\ngit merge feature-branch\n\n# Delete the feature branch after merging\ngit branch -d feature-branch',
        language: 'bash',
        description: 'Basic Git branching and merging workflow',
        isInteractive: false,
        dependencies: []
      }
    ]
  },
  {
    id: '10',
    title: 'MongoDB CRUD Operations with Mongoose',
    content: 'Mongoose provides a schema-based solution to model your application data with MongoDB. It includes built-in type casting, validation, query building, and business logic hooks. CRUD operations (Create, Read, Update, Delete) are fundamental database operations that Mongoose makes simple to implement.',
    path: 'Database > MongoDB > Mongoose > CRUD Operations',
    source: 'MongoDB',
    sourceUrl: 'https://mongoosejs.com/docs/crud.html',
    type: 'reference',
    relevanceScore: 0.73,
    codeExamples: [
      {
        id: 'code-10',
        code: 'const mongoose = require(\'mongoose\');\n\n// Define schema\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  age: Number,\n  createdAt: { type: Date, default: Date.now }\n});\n\n// Create model\nconst User = mongoose.model(\'User\', userSchema);\n\n// Create: Insert a new document\nasync function createUser() {\n  try {\n    const newUser = await User.create({\n      name: \'John Doe\',\n      email: \'john@example.com\',\n      age: 30\n    });\n    console.log(\'User created:\', newUser);\n  } catch (error) {\n    console.error(\'Error creating user:\', error);\n  }\n}\n\n// Read: Query documents\nasync function findUsers() {\n  try {\n    // Find all users\n    const allUsers = await User.find({});\n    \n    // Find users with specific criteria\n    const adults = await User.find({ age: { $gte: 18 } });\n    \n    // Find one specific user\n    const john = await User.findOne({ email: \'john@example.com\' });\n  } catch (error) {\n    console.error(\'Error finding users:\', error);\n  }\n}\n\n// Update: Modify documents\nasync function updateUser() {\n  try {\n    // Update one document\n    const result = await User.updateOne(\n      { email: \'john@example.com\' },\n      { $set: { age: 31 } }\n    );\n    \n    // Find and update (returns the updated document)\n    const updatedUser = await User.findOneAndUpdate(\n      { email: \'john@example.com\' },\n      { $set: { name: \'John Smith\' } },\n      { new: true } // Return the updated document\n    );\n  } catch (error) {\n    console.error(\'Error updating user:\', error);\n  }\n}\n\n// Delete: Remove documents\nasync function deleteUser() {\n  try {\n    // Delete one document\n    await User.deleteOne({ email: \'john@example.com\' });\n    \n    // Delete multiple documents\n    const result = await User.deleteMany({ age: { $lt: 18 } });\n    console.log(`${result.deletedCount} users deleted`);\n  } catch (error) {\n    console.error(\'Error deleting users:\', error);\n  }\n}',
        language: 'javascript',
        description: 'Performing CRUD operations with Mongoose and MongoDB',
        isInteractive: true,
        dependencies: []
      }
    ]
  }
];

module.exports = documentationData;