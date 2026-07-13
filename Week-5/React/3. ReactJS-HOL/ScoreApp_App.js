import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="John Doe"
        school="Green Valley High School"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;
