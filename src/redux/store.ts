import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlices,
  },
});

export default store;
