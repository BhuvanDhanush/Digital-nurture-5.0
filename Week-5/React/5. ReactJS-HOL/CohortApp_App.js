import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { id: 1, name: 'React Fundamentals', status: 'Ongoing', startDate: '01-Jun-2026', endDate: '30-Jul-2026' },
  { id: 2, name: 'Java Full Stack', status: 'Completed', startDate: '01-Jan-2026', endDate: '31-Mar-2026' },
  { id: 3, name: 'Data Engineering', status: 'Ongoing', startDate: '15-Jun-2026', endDate: '15-Sep-2026' },
  { id: 4, name: 'Cloud DevOps', status: 'Completed', startDate: '01-Oct-2025', endDate: '31-Dec-2025' }
];

function App() {
  return (
    <div className="App">
      <h1>My Academy — Cohort Dashboard</h1>
      {cohorts.map((cohort) => (
        <CohortDetails
          key={cohort.id}
          name={cohort.name}
          status={cohort.status}
          startDate={cohort.startDate}
          endDate={cohort.endDate}
        />
      ))}
    </div>
  );
}

export default App;
