import { configureStore } from '@reduxjs/toolkit';
import { postSliceName, postSliceReducer } from './Posts/slice';
import { userSliceName, userSliceReducer } from './User/slice';

export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReducer,
    [postSliceName]: postSliceReducer
  },
  devTools: true,
});
export type RootStateType = ReturnType<typeof store.getState>;
