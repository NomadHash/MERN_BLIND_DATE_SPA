import React from 'react';
import styled from 'styled-components';
import headerLogo from '../../../public/logo.png';

//* STYLED_COMPONENTS
const HeaderBlock = styled.div`
  top: 0;
  position: fixed;
  width: 100vw;
  background: none;
  height: 57px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  cursor: pointer;
`;

const TitleBtnDiv = styled.div`
  // position: absolute;
  // right: 0;
  // margin-right: 20vw;
`;
const LoginButton = styled.button`
  border: 0;
  padding: 0px 18px;
  height: 37px;
  background: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #ff496c;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #ff5858, #f857a6);
    color: white;
  }
`;
const ArcodianMypageDiv = styled.div`
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.7);
  position: fixed;
  background: #eaeaea;
  width: 136px;
  height: 5vw;
  border-radius: 15px;
  align-items: flex-start;
  display: ${(props) => (props.open === true ? 'flex' : 'none')};
  flex-direction: column;
  padding: 15px;
`;
const MypageBtnSpan = styled.span`
  color: #61dafb;
  font-weight: 600;
  font-size: 15px;
  margin-right: 10px;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #474747;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  padding: 0px;
  margin-bottom: 15px;
  &:hover {
    outline: none;
  }
`;

const Header = ({
  logOutHandler,
  auth,
  loginSuccess,
  openLoginModal,
  onMypageHandler,
  open,
  goRootPage,
}) => {
  return (
    <>
      <HeaderBlock>
        <HeaderLogoWrapper onClick={goRootPage}>
          <LogoImg src={headerLogo} alt="logo" />
        </HeaderLogoWrapper>
        <TitleBtnDiv>
          {auth ? (
            <MypageBtnSpan onClick={onMypageHandler}>
              마이페이지
              <ArcodianMypageDiv open={open}>
                <LogoutButton onClick={logOutHandler}>내 정보</LogoutButton>
                <LogoutButton onClick={logOutHandler}>로그아웃</LogoutButton>
              </ArcodianMypageDiv>
            </MypageBtnSpan>
          ) : (
            <LoginButton onClick={openLoginModal}>로그인</LoginButton>
          )}
        </TitleBtnDiv>
      </HeaderBlock>
    </>
  );
};

export default Header;
