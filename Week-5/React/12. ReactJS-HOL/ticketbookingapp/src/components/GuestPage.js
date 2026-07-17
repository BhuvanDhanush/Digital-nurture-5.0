import React from 'react';
import FlightDetails from './FlightDetails';
import WarningBanner from './WarningBanner';

// The Guest page: the visitor can only BROWSE flight details.
// Booking controls are intentionally left out (or could be prevented
// from rendering, see WarningBanner.js for that technique).
function GuestPage() {
  return (
    <div className="section">
      <h2>Guest Page - Browse Flights</h2>
      {/* WarningBanner is shown (warn=true) only on the Guest page */}
      <WarningBanner warn={true} />
      <FlightDetails />
      <p>
        <em>Log in to unlock ticket booking for these flights.</em>
      </p>
    </div>
  );
}

export default GuestPage;
