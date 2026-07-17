import React from 'react';
import '../stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = (total / goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student Score Calculator</h2>
      <p><span className="label">Name:</span> {name}</p>
      <p><span className="label">School:</span> {school}</p>
      <p><span className="label">Total Marks:</span> {total}</p>
      <p><span className="label">Goal (No. of Subjects):</span> {goal}</p>
      <p className="average"><span className="label">Average Score:</span> {average}</p>
    </div>
  );
}

export default CalculateScore;
