import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
require('dotenv').config();
const FACE_BOOK_APP_KEY = process.env.REACT_APP_FACE_BOOK_APP_KEY;

const FaceBookLoginButton = styled.button`
  border: none;
  border-radius: 9px;
  font-size: 17px;
  width: 284px;
  font-weight: 700;
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

const FaceBookLogin = ({ oAuthLoginHandler }) => {
  const responseFacebook = (response) => {
    console.log(response);
    const { id, email } = response;
    oAuthLoginHandler(Number(id), email);
  };
  return (
    <FacebookLogin
      appId={FACE_BOOK_APP_KEY}
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      icon={
        <FaFacebookSquare
          style={{
            marginRight: '23px',
            fontSize: '26px',
          }}
        />
      }
      render={(renderProps) => (
        <FaceBookLoginButton>
          <ButtonInnerDiv onClick={renderProps.onClick}>
            <FaFacebookSquare
              style={{
                marginRight: '23px',
                fontSize: '26px',
              }}
            />
            <ButtoninnerText>페이스북 계정으로 로그인</ButtoninnerText>
          </ButtonInnerDiv>
        </FaceBookLoginButton>
      )}
    ></FacebookLogin>
  );
};

export default FaceBookLogin;
