import type { RootStateType } from './../configureStore';

export const getUserEmail = (state: RootStateType) => state.userSlice.email;

export const getUserLoading = (state: RootStateType) => state.userSlice.loading;

export const getUserToken = (state: RootStateType) => state.userSlice.token;
