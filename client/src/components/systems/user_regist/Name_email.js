import React from 'react';
import styled from 'styled-components';

const Name_email = ({ name, email, onNameHandler, onEmailHandler }) => {
  let conditonErrMessage = null;

  const NameHandler = (event) => {
    onNameHandler(event.target.value);
  };
  const EmailHandler = (event) => {
    onEmailHandler(event.target.value);
    // conditonErrMessage = <span></span>;
  };

  const cleanInput = () => {
    // setEmail('');
    conditonErrMessage = <ErrMsg>이미 존재하는 이메일 입니다.</ErrMsg>;
  };
  return (
    <div>
      <RegisterInputText>이름</RegisterInputText>
      <RegisterInput
        type="text"
        value={name}
        onChange={NameHandler}
        style={{ width: '140px' }}
      />
      <RegisterInputText>이메일 주소</RegisterInputText>
      <RegisterInput
        type="email"
        value={email}
        onChange={EmailHandler}
        style={{ width: '250px' }}
      />
      {conditonErrMessage}
    </div>
  );
};

const ErrMsg = styled.h3`
  color: firebrick;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  margin: 5px 10px 0;
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

export default Name_email;
