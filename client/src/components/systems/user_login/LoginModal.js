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
    width: 0;
    height:0;
    opacity: 0;
  }
  100% {
    width: 400px;
    height: 600px;
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
  animation: ${BoxFadeKeyframes} 0.25s forwards;
`;

const LoginImg = styled.img`
  width: 53px;
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
// * COMPONENT
const LoginModal = ({ goLoginPage, onSubmitHandler, loginFormOnChange }) => {
  return (
    <>
      <BackgroundDiv />
      <LoginModalDiv>
        <LoginImg src={LogoOnly} alt="logo" />
        <QuitButtonButton onClick={goLoginPage}>
          <GiCancel />
        </QuitButtonButton>
        <LoginForm
          onSubmitHandler={onSubmitHandler}
          loginFormOnChange={loginFormOnChange}
        />{' '}
        {/* Login Form Componet */}
        <SnsLogin /> {/* PassPort SNS Login Componet*/}
      </LoginModalDiv>
    </>
  );
};

export default LoginModal;
