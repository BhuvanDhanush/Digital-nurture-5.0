# ES6 Features — Concepts (Lab Theory)

## 1. Features of ES6

ES6 (ECMAScript 2015) introduced many features that make JavaScript — and React code written in JavaScript — cleaner and more powerful:

- `let` and `const` for block-scoped variable declarations
- Arrow functions (`=>`)
- Classes (`class`, `extends`, `super`)
- Template literals (`` `Hello ${name}` ``)
- Destructuring (arrays and objects)
- Default parameters
- Spread (`...`) and rest operators
- Enhanced array methods: `map()`, `filter()`, `reduce()`, `find()`, etc.
- Modules (`import` / `export`)
- Promises for asynchronous code
- New collection types: `Set` and `Map`

## 2. JavaScript `let`

`let` declares a **block-scoped** variable — it only exists within the nearest enclosing `{ }` block (a function, loop, or `if` statement), rather than the whole function. It also cannot be re-declared in the same scope, and unlike `var`, it is not hoisted with an initial value (accessing it before declaration causes a "temporal dead zone" error rather than returning `undefined`).

```js
if (true) {
  let x = 10;
  console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined
```

## 3. Differences Between `var` and `let`

| Aspect | `var` | `let` |
|---|---|---|
| Scope | Function-scoped | Block-scoped (`{ }`) |
| Re-declaration | Allowed in the same scope | Not allowed in the same scope |
| Hoisting | Hoisted and initialized as `undefined` | Hoisted but not initialized ("temporal dead zone") |
| Global object property | Becomes a property of `window` (in browsers) | Does not become a property of `window` |
| Common issue | Can leak out of loops/blocks, causing bugs | Stays contained to the block, safer for loops and conditionals |

## 4. JavaScript `const`

`const` also declares a **block-scoped** variable, like `let`, but it must be initialized at declaration and cannot be reassigned afterward. Note that for objects and arrays, `const` prevents reassigning the variable itself, but the contents of the object/array can still be mutated (e.g., pushing to a `const` array is allowed).

```js
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable

const numbers = [1, 2, 3];
numbers.push(4); // allowed — the array contents can change
```

## 5. ES6 Class Fundamentals

ES6 introduced the `class` keyword as syntactic sugar over JavaScript's existing prototype-based inheritance, making object-oriented code easier to read and write.

```js
class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  displayInfo() {
    return `${this.name}: ${this.score}`;
  }
}

const p1 = new Player('Rohit Sharma', 85);
console.log(p1.displayInfo()); // "Rohit Sharma: 85"
```

## 6. ES6 Class Inheritance

A class can **inherit** from another class using `extends`, gaining access to its parent's properties and methods. The `super()` call inside the constructor invokes the parent class's constructor.

```js
class BowlingPlayer extends Player {
  constructor(name, score, wickets) {
    super(name, score); // calls Player's constructor
    this.wickets = wickets;
  }

  displayInfo() {
    return `${super.displayInfo()}, Wickets: ${this.wickets}`;
  }
}

const bowler = new BowlingPlayer('Jasprit Bumrah', 10, 3);
console.log(bowler.displayInfo()); // "Jasprit Bumrah: 10, Wickets: 3"
```

## 7. ES6 Arrow Functions

Arrow functions provide a shorter syntax for writing functions and do not have their own `this` binding — they inherit `this` from the surrounding scope, which is especially useful inside class methods and callbacks like `map()`/`filter()`.

```js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function equivalent
const add = (a, b) => a + b;

// Used as a callback with filter()
const lowScores = players.filter((player) => player.score < 70);
```

## 8. `Set()` and `Map()`

ES6 introduced two new built-in collection types:

- **`Set`** — stores a collection of **unique values** of any type (no duplicates allowed).
  ```js
  const uniqueScores = new Set([85, 45, 85, 92, 45]);
  console.log(uniqueScores); // Set(3) {85, 45, 92}
  ```

- **`Map`** — stores **key-value pairs**, where keys can be of any type (unlike plain objects, which only allow string/symbol keys), and it preserves insertion order.
  ```js
  const playerScores = new Map();
  playerScores.set('Rohit Sharma', 85);
  playerScores.set('Virat Kohli', 92);
  console.log(playerScores.get('Virat Kohli')); // 92
  ```

Note: The array method `Array.prototype.map()` (used to transform array elements, e.g. `players.map(p => p.name)`) is unrelated to the `Map` collection type, though they share a name — both are used extensively in this lab.

---

# Hands-On Lab: Cricket App (cricketapp)

### Goal
Create a React app named **cricketapp** with two components — `ListofPlayers` and `IndianPlayers` — demonstrating ES6 features (`map()`, arrow functions, destructuring, and array merging). Toggle between the two components on the home page using a simple `flag` variable and an `if...else` statement.

### Prerequisites
- Node.js and NPM installed
- Visual Studio Code installed

### Steps

**1. Create the React project**
```bash
npx create-react-app cricketapp
cd cricketapp
code .
```

**2. Create a `components` folder under `src`, and add `ListofPlayers.js`**

- Declares an array of 11 players with names and scores.
- Uses `map()` to render every player's name and score.
- Uses `filter()` with an ES6 arrow function to display only players with a score below 70.

```jsx
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
```

**3. Add `IndianPlayers.js`**

- **(a)** Uses ES6 **array destructuring** to split a players array into `oddTeamPlayers` and `evenTeamPlayers`.
- **(b)** Declares `T20players` and `RanjiTrophy` player arrays, and **merges** them using the ES6 spread operator.

```jsx
import React from 'react';

function IndianPlayers() {
  // ---- a. Odd Team Players and Even Team Players using ES6 Destructuring ----
  const players = [
    'Rohit Sharma',
    'Virat Kohli',
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
```

**4. Edit `App.js`** to display either `ListofPlayers` or `IndianPlayers` based on a `flag` variable, using a simple `if...else`:

```jsx
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
```

**5. Run the application**
```bash
npm start
```

**6. View the result**

Open your browser and go to `http://localhost:3000`.

- **When `flag = true`:** the page shows the `ListofPlayers` component — the full list of 11 players with their scores, followed by the filtered list of players scoring below 70.
- **When `flag = false`:** the page shows the `IndianPlayers` component — the Odd Team and Even Team player lists (built via destructuring), followed by the merged list of T20 and Ranji Trophy players (built via the spread operator).

To switch views, simply change `const flag = true;` to `const flag = false;` in `App.js` and save — the page will hot-reload automatically.
