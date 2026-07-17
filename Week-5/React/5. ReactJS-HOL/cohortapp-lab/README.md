# cohortapp

This folder contains `src/App.js`, `src/CohortDetails.js`, `src/CohortDetails.module.css`, `src/index.js`, and `package.json` for the "cohortapp" lab (styling React components with CSS Modules and inline styles).

Since `create-react-app` generates a large scaffold (public/index.html, node_modules, config files, etc.) that isn't practical to hand-download, use one of the two options below to run this.

## Option A — Fastest: generate the app yourself, then drop in these files
```bash
npx create-react-app cohortapp
cd cohortapp
```
Then copy `CohortDetails.js` and `CohortDetails.module.css` into `src/`, and replace `src/App.js` with the `App.js` from this download.

Run it:
```bash
npm start
```
Open http://localhost:3000

## Option B — Use this folder directly
```bash
cd cohortapp-lab
npm install
npm start
```
(This will pull in `react-scripts` and generate the missing scaffold files like `public/index.html` automatically the first time you run `npm install` + `npm start`, or you can run `npx create-react-app .` inside this folder to complete the scaffold.)

## Folder structure
```
cohortapp-lab/
├── package.json
├── README.md
├── Concepts_and_Theory.md
└── src/
    ├── App.js
    ├── index.js
    ├── CohortDetails.js
    └── CohortDetails.module.css
```

## What this lab demonstrates
- **CSS Module** (`CohortDetails.module.css`) — the `.box` class is scoped locally to `CohortDetails`, so it can never collide with a `.box` class defined elsewhere in the app.
- **Tag selector** — `dt { font-weight: 500; }` styles all `<dt>` elements the normal (global) CSS way, even inside a CSS Module file.
- **`className`** — used to apply the CSS Module's `box` class to the container `div`.
- **Inline `style`** — used to dynamically color the `<h3>` title green when a cohort's status is "Ongoing", and blue otherwise.

See `Concepts_and_Theory.md` for the full write-up of all lab objectives.
