import { store } from './../configureStore';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  cart: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    SetcartData(state, { payload: { cart } }: PayloadAction<{ cart: number }>) {
      state.cart += 1;
    },
    clearCartData() {
      return { ...initialState };
    },
  },
});

export const {
  name: cartSliceName,
  reducer: cartSliceReducer,
  actions: CartSliceActions,
} = cartSlice;
