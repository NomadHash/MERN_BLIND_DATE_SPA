import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const IdPwdH2 = styled.h2`
  margin: 0;
  font-weight: 400;
  color: dimgrey;
`;

const LoginFormDiv = styled.div`
  margin-bottom: 30px;
`;

const LoginForm = ({ onSubmitHandler, loginFormOnChange }) => {
  const { email, password } = useSelector(({ userReducer }) => ({
    email: userReducer.email,
    password: userReducer.password,
  }));

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    loginFormOnChange(name, value);
  };

  return (
    <LoginFormDiv>
      <form onSubmit={onSubmitHandler}>
        <IdPwdH2>아이디</IdPwdH2>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChangeHandler}
        />
        <IdPwdH2>패스워드</IdPwdH2>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
        />
        <button type="submit">로그인</button>
      </form>
    </LoginFormDiv>
  );
};

export default LoginForm;
