import { store } from './../configureStore';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ferchOneGood } from './effects';
import type { OneGoodType } from './type';

const initialState = {
  // good: [] as OneGoodType[],
  loading: false,
  error: {},
  oneGood: { id: 0, title: '', imgUrl: '', desc: '' },
};

const goodSlice = createSlice({
  name: 'goodSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // one post
    builder.addCase(ferchOneGood.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(ferchOneGood.fulfilled, (state, { payload }: PayloadAction<OneGoodType>) => {
      return { ...state, oneGood: payload, loading: false };
    });
    builder.addCase(ferchOneGood.rejected, (state, { error }) => {
      return { ...state, error };
    });
  },
});

export const { name: goodSliceName, reducer: goodSliceReducer } = goodSlice;
