import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { authUser } from '../../modules/auth';
import logoWhite from '../../public/logoWhite.png';
import LoginContainer from '../../container/LoginContainer';

// STYLED_COMPONENTS
const zUp = keyframes`

  50% {
    transform: translateY(0px);
  }
  70% {
      transform: translateY(-12px);
  }
  100% {
      transform: translateY(0px);
  }
`;

const MainContent = styled.div`
 transform: translate(0,-50%);
    position: fixed;
    top: 50%;
}
`;

const UserContent = styled.div`
  width: 420px;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 90px;
`;
const RegisterButton = styled.button`
  width: 83%;
  font-size: 14px;
  background: white;
  padding: 15px 90px;
  border-radius: 30px;
  border: none;
  color: #333333;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 15px;
`;

const LoginButton = styled.button`
  border: 3px solid white;
  width: 83%;
  font-size: 14px;
  background: none;
  padding: 15px 90px;
  border-radius: 30px;
  /* border: none; */
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const LandingContent = styled.div`
  @media (min-width: 768px) {
    width: 420px;
    left: 50vw;
    border-radius: 27px;
    border: 11px solid #e5e5e5;
    top: 10px;
    height: 95vh;
  }
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  position: fixed;
  overflow: hidden;
  top: 0;
  height: 100vh;
  background: linear-gradient(to right, #f25478, #fa4e46);
`;

const LandingLogo = styled.img`
  width: 220px;
`;

const SpanMessage = styled.span`
  margin: 0 auto;
  color: white;
  font-weight: 700;
  font-size: 13px;
  width: 80%;
  margin-bottom: 25px;
`;

const LandingPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUser());
  }, [dispatch]);

  const onRegisterHandler = () => {
    props.history.push('/register');
  };

  const [loginPopup, setLoginPopup] = useState(false);

  const openLoginModal = () => {
    setLoginPopup(!loginPopup);
  };

  return (
    <>
      <LandingContent>
        <MainContent>
          <LandingLogo src={logoWhite} alt="logo" />
        </MainContent>

        <UserContent>
          <SpanMessage>
            '계정 만들기' 나 '로그인'을 누르시면 이용약관에 동의하는것으로
            간주됩니다. Tindux의 개인정보 취급방침 및 쿠키 정책에서 회원 정보
            처리 방법을 확인하실 수 있습니다.
          </SpanMessage>
          <RegisterButton onClick={onRegisterHandler}>
            계정 만들기
          </RegisterButton>
          {!loginPopup ? (
            <LoginButton onClick={openLoginModal}>로그인</LoginButton>
          ) : (
            <LoginContainer openLoginModal={openLoginModal} />
          )}
        </UserContent>
      </LandingContent>
    </>
  );
};

export default withRouter(LandingPage);
