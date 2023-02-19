import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

import style from './Input.module.scss'

type InputProps = {
    name: string;
    value: string;
    // type?: string;
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordInput = ({ value, name, changeHandler }: InputProps) => {
    const [look, setLook] = useState(false);
    const [passInputChange, setPassInputChange] = useState('');
    const [passInputClasses, setPassInputClasses] = useState('');
    const [type, setType] = useState('password');
    const toggleHandler = () => {
        setLook((prev) => !prev);
        if (look) {
            setType('password');
        } else {
            setType('text');
        }
    }
    return (
        <div className={style.wrapper}>
            <input type={type} value={value} onChange={changeHandler} placeholder={name} className={style.password_input} />
            <div className={style.password_icon} onClick={toggleHandler}>
                {look ? <img src="/img/svg/eye.svg" alt="eye" /> : <img src="/img/svg/no-eye.svg" alt="eye" />}
            </div>
        </div>
    );
};
