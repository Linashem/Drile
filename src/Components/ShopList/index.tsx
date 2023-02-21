import React from 'react';
import style from './ShopList.module.scss';

type OneGoodType = {
  title: string;
  category: string;
  price: number;
  imgUrl: string;
};

export const ShopList = ({ title, category, price, imgUrl }: OneGoodType) => {
  return (
    <>
      <h3>{title} </h3>
      <p>{category} </p>
      <span>{price} </span>
      <div className={style.pic}>
        <img src={imgUrl} alt="" />
      </div>
    </>
  );
};
