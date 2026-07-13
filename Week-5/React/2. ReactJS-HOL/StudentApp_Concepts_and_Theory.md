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

A **function component** is a plain JavaScript function that accepts `props` as an argument and returns JSX. It is simpler to write and, with Hooks, can do everything a class component can (manage state, run side effects, etc.).

```jsx
function Greeting(props) {
  return <h1>Hello from a function component!</h1>;
}

export default Greeting;
```

## 6. Component Constructor

The **constructor** is a special method of a class component, automatically called before the component is mounted. It is typically used to:
- Call `super(props)` so that `this.props` is initialized correctly.
- Initialize local state (`this.state = { ... }`).
- Bind event handler methods to `this`.

```jsx
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

If a component doesn't need to initialize state or bind methods, the constructor can be omitted entirely.

## 7. The render() Function

The **render() function** is required in every class component. React calls it whenever the component needs to be displayed or updated, and it must return the JSX (React elements) describing what should appear on the screen. It should be a pure function of `props` and `state` — it should not modify state or interact with the browser directly.

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

# Hands-On Lab: Student Management Portal (StudentApp)

### Goal
Create a React app named **StudentApp** with three components:
- **Home** → displays "Welcome to the Home page of Student Management Portal"
- **About** → displays "Welcome to the About page of the Student Management Portal"
- **Contact** → displays "Welcome to the Contact page of the Student Management Portal"

All three components are rendered together from `App.js`.

### Prerequisites
- Node.js and NPM installed
- Visual Studio Code installed

### Steps

**1. Create the React project**
```bash
npx create-react-app StudentApp
```

**2. Navigate into the project and open it in VS Code**
```bash
cd StudentApp
code .
```

**3. Create a new folder under `src` named `components`, and inside it add `Home.js`**

Path: `src/components/Home.js`

```jsx
import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Home page of Student Management Portal</h1>
      </div>
    );
  }
}

export default Home;
```

**4. Add `About.js`**

Path: `src/components/About.js`

```jsx
import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to the About page of the Student Management Portal</h1>
      </div>
    );
  }
}

export default About;
```

**5. Add `Contact.js`**

Path: `src/components/Contact.js`

```jsx
import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Contact page of the Student Management Portal</h1>
      </div>
    );
  }
}

export default Contact;
```

**6. Edit `App.js`** to import and render all three components:

```jsx
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
```

**7. Run the application**

In the terminal, inside the `StudentApp` folder:
```bash
npm start
```

**8. View the app**

Open your browser and go to:
```
http://localhost:3000
```

You should see all three messages displayed one below the other:
- Welcome to the Home page of Student Management Portal
- Welcome to the About page of the Student Management Portal
- Welcome to the Contact page of the Student Management Portal
