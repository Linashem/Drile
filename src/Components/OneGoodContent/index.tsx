import React from 'react';
import { Link } from 'react-router-dom';
import style from './OneGoodContent.module.scss';

type OneGoodPropsType = {
  title: string;
  imgUrl: string;
};

export const OneGoodContent = ({ title, imgUrl }: OneGoodPropsType) => {
  return (
    <div className={style.wrapper}>
      <div>
        <img className={style.wrapper_pic} src={imgUrl} alt={title} />
      </div>
      <div>
        <h4>{title} </h4>
        <Link to={'/shop'}>back</Link>
      </div>
    </div>
  );
};
