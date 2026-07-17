import React, { useState } from 'react';
import LoginControl from './components/LoginControl';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  // CONDITIONAL RENDERING using an element variable:
  // "page" holds either the Guest page or the User page depending on
  // the isLoggedIn state, and is rendered once at the bottom.
  let page;
  if (isLoggedIn) {
    page = <UserPage />;
  } else {
    page = <GuestPage />;
  }

  return (
    <div className="App">
      <LoginControl
        isLoggedIn={isLoggedIn}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
      />
      {page}
    </div>
  );
}

export default App;
