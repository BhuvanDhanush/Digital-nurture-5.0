# React Components — Concepts (Lab Theory)

## 1. What is a React Component?

A **component** is an independent, reusable piece of UI that describes what should appear on the screen. Components accept inputs (called **props**) and return React elements (JSX) describing the UI. A React application is essentially a tree of components, each responsible for rendering one part of the page, which are composed together to build the full user interface.

## 2. Components vs JavaScript Functions

A component *can* be written as a plain JavaScript function (a "function component"), so the two overlap — but a component is more than an ordinary function:

| Aspect | Regular JavaScript Function | React Component |
|---|---|---|
| Return value | Any value (number, string, object, etc.) | JSX / React elements describing UI |
| Invocation | Called directly, e.g. `myFunction()` | Rendered as a tag, e.g. `<MyComponent />` |
| Inputs | Ordinary parameters | `props` object passed by React |
| Re-execution | Runs once when called | Re-runs ("re-renders") automatically whenever its props or state change |
| State | No built-in concept of state | Can hold and manage its own state (via `this.state` or `useState`) |
| Lifecycle | No lifecycle | Has a lifecycle (mounting, updating, unmounting) that React manages |
| Naming convention | camelCase | PascalCase (capitalized), required so JSX can distinguish it from an HTML tag |

In short: every component is implemented using JavaScript functions (or classes), but not every function is a component — a component specifically returns renderable UI and is managed by React's rendering and lifecycle system.

## 3. Types of Components

React has two main types of components:

1. **Class Components** — ES6 classes that extend `React.Component` and must implement a `render()` method.
2. **Function Components** — plain JavaScript functions that accept `props` and return JSX. Modern React apps mostly use function components, especially combined with **Hooks** (`useState`, `useEffect`, etc.) to manage state and side effects.

## 4. Class Component

A **class component** is defined using an ES6 class that extends `React.Component`. It must define a `render()` method that returns the JSX to display. Class components can hold local state (`this.state`) and use lifecycle methods such as `componentDidMount()`.

```jsx
import React, { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hello from a class component!</h1>;
  }
}

export default Greeting;
```

## 5. Function Component

A **function component** is a plain JavaScript function that accepts `props` as an argument and returns JSX. It is simpler to write and, with Hooks, can do everything a class component can (manage state, run side effects, etc.). Function components are the recommended, modern way to write React components.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

## 6. Component Constructor

The **constructor** is a special method of a class component, automatically called before the component is mounted. It is typically used to:
- Call `super(props)` so that `this.props` is initialized correctly.
- Initialize local state (`this.state = { ... }`).
- Bind event handler methods to `this`.

Function components do not have a constructor — instead, they receive `props` directly as a function argument, and use Hooks like `useState` to manage local state.

```jsx
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

## 7. The render() Function

The **render() function** is required in every class component. React calls it whenever the component needs to be displayed or updated, and it must return the JSX (React elements) describing what should appear on the screen. It should be a pure function of `props` and `state`.

A function component doesn't have a separate `render()` method — the function body itself plays that role: whatever JSX it returns is what gets rendered.

```jsx
render() {
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
}
```

---

# Hands-On Lab: Score Calculator (scorecalculatorapp)

### Goal
Create a React app named **scorecalculatorapp** with a **function component** named `CalculateScore` that:
- Accepts `Name`, `School`, `Total`, and `Goal` as props.
- Calculates the student's average score (`Total ÷ Goal`).
- Displays the Name, School, Total, Goal, and calculated Average.
- Applies CSS styling to the component.

### Prerequisites
- Node.js and NPM installed
- Visual Studio Code installed

### Steps

**1. Create the React project**
```bash
npx create-react-app scorecalculatorapp
```

**2. Navigate into the project and open it in VS Code**
```bash
cd scorecalculatorapp
code .
```

**3. Create a new folder under `src` named `components`, and inside it add `CalculateScore.js`**

Path: `src/components/CalculateScore.js`

```jsx
import React from 'react';
import '../stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = (total / goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student Score Calculator</h2>
      <p><span className="label">Name:</span> {name}</p>
      <p><span className="label">School:</span> {school}</p>
      <p><span className="label">Total Marks:</span> {total}</p>
      <p><span className="label">Goal (No. of Subjects):</span> {goal}</p>
      <p className="average"><span className="label">Average Score:</span> {average}</p>
    </div>
  );
}

export default CalculateScore;
```

**4. Create a folder named `stylesheets` under `src`, and add `mystyle.css`**

Path: `src/stylesheets/mystyle.css`

```css
.score-card {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px 30px;
  border: 2px solid #4a90e2;
  border-radius: 10px;
  background-color: #f4f8fd;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.score-card h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

.score-card p {
  font-size: 16px;
  margin: 8px 0;
  color: #333;
}

.label {
  font-weight: bold;
  color: #4a90e2;
  margin-right: 6px;
}

.average {
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #27ae60;
  text-align: center;
}
```

**5. Edit `App.js`** to import and invoke the `CalculateScore` component, passing in the required props:

```jsx
import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="John Doe"
        school="Green Valley High School"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;
```

**6. Run the application**

In the terminal, inside the `scorecalculatorapp` folder:
```bash
npm start
```

**7. View the app**

Open your browser and go to:
```
http://localhost:3000
```

You should see a styled card showing the student's Name, School, Total Marks, Goal, and calculated Average Score (450 ÷ 5 = 90.00).
