import React from 'react';

// This is an EXTRACTED COMPONENT used inside a list rendered with map().
// NOTE: the "key" prop is passed by the parent when it creates this
// element inside map() (e.g. <BookItem key={book.id} .../>). The key
// itself is NOT received as a regular prop inside this component --
// React uses it internally to identify list items across re-renders.
function BookItem(props) {
  const { book } = props;

  return (
    <div className="item-card">
      <span>
        {book.title} — <em>{book.author}</em>
      </span>
      {/* Conditional rendering technique: Logical && operator.
          The badge only renders if book.isNew is true. */}
      {book.isNew && <span className="badge">New</span>}
    </div>
  );
}

export default BookItem;
