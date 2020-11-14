import React, { useEffect } from 'react';
import LoginModal from '../components/systems/user_login/LoginModal';
import { loginFormChangeField, loginUser } from '../modules/user_login';
import { authUser } from '../modules/auth';
import { useDispatch, useSelector } from 'react-redux';

const LoginContainer = ({ openLoginModal, auth }) => {
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
    console.log(id, email);
    let request = {
      oAuthId: id,
      email,
    };
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
      {/* LoginModal Componet */}
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
