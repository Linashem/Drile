import React, { useState } from 'react';
import style from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(1);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className={style.count__group}>
      <p className={style.count_number}>{count}</p>
      <div className={style.button_box}>
        <button className={style.btn_add} onClick={incrementHandler}>
          <img src="/img/svg/count-btn.svg" alt="btn" />
        </button>
        <button className={style.btn_remove} onClick={decrementHandler} disabled={count === 0}>
          <img src="/img/svg/count-btn.svg" alt="btn" />
        </button>
      </div>
    </div>
  );
};
