import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
