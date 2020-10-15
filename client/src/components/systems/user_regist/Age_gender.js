import React, { useState } from 'react';
import styled from 'styled-components';

// * =========================
// * Age_gender_CP
// * =========================

const Age_gender = ({ onGenderHandler }) => {
  const [choice, setChoice] = useState([]);
  const gender = [
    { gender: '남', number: 0 },
    { gender: '여', number: 1 },
  ];

  const genderHandler = (genderNum) => {
    setChoice(genderNum);
    onGenderHandler(genderNum);
  };

  const { onClick, nonClick } = GenderBtnstyles;
  const repeatElement = gender.map((ele) => {
    return (
      <li key={ele.number}>
        <button
          type="button"
          onClick={() => {
            genderHandler(ele.number);
          }}
          style={choice === ele.number ? onClick : nonClick}
        >
          {ele.gender}
        </button>
      </li>
    );
  });
  return (
    <ContentDiv>
      <TitleH2>성별</TitleH2>
      <ButtonList>{repeatElement}</ButtonList>
      <TitleH2>나이</TitleH2>
      <select name="fruit">
        <option value="바나나">바나나</option>
        <option value="사과">사과</option>
        <option value="파인애플" selected="selected">
          파인애플
        </option>
      </select>
    </ContentDiv>
  );
};

// * =========================
// * CONDITION_STYLES
// * =========================

const GenderBtnstyles = {
  onClick: {
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    background: 'rgb(249, 70, 112)',
    fontSize: '15px',
    borderRadius: '16px',
    padding: '5px 21px',
    cursor: 'pointer',
  },
  nonClick: {
    border: 'none',
    color: 'rgb(249, 70, 112)',
    fontWeight: 'bold',
    background: 'white',
    boxShadow: '0 0 0 2px rgb(249, 70, 112) inset',
    fontSize: '15px',
    borderRadius: '16px',
    padding: '5px 21px',
    cursor: 'pointer',
  },
};

// * =========================
// * STYLED_COMPONENTS
// * =========================

const ContentDiv = styled.div``;

const TitleH2 = styled.h2`
  margin-bottom: 8px;
  font-size: 30px;
  color: #5f5f5f;
  font-weight: 400;
  margin-top: 29px;
  cursor: pointer;
`;

const ButtonList = styled.ul`
     display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 130px;
        list-style: none;
    padding: 0;
}
`;

export default Age_gender;
