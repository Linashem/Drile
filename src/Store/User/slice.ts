import { store } from './../configureStore';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: '',
  loading: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    SetUserData(
      state,
      { payload: { email, token } }: PayloadAction<{ email: string; token: string }>,
    ) {
      return { ...state, email, token };
    },
    setUserLoading(state, { payload }: PayloadAction<boolean>) {
      return { ...state, loading: payload };
    },
    clearUserData() {
      return { ...initialState };
    },
  },
});

export const {
  name: userSliceName,
  reducer: userSliceReducer,
  actions: UserSliceActions,
} = userSlice;
