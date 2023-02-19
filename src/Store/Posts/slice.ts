import { store } from './../configureStore';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { fetchPosts, fetchOnePosts } from './effects';
import type { OnePostType } from './types';

const initialState = {
  posts: [] as OnePostType[],
  loading: false,
  error: {},
  onePost: { body: '', id: 0, title: '', userId: 0 },
};

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // blog
    builder.addCase(fetchPosts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }: PayloadAction<OnePostType[]>) => {
      return { ...state, posts: payload, loading: false };
    });
    builder.addCase(fetchPosts.rejected, (state, { error }) => {
      return { ...state, error };
    });
    // one post
    builder.addCase(fetchOnePosts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchOnePosts.fulfilled, (state, { payload }: PayloadAction<OnePostType>) => {
      return { ...state, onePost: payload, loading: false };
    });
    builder.addCase(fetchOnePosts.rejected, (state, { error }) => {
      return { ...state, error };
    });
  },
});

export const { name: postSliceName, reducer: postSliceReducer } = postSlice;
