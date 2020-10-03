import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/systems/Header';

const HeaderContainer = () => {
  // const { isAuth, name } = useSelector(({ user }) => ({
  //   isAuth: user.userData.isAuth,
  //   name: user.userData.name,
  // }));
  return <Header />;
};

export default HeaderContainer;
