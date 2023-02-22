import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartSelectors, CartSliceActions, UserSelectors } from '../../Store';
import { Counter } from '../Counter';
import style from './ShopItem.module.scss';

type OneGoodType = {
  title: string;
  price: number;
  oldPrice?: number;
  imgUrl: string;
};

export const ShopItem = ({ title, price, imgUrl, oldPrice }: OneGoodType) => {
  const countDiscount = () => {
    if (oldPrice) {
      const discount = Math.ceil((price / oldPrice) * 100) - 100;
      return `${discount}%`;
    }
  };

  const [like, setLike] = useState(true);
  const likedHandler = () => {
    setLike((prev) => !prev);
  };
  const [cart, setCart] = useState(true);

  const dispatch = useDispatch();
  const CartCount = useSelector(CartSelectors.getCart);

  const cartHandler = () => {
    if (cart) {
      setCart((prev) => !prev);
      dispatch(CartSliceActions.SetcartData({ cart: 0 }));
    } else {
      setCart((prev) => !prev);
      dispatch(CartSliceActions.clearCartData());
    }
  };

  const CountWrapper = () => {
    return (
      <div className={style.count__wrapper}>
        <div className={style.like}>
          <button className={style.btn_like} onClick={likedHandler}>
          {like
             ? (
              <img src="/img/svg/like-empty.svg" alt="" />
            )
            : (
              <img src="/img/svg/like.svg" alt="" />
            )}
            {/* {like
             ? (
              <img src="/img/svg/like-empty.svg" alt="" />
            )
            : (
              <img src="/img/svg/like.svg" alt="" />
            )} */}
          </button>
        </div>
        <div className={style.cart}>
            {cart
            ? (
              <button className={style.btn_cart} onClick={cartHandler}>
              <img src="/img/svg/cart-empty.svg" alt="cart" />
              </button>
            )
            : (
              // <img src="/img/svg/cart-full.svg" alt="cart" />
             <Counter/>
            )}
            {/* {cart
             ? (
              <img src="/img/svg/cart-empty.svg" alt="cart" />
            )
             : (
              <img src="/img/svg/cart-full.svg" alt="cart" />
            )} */}
        </div>
      </div>
    );
  };

  const Info = () => {
    return (
      <div className={style.product_info}>
        <h4 className={style.product_info_title}>{title}</h4>
        <div className={style.product_info_prices}>
          <p className={style.price_new}> £{price}</p>
          <p className={style.price_old}> {oldPrice}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_card}>
        <img className={style.wrapper_card_pic} src={imgUrl} />
        <div className={style.wrapper_card_discount}>
          {/* <div className={isActive ? style.wrapper_card_discount : ''}> */}

          <p>{countDiscount()} </p>
        </div>
        <CountWrapper />
      </div>
      <Info />
    </div>
  );
};
