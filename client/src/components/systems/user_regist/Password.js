import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// * =================================
// *       PASS_WORD
// * =================================

// * STYLED_COMPONENT
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

const Password = ({ onChange }) => {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const { password, confilmPassword } = useSelector((registerReduce) => ({
    password: registerReduce.password,
    confilmPassword: registerReduce.confilmPassword,
  }));

  return (
    <div>
      <RegisterInputText>패스워드</RegisterInputText>
      <RegisterInput
        name="password"
        type="password"
        value={password}
        onChange={onChangeHandler}
        style={{ width: '170px' }}
      />
      <RegisterInputText>패스워드 확인</RegisterInputText>
      <RegisterInput
        name="passwordConfirm"
        type="password"
        value={confilmPassword}
        onChange={onChangeHandler}
        style={{ width: '170px' }}
      />
    </div>
  );
};
export default Password;
