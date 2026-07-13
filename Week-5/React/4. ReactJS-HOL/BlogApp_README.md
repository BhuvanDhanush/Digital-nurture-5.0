# blogapp

This folder contains `src/App.js`, `src/Post.js`, `src/Posts.js`, `src/index.js`, and `package.json` for the "blogapp" lab (component lifecycle hooks).

Since `create-react-app` generates a large scaffold (public/index.html, node_modules, config files, etc.) that isn't practical to hand-download, use one of the two options below to run this.

## Option A — Fastest: generate the app yourself, then drop in these files
```bash
npx create-react-app blogapp
cd blogapp
```
Then copy `Post.js` and `Posts.js` into `src/`, and replace `src/App.js` with the `App.js` from this download.

Run it:
```bash
npm start
```
Open http://localhost:3000

## Option B — Use this folder directly
```bash
cd blogapp-lab
npm install
npm start
```
(This will pull in `react-scripts` and generate the missing scaffold files like `public/index.html` automatically the first time you run `npm install` + `npm start`, or you can run `npx create-react-app .` inside this folder to complete the scaffold.)

## Folder structure
```
blogapp-lab/
├── package.json
├── README.md
├── Concepts_and_Theory.md
└── src/
    ├── App.js
    ├── index.js
    ├── Post.js
    └── Posts.js
```

## What this lab demonstrates
- **`componentDidMount()`** — fetches posts from `https://jsonplaceholder.typicode.com/posts` right after the `Posts` component mounts.
- **`componentDidCatch()`** — catches any rendering errors in the `Posts` component tree and shows them as an alert, falling back to a friendly message instead of crashing.

See `Concepts_and_Theory.md` for the full write-up of all lab objectives (need/benefits of the component lifecycle, lifecycle hook methods, and the rendering sequence).
