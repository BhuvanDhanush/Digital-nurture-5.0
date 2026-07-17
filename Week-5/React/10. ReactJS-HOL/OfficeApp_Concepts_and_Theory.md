# JSX in React — Concepts (Lab Theory)

## 1. What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript code. It's not valid JavaScript or HTML on its own — it's compiled ("transpiled") by tools like Babel into plain JavaScript function calls (specifically, `React.createElement()` calls) before it reaches the browser.

```jsx
const heading = <h1>Welcome to Office Space Rental</h1>;
```

JSX makes it much easier to visualize and write UI structure compared to manually calling `React.createElement()` for every element.

## 2. About ECMAScript

**ECMAScript (ES)** is the standardized specification that JavaScript is based on. Each yearly release (ES2015/ES6, ES2016, ES2017, …) adds new language features. React and JSX rely heavily on modern ECMAScript features such as `let`/`const`, arrow functions, classes, destructuring, template literals, and modules — all of which are supported in the create-react-app build pipeline via Babel, which transpiles modern ECMAScript (and JSX) down to code that runs in all supported browsers.

## 3. `React.createElement()`

Under the hood, every piece of JSX is converted into a call to `React.createElement(type, props, ...children)`, which returns a plain JavaScript object called a **React element** describing what should appear on the page.

```jsx
// JSX
const element = <h1 className="title">Hello</h1>;

// Compiles to:
const element = React.createElement('h1', { className: 'title' }, 'Hello');
```

React elements are lightweight descriptions of the UI — they are not actual DOM nodes. React uses them internally (via the Virtual DOM) to figure out what changes need to be made to the real DOM.

## 4. Creating React Nodes with JSX

JSX lets you build nested trees of elements and components just like nested HTML tags:

```jsx
function App() {
  return (
    <div>
      <h1>Office Space Rental</h1>
      <img src="office.jpg" alt="Office space" />
    </div>
  );
}
```

Each tag (`<div>`, `<h1>`, `<img>`, or a custom component like `<OfficeList />`) becomes a React element/node. JSX must return a single root element (or a fragment `<>...</>`) from a component.

## 5. Rendering JSX to the DOM

JSX elements are turned into real, visible DOM nodes using `ReactDOM.createRoot(...).render(...)`. This call takes the root React element (usually `<App />`) and mounts it into a real DOM node — typically `<div id="root"></div>` in `public/index.html`.

```jsx
// index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

From there, React manages updates to the DOM automatically whenever the component's state or props change, using the Virtual DOM diffing process.

## 6. Using JavaScript Expressions in JSX

Any valid JavaScript **expression** can be embedded inside JSX using curly braces `{ }` — variables, function calls, object properties, ternary expressions, and more.

```jsx
const office = { name: 'Skyline Business Hub', rent: 45000 };

<p>Name: {office.name}</p>
<p>Rent: {office.rent}</p>
<p>{office.rent < 60000 ? 'Affordable' : 'Premium'}</p>
```

Note that JSX only supports **expressions**, not statements — so you can't put an `if` statement directly inside `{ }`, but you can use a ternary operator, or compute the value beforehand and reference the variable.

## 7. Using Inline CSS in JSX

Inline styles in JSX are provided as a **JavaScript object**, passed to the `style` prop — not as a CSS string like in plain HTML. Property names are camelCased (e.g., `backgroundColor` instead of `background-color`).

```jsx
<span style={{ color: 'red', fontWeight: 'bold' }}>
  ₹45000
</span>
```

Inline styles are especially useful when a style needs to change dynamically based on data — for example, coloring rent values red or green depending on the amount.

---

# Hands-On Lab: Office Space Rental App (officespacerentalapp)

### Goal
Create a React app named **officespacerentalapp** that uses JSX to:
- Create an element for the page heading.
- Use an attribute (`src`) to display an office space image.
- Create a JavaScript object for a single office's details (Name, Rent, Address) and display it.
- Create a list of office objects and loop through them (using `map()`) to display more data.
- Apply inline CSS so the Rent is shown in **red** if it's below 60000, and **green** if it's 60000 or above.

### Prerequisites
- Node.js and NPM installed
- Visual Studio Code installed

### Steps

**1. Create the React project**
```bash
npx create-react-app officespacerentalapp
cd officespacerentalapp
code .
```

**2. Create `OfficeList.js`** in the `src` folder — loops through a list of office objects and applies conditional inline CSS to the rent:

```jsx
import React from 'react';

function OfficeList() {
  // A list of office space objects to loop through using JSX + JavaScript expressions
  const officeSpaces = [
    { id: 1, name: 'Skyline Business Hub', rent: 45000, address: '12 MG Road, Bengaluru' },
    { id: 2, name: 'Metro Corporate Tower', rent: 75000, address: '5th Avenue, Chennai' },
    { id: 3, name: 'Green Park Offices', rent: 58000, address: '221 Anna Salai, Chennai' },
    { id: 4, name: 'Riverside Tech Park', rent: 92000, address: '9 Marine Drive, Mumbai' }
  ];

  return (
    <div>
      <h2>Available Office Spaces</h2>
      <ul>
        {officeSpaces.map((office) => (
          // Inline CSS in JSX: rent is shown in red if below 60000, green otherwise
          <li key={office.id} style={{ marginBottom: '10px' }}>
            <strong>{office.name}</strong> — {office.address} —{' '}
            <span
              style={{
                color: office.rent < 60000 ? 'red' : 'green',
                fontWeight: 'bold'
              }}
            >
              &#8377;{office.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfficeList;
```

**3. Edit `App.js`** to create the heading, image, and a single office's details, and render `OfficeList`:

```jsx
import React from 'react';
import OfficeList from './OfficeList';

function App() {
  // A single office object with details: Name, Rent, and Address
  const office = {
    name: 'Skyline Business Hub',
    rent: 45000,
    address: '12 MG Road, Bengaluru',
    image: 'https://placehold.co/400x250?text=Office+Space'
  };

  return (
    <div className="App">
      {/* JSX element to display the heading of the page */}
      <h1>Office Space Rental</h1>

      {/* JSX attribute (src) to display the image of the office space */}
      <img src={office.image} alt="Office space" width="400" />

      {/* Using a JavaScript object and expressions inside JSX to display its details */}
      <div style={{ marginTop: '20px' }}>
        <h2>Featured Office</h2>
        <p><strong>Name:</strong> {office.name}</p>
        <p><strong>Address:</strong> {office.address}</p>
        <p>
          <strong>Rent:</strong>{' '}
          {/* Inline CSS in JSX: red if rent is below 60000, green if 60000 or above */}
          <span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
            &#8377;{office.rent}
          </span>
        </p>
      </div>

      {/* Rendering a list of office objects by looping through an array */}
      <OfficeList />
    </div>
  );
}

export default App;
```

**4. Run the application**
```bash
npm start
```

**5. View the result**

Open your browser and go to `http://localhost:3000`. You should see:
- The page heading "Office Space Rental".
- A placeholder office image.
- The featured office's Name, Address, and Rent — with the Rent value colored **red** (₹45000 is below 60000).
- A list of four office spaces below, each with its Rent colored **red** (if below 60000) or **green** (if 60000 or above).
