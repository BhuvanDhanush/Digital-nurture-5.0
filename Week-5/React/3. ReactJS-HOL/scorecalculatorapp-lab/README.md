# scorecalculatorapp

This folder contains `src/App.js`, `src/components/CalculateScore.js`, `src/stylesheets/mystyle.css`, `src/index.js`, and `package.json` for the "scorecalculatorapp" lab (Student Score Calculator).

Since `create-react-app` generates a large scaffold (public/index.html, node_modules, config files, etc.) that isn't practical to hand-download, use one of the two options below to run this.

## Option A — Fastest: generate the app yourself, then drop in these files
```bash
npx create-react-app scorecalculatorapp
cd scorecalculatorapp
```
Then:
1. Create a `components` folder inside `src`, and copy `CalculateScore.js` into it.
2. Create a `stylesheets` folder inside `src`, and copy `mystyle.css` into it.
3. Replace `src/App.js` with the `App.js` from this download.

Run it:
```bash
npm start
```
Open http://localhost:3000

## Option B — Use this folder directly
```bash
cd scorecalculatorapp-lab
npm install
npm start
```
(This will pull in `react-scripts` and generate the missing scaffold files like `public/index.html` automatically the first time you run `npm install` + `npm start`, or you can run `npx create-react-app .` inside this folder to complete the scaffold.)

## Folder structure
```
scorecalculatorapp-lab/
├── package.json
├── README.md
├── Concepts_and_Theory.md
└── src/
    ├── App.js
    ├── index.js
    ├── components/
    │   └── CalculateScore.js
    └── stylesheets/
        └── mystyle.css
```

## Customizing the values
`CalculateScore` is a function component that accepts four props: `name`, `school`, `total`, and `goal`. To try different students, just change the props passed in `App.js`:
```jsx
<CalculateScore name="Jane Smith" school="Sunrise Academy" total={380} goal={5} />
```

See `Concepts_and_Theory.md` for the full write-up of all lab objectives (React components, class vs function components, constructor, render(), styling, etc.).
