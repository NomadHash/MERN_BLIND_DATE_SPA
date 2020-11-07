import React, { useEffect } from 'react';
import LoginModal from '../components/systems/user_login/LoginModal';
import { loginFormChangeField, loginUser } from '../modules/user_login';
import { authUser } from '../modules/auth';
import { useDispatch, useSelector } from 'react-redux';

const LoginContainer = ({ goLoginPage }) => {
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

  useEffect(() => {
    if (loginSuccess) {
      goLoginPage();
      dispatch(authUser());
    }
  }, [loginSuccess, dispatch]);
  return (
    <>
      {/* LoginModal Componet */}
      <LoginModal
        goLoginPage={goLoginPage}
        onSubmitHandler={onSubmitHandler}
        loginFormOnChange={loginFormOnChange}
      />
    </>
  );
};

export default LoginContainer;
