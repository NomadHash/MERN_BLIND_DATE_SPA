import React from 'react';
import FaceBookLogin from './FaceBookLogin';
import KakaoLogin from './KakaoLogin';
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

const SnsLogin = () => {
  return (
    <SnsLoginDiv>
      <FaceBookLogin />
      <KakaoLogin />
    </SnsLoginDiv>
  );
};

export default SnsLogin;
