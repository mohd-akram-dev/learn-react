import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// import ends here

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
