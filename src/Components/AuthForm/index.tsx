import React, { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';
import { Input } from '../Input';
import { PasswordInput } from '../Input/PasswordInput';
import { UserSliceActions } from '../../Store';
import style from './AuthForm.module.scss';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const changeHandler =
    (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };

  const submitHandler = () => {
    if (formState.password.length < 5 || !formState.email.includes('@')) {
      setErrorMessage('invalid fields');
    } else {
      setErrorMessage('');
      dispatch(UserSliceActions.setUserLoading(true));
      setTimeout(
        () => dispatch(UserSliceActions.SetUserData({ email: formState.email, token: '1' })),
        3000,
      );

      console.log(formState, 'The form has been sent');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErrorMessage('Sorry, password too short');
    } else if (!formState.email.includes('@') && formState.email !== '') {
      setErrorMessage('email should have a symbol: @');
      console.log('incorrect email');
    } else {
      setErrorMessage('');
    }
  }, [formState.password, formState.email]);

  return (
    <div className={style.wrapper}>
      <h1 className={style.wrapper_title}>Auth Form</h1>
      <div className={style.input_group}>
        <Input name={'Email'} value={formState.email} changeHandler={changeHandler('email')} />

        <div className={style.wrapper_password_wrapper}>
          <PasswordInput
            name={'Password'}
            value={formState.password}
            changeHandler={changeHandler('password')}
          />
        </div>
      </div>
      {errorMessage !== '' && <div className={style.error}>{errorMessage} </div>}
      <button className={style.wrapper_btn} type="submit" onClick={submitHandler}>
        Send
      </button>
    </div>
  );
};
