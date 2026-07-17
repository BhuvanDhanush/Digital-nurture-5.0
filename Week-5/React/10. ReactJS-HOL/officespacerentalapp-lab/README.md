# officespacerentalapp

This folder contains `src/App.js`, `src/OfficeList.js`, `src/index.js`, and `package.json` for the "officespacerentalapp" lab (JSX elements, attributes, objects, lists, and inline CSS).

Since `create-react-app` generates a large scaffold (public/index.html, node_modules, config files, etc.) that isn't practical to hand-download, use one of the two options below to run this.

## Option A — Fastest: generate the app yourself, then drop in these files
```bash
npx create-react-app officespacerentalapp
cd officespacerentalapp
```
Then copy `OfficeList.js` into `src/`, and replace `src/App.js` with the `App.js` from this download.

Run it:
```bash
npm start
```
Open http://localhost:3000

## Option B — Use this folder directly
```bash
cd officespacerentalapp-lab
npm install
npm start
```
(This will pull in `react-scripts` and generate the missing scaffold files like `public/index.html` automatically the first time you run `npm install` + `npm start`, or you can run `npx create-react-app .` inside this folder to complete the scaffold.)

## Folder structure
```
officespacerentalapp-lab/
├── package.json
├── README.md
├── Concepts_and_Theory.md
└── src/
    ├── App.js
    ├── index.js
    └── OfficeList.js
```

## What this lab demonstrates
- **JSX element** — `<h1>Office Space Rental</h1>` for the page heading.
- **JSX attribute** — `<img src={office.image} alt="Office space" />` to display the office image.
- **JavaScript object + expressions in JSX** — the `office` object's `name`, `rent`, and `address` displayed via `{office.name}`, etc.
- **List rendering** — `officeSpaces.map(...)` in `OfficeList.js` loops through an array of office objects.
- **Inline CSS in JSX** — `style={{ color: office.rent < 60000 ? 'red' : 'green' }}` colors the rent red below ₹60,000 and green at or above it.

See `Concepts_and_Theory.md` for the full write-up of all lab objectives (JSX, ECMAScript, `React.createElement()`, rendering to the DOM, JS expressions in JSX, inline CSS, etc.).
