import React from 'react';
import FaceBookLogin from './FaceBookLogin';
import KakaoLogin from './KakaoLogin';
import styled from 'styled-components';

// STYLED-COMPONENTS
const SC_SnsLogin_div = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
`;

const SnsLogin = () => {
  return (
    <SC_SnsLogin_div>
      <FaceBookLogin />
      <KakaoLogin />
    </SC_SnsLogin_div>
  );
};

export default SnsLogin;
