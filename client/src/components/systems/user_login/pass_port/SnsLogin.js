import React from 'react';
import FaceBook from './FaceBook';
import Kakao from './Kakao';
import styled from 'styled-components';

// STYLED-COMPONENTS
const SnsLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 410px;
  align-items: center;
  height: 80px;
`;

const SnsLogin = ({ oAuthLoginHandler }) => {
  return (
    <SnsLoginDiv>
      <FaceBook oAuthLoginHandler={oAuthLoginHandler} />
      <Kakao oAuthLoginHandler={oAuthLoginHandler} />
    </SnsLoginDiv>
  );
};

export default SnsLogin;
