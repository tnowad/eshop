import { createSlice } from "@reduxjs/toolkit";
import Product from "../../interfaces/Product";

type ProductCart = Product & { quantity: number; totalPrice: number };

interface CartState {
  cartItems: ProductCart[];
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newItem = action.payload as Product;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    updateCartItem: (state: CartState, action) => {
      const { id, quantity }: { id: string; quantity: number } = action.payload;
      console.log(action.payload);
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
  },
});

export const { addCartItem, removeCartItem, updateCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
