import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../modules/register';
import { withRouter } from 'react-router-dom';

// * IMPORT_COMPONENTS
import Name_email from '../components/systems/user_regist/Name_email';
import Residence from '../components/systems/user_regist/Residence';
import Age_gender from '../components/systems/user_regist/Age_gender';
import ImageUpload from '../components/systems/user_regist/ImageUpload';
import Password from '../components/systems/user_regist/Password';
import logoOnly from '../public/logoOnly.png';

// * =================================
// *       REGISTER_PAGE_CT
// * =================================

//! import Container
import HeaderContainer from './HeaderContainer';

const RegisterContainer = (props) => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState('');
  const [password, setPassword] = useState('');
  const [confilmPassword, setConfilmPassword] = useState('');

  //* USE_DISPATCH
  const dispatch = useDispatch();

  //* =======================
  //* PROPS_HANDLER_FUNCTIONS
  //* =======================
  const onNameHandler = (name) => {
    setName(name);
  };
  const onEmailHandler = (email) => {
    setEmail(email);
  };
  const onGenderHandler = (genderNum) => {
    setGender(genderNum);
  };
  const onAgeHandler = (ageNum) => {
    setAge(Number(ageNum));
  };
  const onImageHandler = (img) => {
    setImages(img);
  };
  const onLocationHandler = (loc) => {
    setLocation(loc);
  };
  const onPasswordHandler = (pwd) => {
    setPassword(pwd);
  };
  const onConfilmPasswordHandler = (confilmPwn) => {
    setConfilmPassword(confilmPwn);
  };

  //* USE_SELECTOR & USE_EFFECT
  const { registerSuccess } = useSelector(({ registerReduce }) => ({
    registerSuccess: registerReduce.registerSuccess,
  }));
  useEffect(() => {
    if (registerSuccess === false) {
      // cleanInput();
    }
    if (registerSuccess) {
      props.history.push('/login');
    }
  }, [registerSuccess, props.history]);

  // * =================================
  // *       HANDLER_FUNCTIONS
  // * =================================
  const onSubmitHandler = (event) => {
    console.log('?');
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

  return (
    <LoginPageContent>
      <HeaderContainer />
      <IntroDiv>
        <IntroImg src={logoOnly} alt="logo" />
        <Introtext>새 계정을 만들어 볼까요?</Introtext>
      </IntroDiv>
      <FormContent>
        <RegistForm onSubmit={onSubmitHandler} encType="multipart/form-data">
          <Age_gender
            onGenderHandler={onGenderHandler}
            onAgeHandler={onAgeHandler}
          />
          <Name_email
            name={name}
            email={email}
            onNameHandler={onNameHandler}
            onEmailHandler={onEmailHandler}
          />
          <Password
            password={password}
            confilmPassword={confilmPassword}
            onPasswordHandler={onPasswordHandler}
            onConfilmPasswordHandler={onConfilmPasswordHandler}
          />
          <Residence name={name} onLocationHandler={onLocationHandler} />
          <ImageUpload onImageHandler={onImageHandler} />
          <LoginBtn type="submit">회원가입</LoginBtn>
        </RegistForm>
      </FormContent>
    </LoginPageContent>
  );
};

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
  background: linear-gradient(to right, #ff5858, #f857a6);
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export default withRouter(RegisterContainer);
