import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../Helper/Conatants/routes';
import style from './Header.module.scss';

export const Header = () => {
  return (
  <header className=''>
    <div>
      <img src="/img/svg/logo.svg" alt="" />
    </div>
    <nav>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.shop}>Shop</Link>
        </li>
        <li>
          <Link to={routes.blog}>Blog</Link>
        </li>
        <li>
          <Link to={routes.contact}>Contact</Link>
        </li>
      </ul>
    </nav>
    <div>
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
