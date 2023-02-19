import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstanse } from '../../Helper/Network';

export const fetchPosts = createAsyncThunk('posts/all', async () => {
  const { data } = await networkInstanse.get('/posts');
  return data;
});
export const fetchOnePosts = createAsyncThunk('posts/byId', async (id: string) => {
  const { data } = await networkInstanse.get(`/posts/${id}`);
  return data;
});
