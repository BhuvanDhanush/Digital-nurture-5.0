# myfirstreact

This folder contains the `App.js`, `index.js`, and `package.json` for the "myfirstreact" lab.

Since `create-react-app` generates a large scaffold (public/index.html, node_modules, config files, etc.) that isn't practical to hand-download, use one of the two options below to run this.

## Option A — Fastest: generate the app yourself, then drop in these files
```bash
npx create-react-app myfirstreact
cd myfirstreact
```
Then replace `src/App.js` with the `App.js` from this download, and run:
```bash
npm start
```
Open http://localhost:3000

## Option B — Use this folder directly
```bash
cd myfirstreact-lab
npm install
npm start
```
(This will pull in `react-scripts` and generate the missing scaffold files like `public/index.html` automatically the first time you run `npm install` + `npm start`, or you can run `npx create-react-app .` inside this folder to complete the scaffold.)

See `Concepts_and_Theory.md` for the full write-up of all lab objectives (SPA, MPA, React, Virtual DOM, Features of React, etc.).
