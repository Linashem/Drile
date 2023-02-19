import React from 'react';
import { Link } from 'react-router-dom';

type OnePostPropsType = {
  title: string;
  body: string;
};

export const OnePostContent = ({ body, title }: OnePostPropsType) => {
  return (
    <div>
      <h4>{title} </h4>
      <p>{body} </p>
      <Link to={'/blog'}>back</Link>
    </div>
  );
};
