import React from 'react';
import styled from 'styled-components';

const Content_Div = styled.div`
  padding: 30px 30px;
`;
const IdPwd_H2 = styled.h2`
  margin: 0;
  font-weight: 400;
  color: dimgrey;
`;

const LoginForm = () => {
  return (
    <>
      <IdPwd_H2>아이디</IdPwd_H2>
      <input type="text" />
      <IdPwd_H2>패스워드</IdPwd_H2>
      <input type="password" />
    </>
  );
};

export default LoginForm;
