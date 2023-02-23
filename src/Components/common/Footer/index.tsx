import React from 'react';
import { useSelector } from 'react-redux';
import { UserSelectors } from '../../../Store';
import style from './Footer.module.scss'

export const Footer = () => {
  const UserEmail = useSelector(UserSelectors.getUserEmail);

  return (
    <>
      <div className={style.wrapper}>Footer</div>
    </>
  );
};
