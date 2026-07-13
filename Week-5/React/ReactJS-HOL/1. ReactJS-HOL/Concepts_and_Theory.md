# React & SPA — Concepts (Lab Theory)

## 1. What is an SPA (Single-Page Application)?

A **Single-Page Application** is a web application that loads a single HTML page and then dynamically updates the content on that page as the user interacts with it, instead of loading entirely new pages from the server for every action. Navigation between "views" is handled on the client side using JavaScript, which rewrites parts of the DOM rather than requesting a fresh page.

**Benefits of SPA:**
- **Faster user experience** — only data changes, not the whole page, so transitions feel instant.
- **Reduced server load** — the server mostly sends JSON data via APIs instead of full HTML pages.
- **Better user interactivity** — feels like a native desktop/mobile app.
- **Clear separation of frontend and backend** — frontend (SPA) and backend (API) can be developed and scaled independently.
- **Caching** — the app can cache local data effectively since the page isn't reloaded.

## 2. What is MPA (Multi-Page Application) and how is it different from SPA?

An **MPA** reloads a complete new HTML page from the server every time the user navigates to a different section or performs an action.

| Aspect | SPA | MPA |
|---|---|---|
| Page reloads | Only once (initial load); content updates dynamically | Full page reload on every navigation |
| Speed after load | Very fast (no reload) | Slower (server round trip each time) |
| SEO | Harder (needs SSR/pre-rendering) | Easier (each page has its own URL/content) |
| Complexity | Frontend logic-heavy (JS framework) | Simpler per-page, backend-heavy |
| Data transfer | Small JSON payloads | Full HTML + assets each time |
| Examples | Gmail, Facebook, Twitter | Amazon (traditional), many e-commerce/news sites |

## 3. Pros & Cons of SPA

**Pros:**
- Fast, app-like user experience
- Less bandwidth used after the first load
- Clean separation between frontend and backend (via REST/GraphQL APIs)
- Easier to build mobile apps reusing the same backend

**Cons:**
- Initial load can be slower (large JS bundle)
- SEO is harder without extra tooling (Server-Side Rendering, pre-rendering)
- Requires JavaScript enabled in the browser
- Browser history/navigation needs to be manually handled (routing libraries)
- Memory can grow if the app isn't managed well (since the page never fully refreshes)

## 4. What is React?

**React** is an open-source JavaScript library developed and maintained by Meta (Facebook), used for building user interfaces — especially single-page applications. It lets developers build encapsulated **components** that manage their own state, then compose them to make complex UIs.

**How React works (its working):**
1. The developer writes UI as **components** using **JSX** (JavaScript + HTML-like syntax).
2. Each component has a **state** and **props** that determine what it renders.
3. When state/props change, React doesn't touch the real DOM directly — it creates a new **Virtual DOM** tree.
4. React **compares (diffs)** the new Virtual DOM with the previous one (a process called **reconciliation**).
5. React calculates the minimal set of changes needed and updates only those parts in the **real DOM** — making updates fast and efficient.

## 5. What is the Virtual DOM?

The **Virtual DOM (VDOM)** is a lightweight, in-memory JavaScript representation of the real DOM. Instead of directly manipulating the browser's DOM (which is slow), React:
1. Creates a Virtual DOM copy of the UI.
2. When data changes, React creates a new Virtual DOM tree.
3. React compares (diffs) it with the previous Virtual DOM snapshot.
4. It computes the smallest number of changes required.
5. Only those specific changes are applied ("patched") to the real DOM.

This approach makes UI updates significantly faster than re-rendering the whole page.

## 6. Features of React

- **JSX** – Syntax extension that lets you write HTML-like code inside JavaScript.
- **Component-Based Architecture** – UI is broken into small, independent, reusable components.
- **Virtual DOM** – Efficient DOM updates through diffing/reconciliation.
- **One-Way (Unidirectional) Data Binding** – Data flows from parent to child via props, making the app more predictable and easier to debug.
- **Declarative UI** – You describe *what* the UI should look like for a given state, and React handles the *how*.
- **Reusable Components** – Components can be reused across the application.
- **React Hooks** – Functions like `useState`, `useEffect` that let you use state and lifecycle features in functional components.
- **Large Ecosystem** – Rich ecosystem of libraries (React Router, Redux, etc.) and strong community support.
- **High Performance** – Due to Virtual DOM and efficient rendering.

---

# Hands-On Lab: Creating "myfirstreact" App

### Prerequisites
- Node.js and NPM installed
- Visual Studio Code installed

### Steps

**1. Install Node.js and NPM**
Download and install from: https://nodejs.org/en/download/

**2. Verify installation**
```bash
node -v
npm -v
```

**3. Create a new React app named "myfirstreact"**
```bash
npx create-react-app myfirstreact
```
> Note: `npx create-react-app` is the modern recommended way (older tutorials mention globally installing `create-react-app` first, but `npx` avoids needing a global install).

**4. Navigate into the project folder**
```bash
cd myfirstreact
```

**5. Open the folder in VS Code**
```bash
code .
```

**6. Open `src/App.js`**, delete its existing content, and replace it with the code in `App.js` (provided in this download) — it renders:

> **Welcome to the first session of React**

**7. Run the application**
```bash
npm start
```

**8. View the app**
Open your browser and go to:
```
http://localhost:3000
```

You should see **"Welcome to the first session of React"** displayed as a heading on the page.
