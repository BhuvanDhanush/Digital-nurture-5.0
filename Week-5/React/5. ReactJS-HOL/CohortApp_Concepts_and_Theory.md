# Styling React Components — Concepts (Lab Theory)

## 1. The Need for Styling React Components

React only handles the structure and behavior of the UI — it doesn't automatically make anything look good. Just like regular HTML, React components need CSS to control layout, colors, fonts, spacing, and visual states (e.g., highlighting an "ongoing" item differently from a "completed" one).

Styling in React can get tricky in larger apps because plain, global CSS class names can clash between components (two components might both define a class called `.box` with different rules, and one would silently override the other). React offers several approaches to avoid this problem:

- **Global CSS** — a single `.css` file imported once, shared by the whole app (simple, but class names can collide).
- **Inline styles** — a JavaScript object passed to the `style` prop, scoped to that one element (great for dynamic, data-driven styles, but can't use pseudo-classes/media queries).
- **CSS Modules** — CSS files scoped locally to the component that imports them (avoids naming collisions, still lets you use full CSS features).
- **CSS-in-JS libraries** (styled-components, Emotion, etc.) — write CSS directly inside JavaScript, scoped automatically.

## 2. Working with CSS Modules

A **CSS Module** is a regular CSS file whose class names are automatically scoped locally to the component that imports it, instead of leaking into the global namespace. Create React App supports this out of the box — any file named `*.module.css` is treated as a CSS Module.

```css
/* CohortDetails.module.css */
.box {
  width: 300px;
  border: 1px solid black;
}
```

```jsx
import styles from './CohortDetails.module.css';

function CohortDetails() {
  return <div className={styles.box}>...</div>;
}
```

Behind the scenes, the build tool renames `.box` to something unique (like `.box__2ab3F`), so it can never accidentally collide with a `.box` class defined in another component's module.

CSS Modules still support **tag/element selectors** (like `dt { ... }`), which apply globally the normal CSS way — only *class* selectors get the automatic local scoping.

## 3. Inline Styles and the `style` Prop

React elements accept a `style` prop, which takes a **JavaScript object** (not a CSS string). Property names are camelCased (`backgroundColor` instead of `background-color`), and values are usually strings.

```jsx
<h3 style={{ color: 'green' }}>Ongoing Cohort</h3>
```

Inline styles are ideal when the style needs to change based on data or component state at runtime — for example, choosing a font color depending on a cohort's status.

## 4. Applying Styles with `className` and `style`

- **`className`** — used to apply CSS classes (whether from a global stylesheet or a CSS Module) to an element, the React equivalent of HTML's `class` attribute.
- **`style`** — used to apply one-off, dynamic inline styles directly as a JS object, computed at render time.

Both can be used together on the same element: `className` for static, reusable styling, and `style` for small dynamic overrides.

```jsx
<div className={styles.box}>
  <h3 style={{ color: titleColor }}>{name}</h3>
</div>
```

---

# Hands-On Lab: Styling the Cohort Dashboard (cohortapp)

### Scenario
My Academy team at Cognizant wants a dashboard showing details of ongoing and completed cohorts. A React app with a `CohortDetails` component already renders the cohort data — your task is to style it.

### Prerequisites
- Node.js and NPM installed
- Visual Studio Code installed

### Steps

**1–4. Set up the project**
```bash
npx create-react-app cohortapp
cd cohortapp
npm install
code .
```

**5. Create the CSS Module** — add a new file `src/CohortDetails.module.css`.

**6. Define the `.box` class** with the required properties:

```css
.box {
  width: 300px;
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
}
```

**7. Style the `<dt>` element using a tag selector**, setting its font weight to 500:

```css
dt {
  font-weight: 500;
}
```

Full file — `src/CohortDetails.module.css`:

```css
.box {
  width: 300px;
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
}

dt {
  font-weight: 500;
}
```

**8. Open `CohortDetails.js` and import the CSS Module:**

```jsx
import styles from './CohortDetails.module.css';
```

**9. Apply the `box` class to the container `div`:**

```jsx
<div className={styles.box}>
```

**10. Style the `<h3>` element** so the title is **green** when the cohort's status is "ongoing", and **blue** in every other case:

```jsx
const titleColor = status.toLowerCase() === 'ongoing' ? 'green' : 'blue';

<h3 style={{ color: titleColor }}>{name}</h3>
```

Full file — `src/CohortDetails.js`:

```jsx
import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { name, status, startDate, endDate } = props;

  // "ongoing" cohorts are highlighted green, everything else (e.g. "completed") is blue
  const titleColor = status.toLowerCase() === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: titleColor }}>{name}</h3>
      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>

        <dt>Start Date</dt>
        <dd>{startDate}</dd>

        <dt>End Date</dt>
        <dd>{endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
```

**`App.js`** renders a list of cohorts, each as a `CohortDetails` card:

```jsx
import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { id: 1, name: 'React Fundamentals', status: 'Ongoing', startDate: '01-Jun-2026', endDate: '30-Jul-2026' },
  { id: 2, name: 'Java Full Stack', status: 'Completed', startDate: '01-Jan-2026', endDate: '31-Mar-2026' },
  { id: 3, name: 'Data Engineering', status: 'Ongoing', startDate: '15-Jun-2026', endDate: '15-Sep-2026' },
  { id: 4, name: 'Cloud DevOps', status: 'Completed', startDate: '01-Oct-2025', endDate: '31-Dec-2025' }
];

function App() {
  return (
    <div className="App">
      <h1>My Academy — Cohort Dashboard</h1>
      {cohorts.map((cohort) => (
        <CohortDetails
          key={cohort.id}
          name={cohort.name}
          status={cohort.status}
          startDate={cohort.startDate}
          endDate={cohort.endDate}
        />
      ))}
    </div>
  );
}

export default App;
```

**11. Run the application**
```bash
npm start
```

**12. View the result**

Open your browser and go to `http://localhost:3000`. You should see a row of bordered, rounded boxes — one per cohort — each 300px wide with 10px margin and 10px/20px padding. Each box's `<dt>` labels (Status, Start Date, End Date) appear bold (font-weight 500), and the cohort name at the top is shown in **green** for "Ongoing" cohorts and **blue** for "Completed" ones.
