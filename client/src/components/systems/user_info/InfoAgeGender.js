import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GrFormPrevious } from 'react-icons/gr';
// * =================================
// *       AGE_GENDER
// * =================================
// * STYLED_COMPONENT
const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const BlockDiv = styled.div`
  width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 10px;
  flex-direction: column;
  animation: ${boxFade} 0.6s forwards;
`;
const RegisterInputText = styled.h2`
  font-size: 50px;
  font-weight: 400;
  color: #303030;
  margin-bottom: 40px;
  margin-top: 25px;
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

const AgeSelect = styled.select`
  margin-bottom: 10px;
  font-weight: 600;
  color: #aaaaaa;
  background: none;
  font-size: 30px;
  border-radius: 32px;
  border: none;
  padding: 5px 10px;
`;
const PrevBtn = styled.button`
  position: relative;
  right: 160px;
  top: 0;
  font-size: 90px;
  opacity: 0.2;
  background: none;
  border: none;
  color: #afafaf;
  cursor: pointer;
`;
//TODO ======================
//TODO    AGE_GENDER (CP)
//TODO ======================
const InfoAgeGender = ({ onChange, changePages, gender, age }) => {
  //* ======================
  //*    USE_STATE
  //* ======================
  //* =======================
  //*   VARIABLE || FUNCTIONS
  //* =======================
  const ageList = [
    {
      age: '20 ~ 24',
      number: 1,
    },
    {
      age: '25 ~ 29',
      number: 2,
    },
    {
      age: '30 ~ 34',
      number: 3,
    },
    {
      age: '35 ~ 40',
      number: 4,
    },
  ];

  const ageHandler = (event) => {
    const { name, value } = event.target;
    onChange(name, Number(value));
  };
  //* ========================
  //*   ITERATOR_RENDERING
  //* ========================
  const ageRepeatElement = ageList.map((ele) => {
    return (
      <option key={ele.number} value={ele.number}>
        {ele.age}
      </option>
    );
  });
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <BlockDiv>
      <PrevBtn>
        <GrFormPrevious onClick={() => changePages('prev')} />
      </PrevBtn>
      <RegisterInputText>
        내<br />
        나이:
      </RegisterInputText>
      <AgeSelect onChange={ageHandler} value={age} name="age">
        {ageRepeatElement}
      </AgeSelect>
      <Strong>나이는 공개됩니다.</Strong>
      <ContinueBtn onClick={() => changePages('next')}>계속</ContinueBtn>
    </BlockDiv>
  );
};
export default InfoAgeGender;
