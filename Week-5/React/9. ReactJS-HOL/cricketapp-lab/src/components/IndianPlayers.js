import React from 'react';

function IndianPlayers() {
  // ---- a. Odd Team Players and Even Team Players using ES6 Destructuring ----
  const players = [
    'Rohit Sharma',
    'King Virat Kohli',
    'Rishabh Pant',
    'Ravindra Jadeja',
    'Bhuvneshwar Kumar',
    'Kuldeep Yadav'
  ];

  // Destructuring the players array into individual variables
  const [player1, player2, player3, player4, player5, player6] = players;

  // Grouping the destructured variables into Odd Team and Even Team
  const oddTeamPlayers = [player1, player3, player5];
  const evenTeamPlayers = [player2, player4, player6];

  // ---- b. Merging T20players and RanjiTrophy players using the ES6 spread/merge feature ----
  const t20Players = ['Suryakumar Yadav', 'Ishan Kishan', 'Arshdeep Singh'];
  const ranjiTrophyPlayers = ['Sarfaraz Khan', 'Shubman Gill', 'Mukesh Kumar'];

  // Merging the two arrays using the ES6 spread operator
  const allSelectedPlayers = [...t20Players, ...ranjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>T20 & Ranji Trophy Players (Merged)</h2>
      <ul>
        {allSelectedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
