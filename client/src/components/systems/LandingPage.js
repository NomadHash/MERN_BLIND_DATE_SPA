import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { authUser } from "../../modules/auth";
import backGround from "../../public/background.png";

//import Container
import HeaderContainer from "../../container/HeaderContainer";

//LogoImg

const LandingPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUser());
  }, []);

  const onRegisterHandler = () => {
    props.history.push("/register");
  };
  return (
    <>
      <LandingContent>
        <HeaderContainer />
        <MainContent>
          <SecondTitle>매치. 채팅. 디스커버리</SecondTitle>
          <RegisterButton onClick={onRegisterHandler}>
            계정 만들기
          </RegisterButton>
        </MainContent>
      </LandingContent>
      <div style={{ padding: "20px 25vw" }}>
        <span style={{ color: "gray" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </div>
    </>
  );
};
const MainContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 345px;
`;
const RegisterButton = styled.button`
  font-size: 16px;
  /* background: #f857a6; */
  background: -webkit-linear-gradient(to right, #ff5858, #f857a6);
  background: linear-gradient(to right, #ff5858, #f857a6);
  padding: 17px 90px;
  border-radius: 30px;
  border: none;
  color: white;
  /* background: #ff77ed; */
  font-weight: 600;
`;
const LandingContent = styled.div`
  height: 750px;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      rgba(0.2, 0.7, 0.7, 0.7),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 1)
    ),
    url(${backGround});
`;

const SecondTitle = styled.h1`
  font-weight: 700;
  font-size: 8vw;
  color: white;
  margin: 0;
  text-align: center;
  position: relative;
  margin-bottom: 80px;
`;

export default withRouter(LandingPage);
