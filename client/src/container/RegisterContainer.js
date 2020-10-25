// * IMPORT_MODULES
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../modules/register';
import { withRouter } from 'react-router-dom';
import { changeField } from '../modules/register';

// * IMPORT_COMPONENTS
import RegisterFrom from '../components/systems/user_regist/RegisterFrom';

//* IMPORT_CONTAINER
import HeaderContainer from './HeaderContainer';
import logoOnly from '../public/logoOnly.png';

// * ==============================
// *       Styled-Component
// *===============================

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const IntroImg = styled.img`
  width: 27vw;
  animation: ${boxFade} 1s forwards;
`;

const IntroDiv = styled.div`
  margin-top: 80px;
  align-items: center;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;

const Introtext = styled.h2`
  animation: ${boxFade} 4s forwards;
  color: #495863;
  font-size: 75px;
  font-weight: 500;
  margin: 40px 0;
`;

const LoginPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const RegisterContainer = (props) => {
  //* USE_DISPATCH
  const dispatch = useDispatch();

  //* ON_CHANGE & ON_SUBMIT
  const onChange = (name, value) => {
    // const { name, value } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  //* USE_SELECTOR & USE_EFFECT
  const { registerSuccess } = useSelector(({ registerReduce }) => ({
    registerSuccess: registerReduce.registerSuccess,
  }));
  useEffect(() => {
    if (registerSuccess === false) {
    }
    if (registerSuccess) {
      props.history.push('/login');
    }
  }, [registerSuccess, props.history]);

  // * =================================
  // *       HANDLER_FUNCTIONS
  // * =================================
  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   if (password !== confilmPassword) {
  //     alert('패스워드가 일치하지 않습니다.');
  //   } else {
  //     let requestBody = {
  //       email,
  //       name,
  //       password,
  //       profileImage: images,
  //     };
  //     dispatch(registerUser(requestBody));
  //   }
  // };
  //* VIRTURE_DOM
  return (
    <LoginPageContent>
      <HeaderContainer />
      <IntroDiv>
        <IntroImg src={logoOnly} alt="logo" />
        <Introtext>새 계정을 만들어 볼까요?</Introtext>
      </IntroDiv>
      <RegisterFrom onChange={onChange} />
    </LoginPageContent>
  );
};

export default withRouter(RegisterContainer);
