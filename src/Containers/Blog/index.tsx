import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentBlog } from '../../Components/Blog';
import { PostEffect, PostSelectors } from '../../Store';

export const Blog = () => {
  const dispatch = useDispatch();
  const loading = useSelector(PostSelectors.getPostsLoading);
  const postsData = useSelector(PostSelectors.getPostsData);

  useEffect(() => {
    dispatch(PostEffect.fetchPosts());
  }, []);
  return <>{loading ? <h1>Loading...</h1> : <ContentBlog postsData={postsData} />}</>;
};
