import React from 'react';

// Another extracted component, rendered inside a list via map().
// The parent assigns a unique "key" to each <BlogItem> element.
function BlogItem(props) {
  const { blog } = props;

  return (
    <div className="item-card">
      <span>
        {blog.title} <small>by {blog.author}</small>
      </span>
      {/* Conditional rendering technique: Ternary operator */}
      <span className={blog.featured ? 'badge featured' : 'badge'}>
        {blog.featured ? 'Featured' : 'Regular'}
      </span>
    </div>
  );
}

export default BlogItem;
