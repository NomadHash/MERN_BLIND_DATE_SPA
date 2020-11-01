import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { logOutUser } from '../../../modules/auth';
import { useDispatch } from 'react-redux';
import headerLogo from '../../../public/logo.png';
import LoginContainer from '../../../container/LoginContainer';

//* STYLED_COMPONENTS
const HeaderDiv = styled.div`
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

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  cursor: pointer;
`;

const TitleBtn = styled.div`
  // position: absolute;
  // right: 0;
  // margin-right: 20vw;
`;
const LoginBtn = styled.button`
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
    box-shadow: 0px 4px 0px #ff496c;
    outline: none;
  }
`;
const ArcodianMypage = styled.div`
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
const MypageBtn = styled.span`
  color: #61dafb;
  font-weight: 600;
  font-size: 15px;
  margin-right: 10px;
`;

const LogoutBtn = styled.button`
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

const Header = (props) => {
  //* CONDITION_BUTTON
  let conditonRegistBtn = null;
  let conditonLoginBtn = null;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);

  // * ==================
  // * React-Router
  // * ==================
  const goLoginPage = () => {
    setLoginPopup(true);
    if (loginPopup) {
      setLoginPopup(false);
    }
  };
  const goRootPage = () => {
    props.history.push('/');
  };

  // * ==================
  // * HANDLER_FUNCTIONS
  // * ==================
  const onClickHandler = () => {
    dispatch(logOutUser());
  };
  const onMypageHandler = () => {
    setOpen(!open);
  };

  // * ====================
  // * CONDITION_RENDERING
  // * ====================

  props.auth === true
    ? (conditonLoginBtn = (
        <MypageBtn onClick={onMypageHandler}>
          마이페이지
          <ArcodianMypage open={open}>
            <LogoutBtn onClick={onClickHandler}>내 정보</LogoutBtn>
            <LogoutBtn onClick={onClickHandler}>로그아웃</LogoutBtn>
          </ArcodianMypage>
        </MypageBtn>
      ))
    : (conditonLoginBtn = <LoginBtn onClick={goLoginPage}>로그인</LoginBtn>);

  // * ====================
  // * STYLED_COMPONENT
  // * ====================

  return (
    <>
      <HeaderDiv>
        <HeaderLogo onClick={goRootPage}>
          <LogoImg src={headerLogo} alt="logo" />
        </HeaderLogo>
        <TitleBtn>
          {conditonLoginBtn}
          {conditonRegistBtn}
        </TitleBtn>
      </HeaderDiv>
      {loginPopup ? <LoginContainer goLoginPage={goLoginPage} /> : null}
    </>
  );
};

export default withRouter(Header);
