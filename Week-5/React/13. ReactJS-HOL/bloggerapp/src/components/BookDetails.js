import React from 'react';
import BookItem from './BookItem';

const books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', isNew: true },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', isNew: false },
  { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', isNew: true }
];

// BookDetails demonstrates:
// 1. LIST RENDERING with the map() function
// 2. KEYS - each <BookItem> gets a unique "key" prop (book.id) so React
//    can efficiently track which items changed, were added, or removed
// 3. Conditional rendering technique: IF/ELSE STATEMENT using an
//    ELEMENT VARIABLE ("content") to decide what to show
function BookDetails() {
  let content; // element variable

  if (books.length === 0) {
    content = <p className="empty-msg">No books available right now.</p>;
  } else {
    // The map() function transforms the "books" array into an array
    // of <BookItem> React elements, one per book.
    content = books.map((book) => <BookItem key={book.id} book={book} />);
  }

  return (
    <div className="section">
      <h2>📚 Book Details</h2>
      <p>
        <em>Conditional rendering technique used here: if / else with an
        element variable.</em>
      </p>
      {content}
    </div>
  );
}

export default BookDetails;
