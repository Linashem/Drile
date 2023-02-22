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

  const dispatch = useDispatch();
  const CartCount = useSelector(CartSelectors.getCart);

  const cartImcrementHandler = () => {
    if (count === 0) {
      setCart((prev) => !prev);
      dispatch(CartSliceActions.IncrementCart({ cart: 0 }));
      setCount((prev) => prev + 1);
    } else {
      dispatch(CartSliceActions.IncrementCart({ cart: 0 }));
      setCount((prev) => prev + 1);
    }
  };
  const cartDecrementHandler = () => {
    dispatch(CartSliceActions.DecrementCart({ cart: CartCount }));
    setCount((prev) => prev - 1);
  };

  const CountWrapper = () => {
    return (
      <div className={style.count__wrapper}>
        <div className={style.like}>
          <button className={style.btn_like} onClick={likedHandler}>
            {like ? (
              <img src="/img/svg/like-empty.svg" alt="" />
            ) : (
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
          {cart ? (
            <button className={style.btn_cart} onClick={cartImcrementHandler}>
              <img src="/img/svg/cart-empty.svg" alt="cart" />
            </button>
          ) : (
            // <img src="/img/svg/cart-full.svg" alt="cart" />
            <div className={style.count__group}>
              <p className={style.count_number}>{count}</p>
              <div className={style.button_box}>
                <button className={style.btn_add} onClick={cartImcrementHandler}>
                  <img src="/img/svg/count-btn.svg" alt="btn" />
                </button>
                <button
                  className={style.btn_remove}
                  onClick={cartDecrementHandler}
                  disabled={count === 0}
                >
                  <img src="/img/svg/count-btn.svg" alt="btn" />
                </button>
              </div>
            </div>
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
