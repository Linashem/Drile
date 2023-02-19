import type { RootStateType } from '../configureStore';

export const getPostsData = (state: RootStateType) => state.postSlice.posts;
export const getPostsLoading = (state: RootStateType) => state.postSlice.loading;
export const getOnePostData = (state: RootStateType) => state.postSlice.onePost;
