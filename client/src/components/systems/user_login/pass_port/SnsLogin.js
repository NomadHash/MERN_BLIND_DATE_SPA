import React from 'react';

import Normal from './Nomal';
import FaceBook from './FaceBook';
import Kakao from './Kakao';

import styled from 'styled-components';

// STYLED-COMPONENTS
const SnsLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-items: center;
`;

const SnsLogin = ({ oAuthLoginHandler }) => {
  return (
    <SnsLoginDiv>
      <Normal></Normal>
      <FaceBook oAuthLoginHandler={oAuthLoginHandler} />
      <Kakao oAuthLoginHandler={oAuthLoginHandler} />
    </SnsLoginDiv>
  );
};

export default SnsLogin;
