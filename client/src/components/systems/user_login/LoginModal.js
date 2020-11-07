//IMPORT_MODULES
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GiCancel } from 'react-icons/gi';
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
  z-index: 1;
  top: 0px;
  background: white;
  position: fixed;
  border-radius: 10px;
  margin: 50vh 50vw;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 600px;
  animation: ${BoxFadeKeyframes} 0.5s forwards;
`;

const LoginImg = styled.img`
  width: 53px;
  margin-bottom: 7px;
`;

const BackgroundDiv = styled.div`
  top: 0px;
  background: #080808;
  width: 100vw;
  height: 100vh;
  position: fixed;
  opacity: 0.6;
  z-index: 1;
`;

const QuitButtonButton = styled.button`
  font-size: 24px;
  position: absolute;
  right: 5px;
  top: 9px;
  color: gray;
  background: none;
  border: none;
  cursor: pointer;
`;
const ModalHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 45px;
`;

const LoginTextH2 = styled.h2`
  color: #464646;
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
const LoginModal = ({ openLoginModal, onSubmitHandler, loginFormOnChange }) => {
  return (
    <>
      <BackgroundDiv />
      <LoginModalDiv>
        <QuitButtonButton onClick={openLoginModal}>
          <GiCancel />
        </QuitButtonButton>
        <ModalHeaderDiv>
          <LoginImg src={LogoOnly} alt="logo" />
          <LoginTextH2>로그인</LoginTextH2>
        </ModalHeaderDiv>
        <LoginForm
          onSubmitHandler={onSubmitHandler}
          loginFormOnChange={loginFormOnChange}
        />{' '}
        {/* Login Form Componet */}
        <UnderLineDiv></UnderLineDiv>
        <SnsLogin /> {/* PassPort SNS Login Componet*/}
      </LoginModalDiv>
    </>
  );
};

export default LoginModal;
