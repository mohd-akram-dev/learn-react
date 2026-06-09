## Namaste React Course by Akshay Saini

# Episode 11 - Data is the new oil

## Theory:

### Topics Covered:

### Seperation of a React Application into UI-Layer and Data-Layer

Every React application can be split into two distinct layers:

- **UI Layer**: The visual part — components, JSX, styling, DOM elements. This layer is responsible for **rendering** what the user sees and interacts with. It is reactive: it re-renders whenever the data layer changes.

- **Data Layer**: The logic part — state, props, context, Redux store, API responses. This layer holds all the **data** that drives the UI. When data changes, React triggers a re-render of the UI layer.

The key insight: **UI is a function of data**. `UI = f(data)`. The UI layer simply reflects whatever the data layer provides. This separation makes apps easier to debug, test, and scale. You can change how data is managed (e.g., moving from local state to Redux) without touching UI components, and vice versa.

---

### Controlled and Uncontrolled Components

These describe how form inputs manage their data:

**Controlled Components:**
- The component's state controls the input value via `value` and `onChange`.
- React is the "single source of truth" for the input data.
- You can validate, transform, or disable the input at any time.

```jsx
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />
```

**Uncontrolled Components:**
- The DOM itself manages the input value. You access it via a `ref` when needed (e.g., on form submit).
- No React state is synced with the input.

```jsx
const inputRef = useRef(null);
const handleSubmit = () => { console.log(inputRef.current.value); };
<input ref={inputRef} />
```

| Aspect | Controlled | Uncontrolled |
|---|---|---|
| Source of truth | React state | DOM |
| Access value | Via state | Via ref |
| Validation | Real-time | On submit |
| Re-renders on change | Yes | No |

---

### Prop Drilling

**Prop Drilling** is the process of passing data (props) from a parent component down through multiple intermediate components to reach a deeply nested child that needs it.

```
<App>          → passes `user` prop
  <Header>     → receives `user`, passes it down
    <Navbar>   → receives `user`, passes it down
      <Avatar> → finally uses `user`
```

**Problems with Prop Drilling:**
- Intermediate components receive props they don't use — they're just "conduits."
- Refactoring is painful: if the prop name or source changes, every intermediate component must be updated.
- Hard to trace where a prop originated.

**Solutions:**
- **Context API** — share data across the tree without passing props at every level.
- **Redux / Zustand** — global state management accessible from any component.
- **Component Composition** — pass children or render props to skip intermediate layers.

---

### Context API in React

The **Context API** provides a way to pass data through the component tree without prop drilling. It creates a global "context" that any nested component can read from.

**How it works:**

1. **Create Context** — defines the context object with a default value:
```js
const UserContext = createContext({ name: 'Guest', email: '' });
```

2. **Provide Context** — wraps components that need access to the data:
```jsx
<UserContext.Provider value={{ name: 'Akshay', email: 'akshay@example.com' }}>
  <App />
</UserContext.Provider>
```

3. **Consume Context** — any nested component reads the data using `useContext`:
```jsx
const { name, email } = useContext(UserContext);
```

**Key points:**
- All components inside `<Provider>` can access the context value — no props needed.
- When the provider's `value` changes, **all consumers re-render** — so avoid putting frequently-changing data in context.
- You can have multiple contexts for different data domains (e.g., `ThemeContext`, `UserContext`, `CartContext`).
- Context is **not** a replacement for Redux — it doesn't have middleware, optimized selectors, or dev tools for complex state logic.