import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../Helper/Conatants/routes';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <img src="/img/svg/logo.svg" alt="" />
      </div>
      <nav>
        <ul className={style.header_list}>
          <li className={style.header_list_item}>
            <Link className={style.header_list_item_link} to={routes.home}>Home</Link>
          </li>
          <li className={style.header_list_item}>
            <Link className={style.header_list_item_link} to={routes.shop}>Shop</Link>
          </li>
          <li className={style.header_list_item}>
            <Link className={style.header_list_item_link} to={routes.blog}>Blog</Link>
          </li>
          <li className={style.header_list_item}>
            <Link className={style.header_list_item_link} to={routes.contact}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={style.header_navbar} >
        <Link to={routes.cart}>
          <img src="/img/svg/cart.svg" alt="" />
        </Link>
        <Link to={routes.auth}>
          <img src="/img/svg/auth.svg" alt="" />
        </Link>
      </div>
    </header>
  );
};
