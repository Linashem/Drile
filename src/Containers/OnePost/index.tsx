import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { OnePostContent } from '../../Components/OnePostContent';
import { PostEffect, PostSelectors } from '../../Store';

export const OnePost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector(PostSelectors.getOnePostData);

  useEffect(() => {
    if (postId) {
      dispatch(PostEffect.fetchOnePosts(postId));
    }
  }, [postId]);

  return <OnePostContent title={postData.title} body={postData.body} />;
};
