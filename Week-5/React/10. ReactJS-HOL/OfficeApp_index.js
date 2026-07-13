import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is how JSX ultimately gets rendered to the real DOM:
// ReactDOM.createRoot(...).render(<App />) mounts the App component's
// JSX tree into the <div id="root"> element in public/index.html.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
