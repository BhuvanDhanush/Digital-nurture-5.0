import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  // Change this flag to false to display the IndianPlayers component instead
  const flag = true;

  let content;

  if (flag) {
    content = <ListofPlayers />;
  } else {
    content = <IndianPlayers />;
  }

  return (
    <div className="App">
      <h1>Cricket App</h1>
      {content}
    </div>
  );
}

export default App;
