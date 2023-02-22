import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../../../Helper/Conatants/routes';
import { CartSelectors, CartSliceActions, UserSelectors, UserSliceActions } from '../../../Store';
import style from './Header.module.scss';

export const Header = () => {
  const UserEmail = useSelector(UserSelectors.getUserEmail);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(UserSliceActions.clearUserData());
  };
  const CartCount = useSelector(CartSelectors.getCart);
  // const cartCountHendler = () => {
  //   dispatch(CartSliceActions.SetcartData);
  // };

  return (
    <header className={style.header}>
      <Link to={routes.home}>
        <div>
          <img src="/img/svg/logo.svg" alt="" />
        </div>
      </Link>

      <nav>
        <ul className={style.header_list}>
          <li className={style.header_list_item}>
            <Link className={style.header_list_item_link} to={routes.home}>
              Home
            </Link>
          </li>
          <li className={style.header_list_item}>
            <Link className={style.header_list_item_link} to={routes.shop}>
              Shop
            </Link>
          </li>
          <li className={style.header_list_item}>
            <Link className={style.header_list_item_link} to={routes.blog}>
              Blog
            </Link>
          </li>
          <li className={style.header_list_item}>
            <Link className={style.header_list_item_link} to={routes.contact}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={style.header_navbar}>
        {CartCount
         ? (
          <>
            <p>{CartCount}</p>
            <Link to={routes.cart}>
              <img src="/img/svg/cart.svg" alt="" />
            </Link>
          </>
        )
        : (
          <Link to={routes.cart}>
            <img src="/img/svg/cart.svg" alt="" />
          </Link>
        )}

        {UserEmail
        ? (
          <>
            <span>{UserEmail}</span>
            <button onClick={logoutHandler}>Logout </button>
          </>
        )
        : (
          <Link to={routes.auth}>
            <img src="/img/svg/auth.svg" alt="" />
          </Link>
        )}
      </div>
    </header>
  );
};
