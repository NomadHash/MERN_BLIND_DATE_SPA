import React from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import kaakoLogo from '../../../../public/kakaoLogo.png';
require('dotenv').config();
const KAKAO_APP_KEY = process.env.REACT_APP_KAKAO_APP_KEY;

const buttonBlock = {
  border: 'none',
  borderRadius: '9px',
  fontSize: '17px',
  width: '284px',
  fontWeight: '500',
  height: '32px',
  cursor: 'pointer',
  background: '#fae101',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '4px 0px',
};

const ButtoninnerText = styled.h3`
  margin: 0;
  font-size: 14px;
  left: -7px;
  position: relative;
`;

const LogoKakao = styled.img`
  width: 19px;
  position: relative;
  left: -40px;
`;

const Kakao = ({ oAuthLoginHandler }) => {
  const responseKakao = (response) => {
    console.log(response);
    const { id } = response.profile;
    const { email } = response.profile.kakao_account;
    oAuthLoginHandler(id, email);
  };
  return (
    <>
      <KaKaoLogin
        token={KAKAO_APP_KEY}
        buttonText="kakao"
        onSuccess={responseKakao}
        onFail={console.error}
        onLogout={console.info}
        style={buttonBlock}
      >
        <LogoKakao src={kaakoLogo} alt="kakaoLogo" />
        <ButtoninnerText>카카오 계정으로 로그인</ButtoninnerText>
      </KaKaoLogin>
    </>
  );
};
export default Kakao;
