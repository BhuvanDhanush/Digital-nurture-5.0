import React from 'react';

// These are simple presentational components for the two buttons.
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props) {
  return (
    <button className="logout" onClick={props.onClick}>Logout</button>
  );
}

// LoginControl decides WHICH button to render using an ELEMENT VARIABLE.
// An element variable is just a normal JS variable that holds a piece
// of JSX (a React element). We assign either <LoginButton> or
// <LogoutButton> to the variable "button" and then render {button}.
function LoginControl(props) {
  const isLoggedIn = props.isLoggedIn;

  let button; // <-- element variable

  if (isLoggedIn) {
    button = <LogoutButton onClick={props.onLogoutClick} />;
  } else {
    button = <LoginButton onClick={props.onLoginClick} />;
  }

  return (
    <div className="navbar">
      <h1>ticketbookingapp ✈️</h1>
      {button}
    </div>
  );
}

export default LoginControl;
