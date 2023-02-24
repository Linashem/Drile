import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../Components/AuthForm';
import { routes } from '../../Helper/Conatants/routes';
import { UserSelectors, UserSliceActions } from '../../Store';

export const Auth = () => {
  const loading = useSelector(UserSelectors.getUserLoading);
  const token = useSelector(UserSelectors.getUserToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      navigate(routes.shop);
      dispatch(UserSliceActions.setUserLoading(false));
    }
  }, [token]);
  return (<>
      {loading ? <h1>Loading...</h1> : <AuthForm />}
      </>
  );
};
