import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkGood } from '../../Helper/Network/goodNetwork';

export const ferchOneGood = createAsyncThunk('goods/byId', async (id: string) => {
  const { data } = await networkGood.get(`/goods/${id}`);
  return data;
});
