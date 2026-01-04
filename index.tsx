import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Find the root element in the HTML
const rootElement = document.getElementById('root');

// Ensure the root element exists before attempting to render
if (!rootElement) {
  throw new Error("Could not find root element to mount the React application.");
}

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);