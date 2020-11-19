import React from 'react';
import styled, { keyframes } from 'styled-components';
//* ======================
//*     STYLED_COMPONENT
//* ======================
const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const BlockDiv = styled.div`
  position: fixed;
  top: 100px;
  display: flex;
  flex-direction: column;
  animation: ${boxFade} 0.6s forwards;
`;
const RegisterInputText = styled.h2`
  font-size: 50px;
  font-weight: 400;
  color: #303030;
`;
const RegisterInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 3px solid #d2d2d2;
  font-size: 27px;
  padding: 6px 0px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;
const Strong = styled.strong`
  font-size: 15px;
  font-weight: 500;
  color: #9d9d9d;
  text-align: center;
  margin-bottom: 90px;
`;
const ContinueBtn = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  color: #afafaf;
  cursor: pointer;
`;
//TODO ======================
//TODO    INFO_USER_NAME
//TODO ======================
const InfoUserName = ({ onChange, changePages, name }) => {
  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <BlockDiv>
      <RegisterInputText>이름:</RegisterInputText>
      <RegisterInput
        placeholder="이름"
        type="text"
        name="name"
        value={name}
        onChange={onChangeHandler}
        required
      />
      <Strong>Tindux에는 다음과 같이 표시됩니다.</Strong>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <ContinueBtn onClick={() => changePages('next')}>계속</ContinueBtn>
      </div>
    </BlockDiv>
  );
};

export default InfoUserName;
