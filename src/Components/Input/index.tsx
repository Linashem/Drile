import React from 'react';
import type { ChangeEvent } from 'react';

import style from './Input.module.scss';

type InputProps = {
  name: string;
  value: string;
  type?: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, name, type = 'text', changeHandler }: InputProps) => {
  return (
    <div className={style.wrapper}>
      {/* <span>{name} </span> */}
      <input type={type} value={value} onChange={changeHandler} placeholder={name} />
    </div>
  );
};
