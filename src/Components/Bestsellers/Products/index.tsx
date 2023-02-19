import React from 'react';
import style from './Products.module.scss';
import { AssortSingleSofa } from '../Assortiment';

export const Products = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.wrapper_title}>Best Seller Items</h2>
      <div className={style.wrapper_cards}>
        <AssortSingleSofa/>
      </div>
    </div>
  );
};
