import React from 'react';
import styled from 'styled-components';

const Password = ({
  password,
  confilmPassword,
  onPasswordHandler,
  onConfilmPasswordHandler,
}) => {
  const passwordHandler = (event) => {
    onPasswordHandler(event.target.value);
  };
  const confilmPasswordHandler = (event) => {
    onConfilmPasswordHandler(event.target.value);
    // conditonErrMessage = <span></span>;
  };
  return (
    <div>
      <RegisterInputText>패스워드</RegisterInputText>
      <RegisterInput
        type="password"
        value={password}
        onChange={passwordHandler}
        style={{ width: '170px' }}
      />
      <RegisterInputText>패스워드 확인</RegisterInputText>
      <RegisterInput
        type="password"
        value={confilmPassword}
        onChange={confilmPasswordHandler}
        style={{ width: '170px' }}
      />
    </div>
  );
};

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
export default Password;
