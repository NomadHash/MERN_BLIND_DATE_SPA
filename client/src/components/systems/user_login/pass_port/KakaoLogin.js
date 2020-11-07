import React from 'react';
import styled from 'styled-components';

const KakaoLoginButton = styled.button`
  border: none;
  border-radius: 9px;
  padding: 10px 21px;
  font-size: 17px;
  width: 284px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  font-weight: 500;
  background: #f5d243;
  font-size: 14px;
`;

const KakaoLogin = () => {
  return <KakaoLoginButton>카카오 계정으로 로그인</KakaoLoginButton>;
};

export default KakaoLogin;
