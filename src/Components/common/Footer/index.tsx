import React from 'react';
import { useSelector } from 'react-redux';
import { UserSelectors } from '../../../Store';

export const Footer = () => {
  const UserEmail = useSelector(UserSelectors.getUserEmail);

  return (
    <>
      <div>Footer</div>
      {UserEmail ? <p>true</p> : <p>false</p>}
    </>
  );
};
