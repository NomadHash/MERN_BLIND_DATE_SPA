import React, { useEffect, useState } from 'react';
import LoginModal from '../components/systems/user_login/LoginModal';
import { loginFormChangeField, loginUser } from '../modules/user_login';
import { authUser } from '../modules/auth';
import { useDispatch, useSelector } from 'react-redux';

import { clearLoginState } from '../modules/user_login';
import { logOutUser } from '../modules/auth';

const LoginContainer = ({ openLoginModal }) => {
  const logOutHandler = () => {
    dispatch(logOutUser());
    dispatch(clearLoginState());
  };

  const { auth } = useSelector(({ authReduce }) => {
    return {
      auth: authReduce.userAuth?.isAuth,
    };
  });

  //* REDUX_DISPATCH
  const dispatch = useDispatch();

  const loginFormOnChange = (name, value) => {
    dispatch(
      loginFormChangeField({
        key: name,
        value,
      }),
    );
  };

  const { email, password, loginSuccess } = useSelector(({ userReducer }) => ({
    email: userReducer.email,
    password: userReducer.password,
    loginSuccess: userReducer.loginSuccess,
  }));

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let requestBody = {
      email,
      password,
    };
    dispatch(loginUser(requestBody));
  };

  const oAuthLoginHandler = (id, email) => {
    let request = {
      oAuthId: id,
      email,
    };

    if (window.FB.getAccessToken()) {
      window.FB.logout();
    }

    dispatch(loginUser(request));
  };

  useEffect(() => {
    if (loginSuccess) {
      dispatch(authUser());
    }
  }, [loginSuccess, dispatch]);

  useEffect(() => {
    if (loginSuccess && auth) {
      openLoginModal();
    }
  }, [auth, loginSuccess, openLoginModal]);

  return (
    <>
      <LoginModal
        openLoginModal={openLoginModal}
        onSubmitHandler={onSubmitHandler}
        loginFormOnChange={loginFormOnChange}
        oAuthLoginHandler={oAuthLoginHandler}
      />
    </>
  );
};

export default LoginContainer;
