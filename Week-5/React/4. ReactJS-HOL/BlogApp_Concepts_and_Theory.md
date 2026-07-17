# React Component Lifecycle — Concepts (Lab Theory)

## 1. Need and Benefits of the Component Lifecycle

Every React class component goes through a series of phases from the moment it is created to the moment it is removed from the page — this is called its **lifecycle**. React exposes special methods, called **lifecycle hooks** (or lifecycle methods), that let you run code at specific points in that lifecycle.

**Why the lifecycle matters:**
- It lets you run setup code (like fetching data from an API) at exactly the right moment — after the component is visible on the page.
- It lets you clean up resources (timers, subscriptions, event listeners) before a component is removed, preventing memory leaks.
- It lets you respond to changes in props or state and re-run logic only when needed.
- It lets you catch and gracefully handle errors that occur while rendering, so one broken component doesn't crash the whole app.

**Benefits:**
- Predictable place to put data-fetching, subscriptions, and DOM measurements.
- Fine-grained control over performance (e.g., skipping unnecessary re-renders).
- Centralized error handling with `componentDidCatch()`.
- Easier debugging, since you know exactly when each piece of logic runs.

## 2. Lifecycle Hook Methods

React class components have three main lifecycle phases, each with its own hook methods:

### Mounting (component is being created and inserted into the DOM)
- `constructor(props)` — initializes state and binds methods.
- `static getDerivedStateFromProps(props, state)` — rarely used; syncs state to props before rendering.
- `render()` — returns the JSX to display.
- `componentDidMount()` — called once, immediately after the component is added to the DOM. Ideal for API calls, subscriptions, and DOM-dependent setup.

### Updating (component re-renders due to changed props or state)
- `static getDerivedStateFromProps(props, state)`
- `shouldComponentUpdate(nextProps, nextState)` — lets you optimize by skipping re-renders.
- `render()`
- `getSnapshotBeforeUpdate(prevProps, prevState)`
- `componentDidUpdate(prevProps, prevState)` — called after re-rendering; useful for reacting to prop/state changes.

### Unmounting (component is being removed from the DOM)
- `componentWillUnmount()` — used to clean up timers, subscriptions, and listeners.

### Error Handling
- `componentDidCatch(error, info)` — catches JavaScript errors thrown anywhere in the component's child tree during rendering, allowing you to log the error and display a fallback UI instead of crashing the app.
- `static getDerivedStateFromError(error)` — used alongside `componentDidCatch` to render a fallback UI.

## 3. Sequence of Steps in Rendering a Component

When a component is first rendered (mounted), React calls the lifecycle methods in this order:

1. `constructor(props)`
2. `static getDerivedStateFromProps(props, state)`
3. `render()`
4. React updates the DOM and refs
5. `componentDidMount()`

When a component re-renders due to new props/state (updating):

1. `static getDerivedStateFromProps(props, state)`
2. `shouldComponentUpdate(nextProps, nextState)`
3. `render()`
4. `getSnapshotBeforeUpdate(prevProps, prevState)`
5. React updates the DOM
6. `componentDidUpdate(prevProps, prevState)`

When a component is removed:

1. `componentWillUnmount()`

If an error is thrown anywhere during this process in a child component, React looks for the nearest ancestor that defines `componentDidCatch()` and calls it there.

---

# Hands-On Lab: Blog Application (blogapp)

### Goal
Create a React app named **blogapp** with a class component named `Posts` that:
- Initializes an empty list of posts in its state via the constructor.
- Defines a `loadPosts()` method that fetches posts from `https://jsonplaceholder.typicode.com/posts` using the Fetch API.
- Calls `loadPosts()` inside `componentDidMount()` so data loads right after the component mounts.
- Renders each post's title (heading) and body (paragraph).
- Implements `componentDidCatch()` to alert the user if a rendering error occurs.

### Prerequisites
- Node.js and NPM installed
- Visual Studio Code installed

### Steps

**1. Create the React project**
```bash
npx create-react-app blogapp
```

**2. Open the project in VS Code**
```bash
cd blogapp
code .
```

**3. Create `Post.js`** in the `src` folder — a simple model class representing one blog post:

```jsx
class Post {
  constructor(id, userId, title, body) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}

export default Post;
```

**4. Create `Posts.js`** in the `src` folder — a class component:

```jsx
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetches posts from the API and stores them in component state
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const posts = data.map(
          (item) => new Post(item.id, item.userId, item.title, item.body)
        );
        this.setState({ posts: posts });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }

  // Lifecycle hook: called once, right after the component is mounted to the DOM
  componentDidMount() {
    this.loadPosts();
  }

  // Lifecycle hook: catches JavaScript errors in this component's child tree
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert('Something went wrong while rendering the Posts component: ' + error.toString());
    console.error('componentDidCatch:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading the posts.</h2>;
    }

    return (
      <div className="posts">
        <h1>Blog Posts</h1>
        {this.state.posts.length === 0 && <p>Loading posts...</p>}
        {this.state.posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
```

**5. Edit `App.js`** to import and render the `Posts` component:

```jsx
import React from 'react';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
```

**6. Run the application**

In the terminal, inside the `blogapp` folder:
```bash
npm start
```

**7. View the app**

Open your browser and go to:
```
http://localhost:3000
```

You should initially see "Loading posts...", followed by a list of blog post titles (as headings) and their bodies (as paragraphs), fetched live from the JSONPlaceholder API. If an error occurs anywhere in the `Posts` component's render tree, `componentDidCatch()` will display it as a browser alert and show a fallback message instead of crashing the whole page.
