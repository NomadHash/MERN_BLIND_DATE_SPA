import React from 'react';
import styled from 'styled-components';
import { GrFormPrevious } from 'react-icons/gr';
//* ======================
//*     STYLED_COMPONENT
//* ======================
const ResponseBlock = styled.div`
  @media (min-width: 768px) {
    width: 420px;
    left: 50vw;
    position: absolute;
  }
  overflow: hidden;
  flex-direction: column;
  left: 0;
  width: 100%;
  background: white;
  align-items: center;

  display: flex;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  height: 100vh;
`;

const PrevBtn = styled.button`
  position: fixed;
  left: 0;
  top: 0;
  font-size: 90px;
  opacity: 0.2;
  background: none;
  border: none;
  color: #afafaf;
  cursor: pointer;
`;
//TODO ======================
//TODO    INFO_CONTAINER (CP)
//TODO ======================
const InfoEnter = ({ currPage, changePages }) => {
  //* ======================
  //*    RENDER
  //* ======================
  return <ResponseBlock>{currPage}</ResponseBlock>;
};

export default InfoEnter;
