# StudentApp

This folder contains the `src/App.js`, `src/components/Home.js`, `src/components/About.js`, `src/components/Contact.js`, `src/index.js`, and `package.json` for the "StudentApp" lab (Student Management Portal).

Since `create-react-app` generates a large scaffold (public/index.html, node_modules, config files, etc.) that isn't practical to hand-download, use one of the two options below to run this.

## Option A — Fastest: generate the app yourself, then drop in these files
```bash
npx create-react-app StudentApp
cd StudentApp
```
Then:
1. Create a `components` folder inside `src`.
2. Copy `Home.js`, `About.js`, and `Contact.js` from this download into `src/components/`.
3. Replace `src/App.js` with the `App.js` from this download.

Run it:
```bash
npm start
```
Open http://localhost:3000

## Option B — Use this folder directly
```bash
cd studentapp-lab
npm install
npm start
```
(This will pull in `react-scripts` and generate the missing scaffold files like `public/index.html` automatically the first time you run `npm install` + `npm start`, or you can run `npx create-react-app .` inside this folder to complete the scaffold.)

## Folder structure
```
studentapp-lab/
├── package.json
├── README.md
├── Concepts_and_Theory.md
└── src/
    ├── App.js
    ├── index.js
    └── components/
        ├── Home.js
        ├── About.js
        └── Contact.js
```

See `Concepts_and_Theory.md` for the full write-up of all lab objectives (React components, class vs function components, constructor, render(), etc.).
