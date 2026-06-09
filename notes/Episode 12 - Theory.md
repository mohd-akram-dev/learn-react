## Namaste React Course by Akshay Saini

# Episode 12 - Let's Build Our Store

## Theory Assignment:

### Advantages of using Redux Toolkit over Redux

Redux Toolkit (RTK) simplifies Redux usage by reducing boilerplate and providing opinionated defaults:

- **Less Boilerplate**: No need to manually write action types, action creators, or switch-case reducers. `createSlice` handles all of this automatically.
- **Immutability Built-in**: RTK uses Immer internally, so you can write "mutating" logic in reducers that actually produces immutable updates. With plain Redux, you had to manually ensure immutability (e.g., spreading objects/arrays).
- **Simplified Store Setup**: `configureStore` replaces `createStore` and automatically sets up Redux DevTools, middleware (like thunk), and combines reducers — no manual `compose` calls needed.
- **Standardized Async Logic**: `createAsyncThunk` provides a consistent pattern for async operations, replacing hand-written thunk action creators.
- **Better TypeScript Support**: RTK has first-class TS typings out of the box.
- **Built-in Utility Hooks**: `useSelector` and `useDispatch` from `react-redux` work seamlessly with RTK slices.

---

### Explain Dispatcher

A **Dispatcher** (referred to as `dispatch` in Redux/RTK) is a function that sends actions to the Redux store. When you call `dispatch(action)`, the store runs the reducer with that action and updates the state accordingly.

```js
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();
dispatch(addItem({ id: 1, name: 'Pizza' }));
```

It is the only way to trigger a state change in Redux. Without dispatching an action, the reducer never runs and the state never updates.

---

### Explain Reducer

A **Reducer** is a pure function that takes the current state and an action, and returns a new state:

```
(previousState, action) => newState
```

Key rules:
- Must be a **pure function** — no side effects, no API calls, no mutations of external state.
- Must return a **new state object** (never mutate the existing state directly).
- In RTK, reducers are defined inside `createSlice` and can use "mutating" syntax because Immer handles immutability under the hood.

Example inside a slice:
```js
reducers: {
  addItem: (state, action) => {
    state.items.push(action.payload);
  },
  removeItem: (state, action) => {
    state.items.splice(action.payload, 1);
  },
}
```

---

### Explain Slice

A **Slice** is a collection of Redux logic for a single feature/domain of your app. It contains:
- The **initial state** for that feature
- The **reducer functions** that handle updates to that state
- The **auto-generated action creators** for those reducers

For example, a `cartSlice` manages cart-related state, a `userSlice` manages user-related state. Each slice is independent, and `configureStore` combines them into one root reducer.

```js
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => { state.items.push(action.payload); },
    removeItem: (state, action) => { state.items.splice(action.payload, 1); },
  },
});
```

---

### Explain Selector

A **Selector** is a function that reads (selects) specific data from the Redux store state. In React components, you use `useSelector` from `react-redux` to subscribe to store state:

```js
import { useSelector } from 'react-redux';

const cartItems = useSelector((state) => state.cart.items);
```

Selectors:
- Extract only the data a component needs, avoiding unnecessary re-renders.
- Can be simple (like above) or complex (using `createSelector` from RTK for memoized selectors to avoid recomputation).
- Act as the **reading** mechanism of Redux, while `dispatch` is the **writing** mechanism.

---

### Explain createSlice and the configuration it takes

`createSlice` is the core RTK function that creates a slice of the Redux store. It accepts a configuration object with the following properties:

```js
createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => { state.loading = true; })
      .addCase(fetchData.fulfilled, (state, action) => { state.data = action.payload; })
      .addCase(fetchData.rejected, (state) => { state.loading = false; });
  },
});
```

**Configuration properties:**

| Property | Description |
|---|---|
| `name` | A string name for this slice. Used as prefix for generated action types (e.g., `cart/addItem`). |
| `initialState` | The initial state value for this slice. Can be a primitive, object, or array. |
| `reducers` | An object where each key is an action name and each value is a reducer function. RTK auto-generates action creators from these keys. |
| `extraReducers` | Optional. Handles actions defined outside this slice (e.g., actions from `createAsyncThunk` or other slices). Uses a builder callback pattern. |

**What `createSlice` returns:**

- `cartSlice.reducer` — the reducer function to pass to `configureStore`
- `cartSlice.actions.addItem` — the auto-generated action creator
- `cartSlice.actions.removeItem` — the auto-generated action creator