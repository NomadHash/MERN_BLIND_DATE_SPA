import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GiCancel } from 'react-icons/gi';

const boxFade = keyframes`
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
  background: white;
  position: fixed;
  border-radius: 10px;
  margin: auto 50vw;
  transform: translate(-50%, 10%);
  animation: ${boxFade} 0.25s forwards;
`;

const Background = styled.div`
  background: #080808;
  width: 100vw;
  height: 100vh;
  position: fixed;
  opacity: 0.6;
  z-index: 1;
`;

const QuitButton = styled.button`
  font-size: 24px;
  position: absolute;
  right: 5px;
  top: 9px;
  color: gray;
  background: none;
  border: none;
  cursor: pointer;
`;

const LoginContainer = ({ goLoginPage }) => {
  return (
    <>
      <Background />
      <LoginModalDiv>
        <QuitButton onClick={goLoginPage}>
          <GiCancel />
        </QuitButton>
      </LoginModalDiv>
    </>
  );
};

export default LoginContainer;
