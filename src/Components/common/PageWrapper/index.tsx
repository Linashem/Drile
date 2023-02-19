import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import style from './PageWrapper.module.scss';

export const Pagewrapper = () => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <main className={style.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
