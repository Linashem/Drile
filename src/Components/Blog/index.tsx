import React from 'react';
import type { OnePostType } from '../../Store/Posts/types';
import { ListItem } from './ListItem';
import style from './Blog.module.scss'

type PostListPropsType = {
  postsData: OnePostType[];
};

export const ContentBlog = ({ postsData }: PostListPropsType) => {
  return (
    <main className={style.wrapper} >
      <h1>Blog</h1>
      <div className={style.posts_wrapper} >
        {postsData.map((el) => (
          <ListItem key={el.body} title={el.title} body={el.body} id={el.id} />
        ))}
      </div>
    </main>
  );
};
