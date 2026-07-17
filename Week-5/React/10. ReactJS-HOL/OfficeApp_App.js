import React from 'react';
import OfficeList from './OfficeList';

function App() {
  // A single office object with details: Name, Rent, and Address
  const office = {
    name: 'Skyline Business Hub',
    rent: 45000,
    address: '12 MG Road, Bengaluru',
    image: 'https://placehold.co/400x250?text=Office+Space'
  };

  return (
    <div className="App">
      {/* JSX element to display the heading of the page */}
      <h1>Office Space Rental</h1>

      {/* JSX attribute (src) to display the image of the office space */}
      <img src={office.image} alt="Office space" width="400" />

      {/* Using a JavaScript object and expressions inside JSX to display its details */}
      <div style={{ marginTop: '20px' }}>
        <h2>Featured Office</h2>
        <p><strong>Name:</strong> {office.name}</p>
        <p><strong>Address:</strong> {office.address}</p>
        <p>
          <strong>Rent:</strong>{' '}
          {/* Inline CSS in JSX: red if rent is below 60000, green if 60000 or above */}
          <span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
            &#8377;{office.rent}
          </span>
        </p>
      </div>

      {/* Rendering a list of office objects by looping through an array */}
      <OfficeList />
    </div>
  );
}

export default App;
