import React from 'react';
import BlogItem from './BlogItem';

const blogs = [
  { id: 1, title: '10 Tips for Clean Code', author: 'Asha Rao', featured: true },
  { id: 2, title: 'Understanding React Hooks', author: 'Vikram Singh', featured: false },
  { id: 3, title: 'A Guide to CSS Grid', author: 'Meera Nair', featured: false }
];

// BlogDetails demonstrates:
// 1. LIST RENDERING with map() and KEYS (blog.id used as the key)
// 2. Conditional rendering technique: TERNARY OPERATOR ( condition ? a : b )
//    used directly inside the JSX to choose between two outputs.
function BlogDetails() {
  return (
    <div className="section">
      <h2>📝 Blog Details</h2>
      <p>
        <em>Conditional rendering technique used here: ternary operator.</em>
      </p>

      {/* Ternary operator deciding whether to show the list or an
          empty-state message */}
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
      ) : (
        <p className="empty-msg">No blog posts published yet.</p>
      )}
    </div>
  );
}

export default BlogDetails;
