import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';

const FaceBookLoginButton = styled.button`
  border: none;
  border-radius: 9px;
  font-size: 17px;
  width: 284px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  font-weight: 500;
  background: #4064ac;
  font-size: 14px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 4px 0px;
`;
const ButtonInnerDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  right: 22px;
`;

const ButtoninnerText = styled.h3`
  font-weight: 500;
  margin: 0;
  font-size: 14px;
`;

const FaceBookLogin = () => {
  return (
    <FaceBookLoginButton>
      <ButtonInnerDiv>
        <FaFacebookSquare
          style={{
            marginRight: '23px',
            fontSize: '26px',
          }}
        />
        <ButtoninnerText>페이스북 계정으로 로그인</ButtoninnerText>
      </ButtonInnerDiv>
    </FaceBookLoginButton>
  );
};

export default FaceBookLogin;
