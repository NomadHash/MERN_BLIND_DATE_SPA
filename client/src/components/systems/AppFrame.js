import React from 'react';
import LandingPage from './LandingPage';
import styled from 'styled-components';
import logo from '../../public/logoWhite.png';

const BlockFrame = styled.div`
  position: relative;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.5)
    ),
    url(/static/media/background.b2225a1e.png);
  background-size: cover;
  height: 100vh;
`;

const IntroduceBlock = styled.div`
  @media (min-width: 768px) {
    position: relative;
    width: 601px;
    left: 64px;
    display: block;
  }
  display: none;
`;

const LogoImg = styled.img`
  @media (min-width: 768px) {
    top: 45px;
    position: absolute;
    width: 511px;
  }
`;
const AppFrame = () => {
  return (
    <>
      <BlockFrame>
        <IntroduceBlock>
          <LogoImg src={logo} alt="logo" />
        </IntroduceBlock>
        <LandingPage />
      </BlockFrame>
    </>
  );
};

export default AppFrame;
