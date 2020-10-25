import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Name_email from '../user_regist/Name_email';
import Residence from '../user_regist/Residence';
import Age_gender from '../user_regist/Age_gender';
import ImageUpload from '../user_regist/ImageUpload';
import Password from '../user_regist/Password';

// * ==============================
// *       Styled-Component
// *===============================

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

const RegisterFrom = ({ onChange }) => {
  return (
    <>
      <FormContent>
        <RegistForm
        // onSubmit={onSubmitHandler} encType="multipart/form-data"
        >
          <Age_gender onChange={onChange} />
          <Name_email onChange={onChange} />
          <Password onChange={onChange} />
          <Residence onChange={onChange} />
          <ImageUpload onChange={onChange} />
          <LoginBtn type="submit">회원가입</LoginBtn>
        </RegistForm>
      </FormContent>
    </>
  );
};

export default RegisterFrom;
