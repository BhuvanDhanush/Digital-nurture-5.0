import React from 'react';

function ListofPlayers() {
  // Array of 11 players with their names and scores
  const players = [
    { name: 'Rohit Sharma', score: 85 },
    { name: 'Shikhar Dhawan', score: 45 },
    { name: 'Virat Kohli', score: 92 },
    { name: 'Shreyas Iyer', score: 60 },
    { name: 'Rishabh Pant', score: 55 },
    { name: 'Hardik Pandya', score: 40 },
    { name: 'Ravindra Jadeja', score: 30 },
    { name: 'MS Dhoni', score: 75 },
    { name: 'Bhuvneshwar Kumar', score: 15 },
    { name: 'Jasprit Bumrah', score: 10 },
    { name: 'Kuldeep Yadav', score: 65 }
  ];

  // Using the map() feature of ES6 to display name and score of every player
  const allPlayers = players.map((player, index) => (
    <li key={index}>
      {player.name} - {player.score}
    </li>
  ));

  // Using an ES6 arrow function with filter() to get players with a score below 70
  const lowScorePlayers = players
    .filter((player) => player.score < 70)
    .map((player, index) => (
      <li key={index}>
        {player.name} - {player.score}
      </li>
    ));

  return (
    <div>
      <h2>List of Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with Score Below 70</h2>
      <ul>{lowScorePlayers}</ul>
    </div>
  );
}

export default ListofPlayers;
