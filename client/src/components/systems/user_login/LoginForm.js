import React from 'react';
import styled from 'styled-components';

const IdPwd_H2 = styled.h2`
  margin: 0;
  font-weight: 400;
  color: dimgrey;
`;

const SC_LoginForm_div = styled.div`
  margin-bottom: 30px;
`;

const LoginForm = () => {
  return (
    <SC_LoginForm_div>
      <IdPwd_H2>아이디</IdPwd_H2>
      <input type="text" />
      <IdPwd_H2>패스워드</IdPwd_H2>
      <input type="password" />
    </SC_LoginForm_div>
  );
};

export default LoginForm;
