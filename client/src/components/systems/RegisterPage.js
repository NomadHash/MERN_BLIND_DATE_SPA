import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../modules/register';
import { withRouter } from 'react-router-dom';
import Residence from '../resist/Residence';
import Age_gender from '../resist/Age_gender';
import ImageUploadContainer from '../../container/ImageUploadContainer';

import logoOnly from '../../public/logoOnly.png';

// * =================================
// *       Register-Page
// * =================================

//import Container
import HeaderContainer from '../../container/HeaderContainer';
import FileUpload from '../utils/FileUpload';
//Condition DOM
let conditonErrMessage = null;

const RegisterPage = (props) => {
  // State
  const [images, setImages] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confilmPassword, setConfilmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  // Handler function
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
    conditonErrMessage = <span></span>;
  };
  const onNameHandler = (event) => {
    setName(event.target.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onConfilmPasswordHandler = (event) => {
    setConfilmPassword(event.target.value);
  };

  const dispatch = useDispatch();

  const { registerSuccess } = useSelector(({ registerReduce }) => ({
    registerSuccess: registerReduce.registerSuccess,
  }));

  // * =================================
  // *       HANDLER_FUNCTIONS
  // * =================================
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confilmPassword) {
      alert('패스워드가 일치하지 않습니다.');
    } else {
      let requestBody = {
        email,
        name,
        password,
        profileImage: images,
      };
      dispatch(registerUser(requestBody));
    }
  };
  const cleanInput = () => {
    setEmail('');
    conditonErrMessage = <ErrMsg>이미 존재하는 이메일 입니다.</ErrMsg>;
  };

  const updataImages = (newImages) => {
    setImages(newImages);
  };

  useEffect(() => {
    if (registerSuccess === false) {
      cleanInput();
    }
    if (registerSuccess) {
      props.history.push('/login');
    }
  }, [registerSuccess, props.history]);

  return (
    <LoginPageContent>
      <HeaderContainer />
      <IntroDiv>
        <IntroImg src={logoOnly} alt="logo" />
        <Introtext>새 계정을 만들어 볼까요?</Introtext>
      </IntroDiv>
      <FormContent>
        <RegistForm onSubmit={onSubmitHandler} encType="multipart/form-data">
          <RegisterInputText>이름</RegisterInputText>
          <RegisterInput
            type="text"
            value={name}
            onChange={onNameHandler}
            style={{ width: '140px' }}
          />
          <RegisterInputText>이메일 주소</RegisterInputText>
          <RegisterInput
            type="email"
            value={email}
            onChange={onEmailHandler}
            style={{ width: '250px' }}
          />
          {conditonErrMessage}
          <Age_gender />
          <Residence name={name} />
          <ImageUploadContainer />

          <RegisterInputText>패스워드</RegisterInputText>
          <RegisterInput
            type="password"
            value={password}
            onChange={onPasswordHandler}
            style={{ width: '170px' }}
          />
          <RegisterInputText>패스워드 확인</RegisterInputText>
          <RegisterInput
            type="password"
            value={confilmPassword}
            onChange={onConfilmPasswordHandler}
            style={{ width: '170px' }}
          />
          <LoginBtn>회원가입</LoginBtn>
        </RegistForm>
      </FormContent>
    </LoginPageContent>
  );
};

//=================================
//       Styled-Component
//=================================

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

const FormContent = styled.div`
  background: white;
  border-radius: 30px;
  padding: 40px;
`;

const RegistForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
`;

const RegisterInputText = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 30px;
  color: #5f5f5f;
  font-weight: 400;
  margin-top: 29px;
`;

const RegisterInput = styled.input`
  border: 2px solid #f94670;
  border-radius: 20px;
  padding: 6px 24px;
  font-size: 22px;
  &:focus {
    outline: none;
  }
`;

const ErrMsg = styled.h3`
  color: firebrick;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  margin: 5px 10px 0;
`;

const LoginBtn = styled.button`
  color: white;
  background: #49709f;
  font-weight: 500;
  border: none;
  border-radius: 26px;
  font-size: 21px;
  padding: 11px;
  display: block;
  margin-top: 2vw;
  background: linear-gradient(to right, #ff5858, #f857a6);
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export default withRouter(RegisterPage);
