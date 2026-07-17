import React from 'react';

function OfficeList() {
  // A list of office space objects to loop through using JSX + JavaScript expressions
  const officeSpaces = [
    { id: 1, name: 'Skyline Business Hub', rent: 45000, address: '12 MG Road, Bengaluru' },
    { id: 2, name: 'Metro Corporate Tower', rent: 75000, address: '5th Avenue, Chennai' },
    { id: 3, name: 'Green Park Offices', rent: 58000, address: '221 Anna Salai, Chennai' },
    { id: 4, name: 'Riverside Tech Park', rent: 92000, address: '9 Marine Drive, Mumbai' }
  ];

  return (
    <div>
      <h2>Available Office Spaces</h2>
      <ul>
        {officeSpaces.map((office) => (
          // Inline CSS in JSX: rent is shown in red if below 60000, green otherwise
          <li key={office.id} style={{ marginBottom: '10px' }}>
            <strong>{office.name}</strong> — {office.address} —{' '}
            <span
              style={{
                color: office.rent < 60000 ? 'red' : 'green',
                fontWeight: 'bold'
              }}
            >
              &#8377;{office.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfficeList;
