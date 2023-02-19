import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import style from './Product.module.scss';

type ProductType = {
  imgUrl: string;
  imgAlt: string;
  newprice: number;
  oldprice: number;
  discount?: number;
  title: string;
  count?: number;
};

export const Product = (props: ProductType) => {
  const { imgUrl, imgAlt, newprice, oldprice, title } = props;

  const countDiscount = () => {
    const discount = Math.ceil((newprice / oldprice) * 100) - 100;
    return `${discount}%`;
  };

  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  const [like, setLike] = useState(true);
  const likedHandler = () => {
    setLike((prev) => !prev);
  };
  const [cart, setCart] = useState(true);
  const cartHandler = () => {
    setCart((prev) => !prev);
  };

  const CountWrapper = () => {
    return (
      <div className={style.count__wrapper}>
        <div className={style.count__group}>
          <p className={style.count_number}>{count}</p>
          <div className={style.button_box}>
            <button className={style.btn_add} onClick={incrementHandler}>
              <img src="/img/svg/count-btn.svg" alt="btn" />
            </button>
            <button className={style.btn_remove }onClick={decrementHandler} disabled={count === 0}>
              <img src="/img/svg/count-btn.svg" alt="btn" />
            </button>
          </div>
        </div>

        <div className={style.like}>
          <button className={style.btn_like} onClick={likedHandler}>
            {like ? <img src="/img/svg/like-empty.svg" alt="" /> : <img src="/img/svg/like.svg" alt="" />}
          </button>
        </div>
        <div className={style.cart}>
          <button className={style.btn_cart} onClick={cartHandler}>
            {cart ? (<img src="/img/svg/cart-empty.svg" alt="cart" />) : (<img src="/img/svg/cart-full.svg" alt="cart" />)}
          </button>
        </div>
      </div>
    );
  };

  const Info = () => {
    return (
      <div className={style.product_info}>
        <h4 className={style.product_info_title}>{title}</h4>
        <div className={style.product_info_prices}>
          <p className={style.price_new}> £{newprice}</p>
          <p className={style.price_old}> £{oldprice}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_card}>
        <img className={style.wrapper_card_pic} src={imgUrl} alt={imgAlt} />
        <div className={style.wrapper_card_discount}>
          <p>{countDiscount()} </p>
        </div>
        <CountWrapper />
      </div>
      <Info />
    </div>
  );
};
