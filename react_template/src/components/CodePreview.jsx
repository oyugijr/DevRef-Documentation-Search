import { useState, useEffect, useRef } from 'react';

const CodePreview = ({ code, language, description, isInteractive = true }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [codeValue, setCodeValue] = useState(code);
  const [previewError, setPreviewError] = useState(null);
  const previewRef = useRef(null);
  const editorRef = useRef(null);

  // For HTML/CSS/JS preview rendering
  useEffect(() => {
    if (showPreview && previewRef.current && (language === 'html' || language === 'css' || language === 'javascript')) {
      try {
        if (language === 'html') {
          previewRef.current.innerHTML = codeValue;
        } else if (language === 'css') {
          const styleElement = document.createElement('style');
          styleElement.textContent = codeValue;
          previewRef.current.innerHTML = '';
          previewRef.current.appendChild(styleElement);
          previewRef.current.innerHTML += '<div class="css-preview-container"></div>';
        } else if (language === 'javascript') {
          // Simple sandbox for JS preview
          // In a real app, we would need a more secure approach
          previewRef.current.innerHTML = '<div id="js-output"></div>';
          try {
            // eslint-disable-next-line no-new-func
            const sandboxedFn = new Function(
              'output',
              `
              try {
                ${codeValue}
                return { success: true };
              } catch (error) {
                output.textContent = 'Error: ' + error.message;
                return { success: false, error: error.message };
              }
              `
            );
            const outputElement = previewRef.current.querySelector('#js-output');
            const result = sandboxedFn(outputElement);
            
            if (!result.success) {
              setPreviewError(result.error);
            } else {
              setPreviewError(null);
            }
          } catch (error) {
            setPreviewError(error.message);
          }
        }
      } catch (error) {
        setPreviewError(error.message);
      }
    }
  }, [codeValue, language, showPreview]);

  // Handle tab key in the code editor
  useEffect(() => {
    if (isEditing && editorRef.current) {
      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          
          const start = e.target.selectionStart;
          const end = e.target.selectionEnd;
          
          // Set new textarea value with tab inserted
          setCodeValue(
            codeValue.substring(0, start) + '  ' + codeValue.substring(end)
          );
          
          // Set cursor position after the inserted tab
          setTimeout(() => {
            e.target.selectionStart = e.target.selectionEnd = start + 2;
          }, 0);
        }
      };
      
      editorRef.current.addEventListener('keydown', handleTabKey);
      return () => {
        if (editorRef.current) {
          editorRef.current.removeEventListener('keydown', handleTabKey);
        }
      };
    }
  }, [isEditing, codeValue]);

  const handleCodeChange = (e) => {
    setCodeValue(e.target.value);
  };

  const toggleEditing = () => {
    if (!isInteractive) return;
    setIsEditing(!isEditing);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeValue);
    // Could add toast notification here
  };

  const renderLanguageBadge = () => {
    const languageColors = {
      html: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      css: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      javascript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      typescript: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      jsx: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
      bash: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      python: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    };

    const colorClass = languageColors[language] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    
    return (
      <span className={`text-xs font-medium px-2 py-0.5 rounded ${colorClass}`}>
        {language}
      </span>
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {description && (
        <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          {description}
        </div>
      )}
      
      <div className="p-1 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex space-x-2 items-center px-3">
          {renderLanguageBadge()}
        </div>
        
        <div className="flex space-x-1">
          {isInteractive && (
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`p-1.5 text-xs rounded ${
                showPreview
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Preview
            </button>
          )}
          
          {isInteractive && (
            <button
              onClick={toggleEditing}
              className={`p-1.5 text-xs rounded ${
                isEditing
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {isEditing ? 'Done' : 'Edit'}
            </button>
          )}
          
          <button
            onClick={copyCode}
            className="p-1.5 text-xs rounded text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Copy
          </button>
        </div>
      </div>
      
      <div className="relative">
        {isEditing ? (
          <textarea
            ref={editorRef}
            value={codeValue}
            onChange={handleCodeChange}
            className="w-full font-mono text-sm bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-4 min-h-[200px] border-none outline-none resize-none"
            spellCheck={false}
          />
        ) : (
          <pre className="p-4 overflow-x-auto text-sm bg-white dark:bg-gray-950">
            <code className="font-mono text-gray-800 dark:text-gray-200">{codeValue}</code>
          </pre>
        )}
      </div>
      
      {showPreview && isInteractive && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="p-1 bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
            <span className="px-3 text-xs font-medium text-gray-500 dark:text-gray-400">Preview</span>
          </div>
          
          {previewError && (
            <div className="bg-red-50 dark:bg-red-900 p-2 text-xs text-red-600 dark:text-red-300 border-b border-red-200 dark:border-red-700">
              Error: {previewError}
            </div>
          )}
          
          <div 
            ref={previewRef}
            className="bg-white dark:bg-gray-800 p-4 min-h-[100px] overflow-auto"
          />
        </div>
      )}
    </div>
  );
};

export default CodePreview;