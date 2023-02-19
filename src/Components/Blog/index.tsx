import React from 'react';
import type { OnePostType } from '../../Store/Posts/types';
import { ListItem } from './ListItem';
type PostListPropsType = {
  postsData: OnePostType[];
};

export const ContentBlog = ({ postsData }: PostListPropsType) => {
  return (
    <main>
      <h1>Blog</h1>
      <div>
        {postsData.map((el) => (
          <ListItem key={el.body} title={el.title} body={el.body} id={el.id} />
        ))}
      </div>
    </main>
  );
};
