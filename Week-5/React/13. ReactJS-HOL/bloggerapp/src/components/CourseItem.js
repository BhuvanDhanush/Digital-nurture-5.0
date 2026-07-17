import React from 'react';

// Extracted component rendered inside a list via map(), with a key
// assigned by the parent (CourseDetails.js).
function CourseItem(props) {
  const { course } = props;

  return (
    <div className="item-card">
      <span>
        {course.name} — {course.duration}
      </span>
      {/* Conditional rendering technique: IIFE (Immediately Invoked
          Function Expression) inside JSX, useful when the logic is
          too complex for a simple ternary or && expression. */}
      {(() => {
        if (course.seatsLeft === 0) {
          return <span className="badge" style={{ backgroundColor: '#c0392b' }}>Full</span>;
        } else if (course.seatsLeft <= 5) {
          return <span className="badge" style={{ backgroundColor: '#e67e22' }}>Few Seats Left</span>;
        } else {
          return <span className="badge">Open</span>;
        }
      })()}
    </div>
  );
}

export default CourseItem;
