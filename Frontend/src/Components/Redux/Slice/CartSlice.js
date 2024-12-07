import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  TotalCartItems: 0,
};

export const CartSlice = createSlice({
  name: "CartItem",
  initialState,
  reducers: {
    updateTotalCartItems: (state, action) => {
      state.TotalCartItems = action.payload;
    },
    decrementCartTotal: (state, action) => {
      const decrementBy = action.payload || 1;
      state.TotalCartItems = Math.max(0, state.TotalCartItems - decrementBy);
    },

    clearCart: (state) => {
      state.TotalCartItems = 0;
    },
  },
});

export const { updateTotalCartItems, decrementCartTotal, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
