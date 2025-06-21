import React, { useState, useEffect } from 'react';

const BackendStatus = () => {
  const [status, setStatus] = useState('checking');
  const [message, setMessage] = useState('');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL.replace('/api', '')}/health`);
        const data = await response.json();
        
        if (response.ok) {
          setStatus('online');
          setMessage(data.message || 'Backend is online');
        } else {
          setStatus('error');
          setMessage('Backend returned an error');
        }
      } catch (error) {
        console.error('Error checking backend status:', error);
        setStatus('offline');
        setMessage('Cannot connect to backend');
      }
    };

    checkBackendStatus();
  }, [API_BASE_URL]);

  return (
    <div className="fixed bottom-2 right-2 px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
      <div 
        className={`w-2 h-2 rounded-full ${
          status === 'online' ? 'bg-green-500' : 
          status === 'checking' ? 'bg-yellow-500' :
          'bg-red-500'
        }`}
      />
      <span className={`
        ${status === 'online' ? 'text-green-500' : 
          status === 'checking' ? 'text-yellow-500' :
          'text-red-500'
        }
      `}>
        {status === 'checking' ? 'Checking backend...' : message}
      </span>
    </div>
  );
};

export default BackendStatus;