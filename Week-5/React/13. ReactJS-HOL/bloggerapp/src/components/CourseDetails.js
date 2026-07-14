import React from 'react';
import CourseItem from './CourseItem';

const courses = [
  { id: 1, name: 'React for Beginners', duration: '4 weeks', seatsLeft: 12 },
  { id: 2, name: 'Advanced JavaScript', duration: '6 weeks', seatsLeft: 3 },
  { id: 3, name: 'Full-Stack Web Development', duration: '10 weeks', seatsLeft: 0 }
];

// A small helper component that demonstrates PREVENTING A COMPONENT
// FROM RENDERING: it returns null when there is nothing to announce.
function InfoBanner({ show, children }) {
  if (!show) {
    return null; // renders nothing at all
  }
  return <div className="info-banner">{children}</div>;
}

// CourseDetails demonstrates:
// 1. LIST RENDERING with map() and KEYS (course.id used as the key)
// 2. Conditional rendering technique: LOGICAL && OPERATOR, used to
//    show the InfoBanner only when there is at least one course with
//    very few seats left.
function CourseDetails() {
  const hasLimitedSeats = courses.some(
    (course) => course.seatsLeft > 0 && course.seatsLeft <= 5
  );

  return (
    <div className="section">
      <h2>🎓 Course Details</h2>
      <p>
        <em>
          Conditional rendering techniques used here: logical &amp;&amp;
          operator, and a component that prevents itself from rendering
          (returns null).
        </em>
      </p>

      {/* Logical && : InfoBanner is only rendered (and only shows
          content) when hasLimitedSeats is true */}
      {hasLimitedSeats && (
        <InfoBanner show={hasLimitedSeats}>
          Hurry! Some courses have very few seats left.
        </InfoBanner>
      )}

      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseDetails;
