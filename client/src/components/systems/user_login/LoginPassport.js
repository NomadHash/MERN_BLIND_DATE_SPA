import React from 'react';
import styled from 'styled-components';

const GoogleLogin_button = styled.button`
  border-radius: 23px;
  padding: 13px 21px;
  font-size: 17px;
  border: none;
  width: 330px;
  font-weight: 500;
  color: #585858;
  border: 2px solid #868686;
  background: none;
  cursor: pointer;
`;

const LoginPassport = () => {
  return (
    <div>
      <GoogleLogin_button>Google 계정으로 로그인</GoogleLogin_button>
    </div>
  );
};

export default LoginPassport;
