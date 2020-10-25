import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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

const Name_email = ({ onChange }) => {
  const { name, email, error } = useSelector(({ registerReduce }) => ({
    name: registerReduce.name,
    email: registerReduce.email,
    error: registerReduce.error,
  }));

  let conditonErrMessage = <ErrMsg>이미 존재하는 이메일 입니다.</ErrMsg>;

  useEffect(() => {
    if (error) {
      console.log('clean');
      onChange('email', '');
    }
  }, [error]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
    if (error) onChange('error', '');
  };

  return (
    <div>
      <RegisterInputText>이름</RegisterInputText>
      <RegisterInput
        type="text"
        name="name"
        value={name}
        onChange={onChangeHandler}
        style={{ width: '140px' }}
      />
      <RegisterInputText>이메일 주소</RegisterInputText>
      <RegisterInput
        type="email"
        name="email"
        value={email}
        onChange={onChangeHandler}
        style={{ width: '250px' }}
      />
      {error && conditonErrMessage}
    </div>
  );
};

export default Name_email;
