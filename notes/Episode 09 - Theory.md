## Namaste React Course by Akshay Saini

# Episode 09 - Optimizing Our App

## Theory

### Topics Taught

### Custom Hooks

A **Custom Hook** is a reusable function created by you that encapsulates component logic using built-in React hooks. It lets you extract stateful logic from a component and share it across multiple components.

**Rules:**
- Name must start with `use` (e.g., `useOnlineStatus`, `useRestaurantData`).
- Must call at least one React hook inside it (useState, useEffect, etc.).
- Cannot be called outside a React component or another hook.

**Example:**
```js
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, []);

  return isOnline;
};
```

**Usage:**
```jsx
const status = useOnlineStatus();
// Use `status` in any component — no duplicated logic needed.
```

**Benefits:** Reusability, cleaner components, single source of logic, easier testing.

---

### Modularity in Code

**Modularity** means breaking your application into small, self-contained, reusable pieces (files/components/hooks) instead of writing everything in one monolithic file.

**Why it matters:**
- **Separation of Concerns** — each file handles one responsibility (e.g., `utils.js` for helpers, `RestaurantCard.js` for UI, `useRestaurantData.js` for data fetching).
- **Reusability** — modular code can be reused across the app or even across projects.
- **Maintainability** — smaller files are easier to read, debug, and update.
- **Collaboration** — teams can work on different modules without conflicts.

**Example structure:**
```
src/
  components/
    Header.js
    RestaurantCard.js
    Cart.js
  hooks/
    useOnlineStatus.js
    useRestaurantData.js
  utils/
    helper.js
    constants.js
```

---

### Modular Bundling

**Modular Bundling** refers to how bundlers (like Webpack, Vite, Rollup) process your modular code and produce optimized output bundles.

When you write modular code (imports/exports across files), the bundler:
- Resolves all `import`/`export` dependencies to build a **dependency graph**.
- Combines modules into bundles, eliminating unused code (dead code elimination / tree shaking).
- Produces optimized chunks that the browser can load efficiently.

**Key concepts:**
- **Tree Shaking** — removes exports that are never imported, reducing bundle size.
- **Chunking** — splits the bundle into smaller files (chunks) that can be loaded on demand.
- **Minification** — compresses the output (removes whitespace, shortens variable names).

The goal: smaller, faster bundles that only include what the app actually uses.

---

### Code Splitting

**Code Splitting** is the technique of splitting your app's bundle into smaller chunks that are loaded only when needed, instead of loading everything upfront.

**Why:** A large single bundle means the user waits for the entire app to download before seeing anything. Code splitting lets the browser load only the essential code first, then fetch additional chunks on demand.

**How in React:**
- **Dynamic `import()`** — returns a promise that resolves to the module when it's loaded:
```js
import('./Grocery').then((module) => { /* use module */ });
```

- **`React.lazy()`** — wraps a dynamic import to create a lazily-loaded component:
```jsx
const Grocery = React.lazy(() => import('./Grocery'));
```

- **`<Suspense>`** — shows a fallback UI while the lazy component is being loaded:
```jsx
<Suspense fallback={<h1>Loading...</h1>}>
  <Grocery />
</Suspense>
```

**Result:** The `Grocery` chunk is only downloaded when the user navigates to that route — not on initial page load.

---

### Lazy Loading

**Lazy Loading** is a strategy where resources (components, images, data) are loaded only when they are actually needed, not upfront.

In React, lazy loading is implemented using `React.lazy()` + `<Suspense>`:

```jsx
const Grocery = React.lazy(() => import('./Grocery'));

<Suspense fallback={<Shimmer />}>
  <Grocery />
</Suspense>
```

**Difference from Code Splitting:**
- **Code Splitting** is the *technique* of breaking the bundle into chunks.
- **Lazy Loading** is the *strategy* of deciding *when* to load those chunks (on demand).

They work together: code splitting creates the chunks, lazy loading determines when to fetch them.

**Benefits:**
- Faster initial page load — only critical code is fetched first.
- Reduced bandwidth usage — unused features are never downloaded.
- Better UX — the app feels faster because the user sees content sooner.