import React, { useState } from 'react';
import styled from 'styled-components';

const Age_gender = () => {
  const [choice, setChoice] = useState('black');
  const [gender, setGender] = useState([
    { gender: '남', number: 0 },
    { gender: '여', number: 1 },
  ]);

  const genderHandler = (genderNum) => {
    setChoice(genderNum);
  };
  const repeatElement = gender.map((ele) => {
    return (
      <li>
        <button
          onClick={() => {
            genderHandler(ele.number);
          }}
          style={{
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            background: '#f7544c',
            fontSize: '15px',
            borderRadius: '16px',
            padding: '5px 21px',
            cursor: 'pointer',
          }}
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
    </ContentDiv>
  );
};

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

const GenderBtn = styled.button`
  border: none;
  color: white;
  font-weight: bold;
  background: #f7544c;
  font-size: 15px;
  border-radius: 16px;
  padding: 5px 21px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export default Age_gender;
