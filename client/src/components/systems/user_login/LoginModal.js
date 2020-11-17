//IMPORT_MODULES
import React from 'react';
import styled, { keyframes } from 'styled-components';
import LoginForm from './LoginForm';
import SnsLogin from './pass_port/SnsLogin';
import LogoOnly from '../../../public/logoOnly.png';

// * STYLED_COMPONENTS
const BoxFadeKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LoginModalDiv = styled.div`
  border-radius: 10px;
  height: 519px;
  width: 300px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${BoxFadeKeyframes} 0.5s forwards;
`;

const LoginImg = styled.img`
  width: 53px;
  margin-bottom: 7px;
`;

const ModalHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 45px;
`;

const LoginTextH2 = styled.h2`
  color: white;
  margin: 0;
`;
const UnderLineDiv = styled.div`
  background: #ebebeb;
  border-radius: 23px;
  top: 376px;
  position: absolute;
  top: 10;
  height: 2px;
  width: 268px;
`;

// * COMPONENT
const LoginModal = ({
  openLoginModal,
  onSubmitHandler,
  loginFormOnChange,
  oAuthLoginHandler,
}) => {
  return (
    <>
      {/* <ModalHeaderDiv>
          <LoginImg src={LogoOnly} alt="logo" />
          <LoginTextH2>로그인</LoginTextH2>
        </ModalHeaderDiv> */}
      {/* <LoginForm
          onSubmitHandler={onSubmitHandler}
          loginFormOnChange={loginFormOnChange}
        />{' '}
        {/* Login Form Componet */}
      {/* <UnderLineDiv></UnderLineDiv> */}
      <SnsLogin oAuthLoginHandler={oAuthLoginHandler} />{' '}
      {/* PassPort SNS Login Componet*/}
    </>
  );
};

export default LoginModal;
