import type { RootStateType } from '../configureStore';

export const getOneGoodData = (state: RootStateType) => state.goodSlice.oneGood;
