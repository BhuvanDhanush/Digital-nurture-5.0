import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Bhuvan Dhanush"
        school="Vignana Deepthi English Medium School"
        total={600}
        goal={6}
      />
    </div>
  );
}

export default App;
