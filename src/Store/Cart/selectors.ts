import type { RootStateType } from './../configureStore';

export const getCart = (state: RootStateType) => state.cartSlice.cart;
