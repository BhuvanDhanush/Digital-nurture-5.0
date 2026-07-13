# cricketapp

This folder contains `src/App.js`, `src/components/ListofPlayers.js`, `src/components/IndianPlayers.js`, `src/index.js`, and `package.json` for the "cricketapp" lab (ES6 features: map, arrow functions, destructuring, spread/merge).

Since `create-react-app` generates a large scaffold (public/index.html, node_modules, config files, etc.) that isn't practical to hand-download, use one of the two options below to run this.

## Option A — Fastest: generate the app yourself, then drop in these files
```bash
npx create-react-app cricketapp
cd cricketapp
```
Then create a `components` folder inside `src`, copy `ListofPlayers.js` and `IndianPlayers.js` into it, and replace `src/App.js` with the `App.js` from this download.

Run it:
```bash
npm start
```
Open http://localhost:3000

## Option B — Use this folder directly
```bash
cd cricketapp-lab
npm install
npm start
```
(This will pull in `react-scripts` and generate the missing scaffold files like `public/index.html` automatically the first time you run `npm install` + `npm start`, or you can run `npx create-react-app .` inside this folder to complete the scaffold.)

## Folder structure
```
cricketapp-lab/
├── package.json
├── README.md
├── Concepts_and_Theory.md
└── src/
    ├── App.js
    ├── index.js
    └── components/
        ├── ListofPlayers.js
        └── IndianPlayers.js
```

## Switching between the two components
`App.js` uses a simple `flag` variable with `if...else` to decide which component to show:
```jsx
const flag = true;  // shows ListofPlayers
// const flag = false; // shows IndianPlayers
```
Change `flag` to `false` and save to see the `IndianPlayers` component instead.

## What this lab demonstrates
- **`ListofPlayers.js`** — an array of 11 players rendered with `map()`, plus a `filter()` call using an ES6 arrow function to show only players scoring below 70.
- **`IndianPlayers.js`** — ES6 **array destructuring** to split players into Odd Team / Even Team groups, and the ES6 **spread operator** (`[...arr1, ...arr2]`) to merge `T20players` and `RanjiTrophy` player arrays.

See `Concepts_and_Theory.md` for the full write-up of all lab objectives (ES6 features, `let` vs `var`, `const`, classes and inheritance, arrow functions, `Set`/`Map`, etc.).
