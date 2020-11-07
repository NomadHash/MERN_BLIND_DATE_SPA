import React from 'react';
import styled from 'styled-components';

const KakaoLoginButton = styled.button`
  border: 2px solid gray;
  border-radius: 23px;
  padding: 13px 21px;
  font-size: 17px;
  /* border: none; */
  width: 330px;
  font-weight: 500;
  color: #676767;
  cursor: pointer;
  font-weight: 600;
  background: none;
  font-size: 16px;
`;

const KakaoLogin = () => {
  return <KakaoLoginButton>카카오 계정으로 로그인</KakaoLoginButton>;
};

export default KakaoLogin;
