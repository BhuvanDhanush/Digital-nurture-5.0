import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('book');

  // Conditional rendering technique: SWITCH STATEMENT.
  // Useful when there are more than two possible outcomes, which makes
  // a plain if/else or ternary harder to read.
  function renderActiveSection() {
    switch (activeTab) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <p>Please select a tab.</p>;
    }
  }

  return (
    <div className="App">
      <h1>bloggerapp</h1>
      <p style={{ textAlign: 'center', color: '#555' }}>
        Conditional Rendering &amp; List Rendering Lab
      </p>

      {/* Rendering multiple components: each tab button swaps which
          child component is rendered below */}
      <div className="tabs">
        <button
          className={activeTab === 'book' ? 'active' : ''}
          onClick={() => setActiveTab('book')}
        >
          Book Details
        </button>
        <button
          className={activeTab === 'blog' ? 'active' : ''}
          onClick={() => setActiveTab('blog')}
        >
          Blog Details
        </button>
        <button
          className={activeTab === 'course' ? 'active' : ''}
          onClick={() => setActiveTab('course')}
        >
          Course Details
        </button>
      </div>

      {renderActiveSection()}
    </div>
  );
}

export default App;
