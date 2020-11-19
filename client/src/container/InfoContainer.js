import React, { useState } from 'react';
import InfoEnter from '../components/systems/user_info/InfoEnter';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../modules/information';
import InfoAgeGender from '../components/systems/user_info/InfoAgeGender';
import InfoUserName from '../components/systems/user_info/InfoUserName';

//TODO ======================
//TODO    INFO_CONTAINER (CT)
//TODO ======================

const InfoContainer = () => {
  //* ======================
  //*    USE_DIS_PATCH
  //* ======================
  const dispatch = useDispatch();
  //* ======================
  //*    USE_STATE
  //* ======================
  const [enterPage, setEnterPage] = useState(0);
  //* ======================
  //*    USE_SELECTOR
  //* ======================
  const { gender, age, name, residence, profileImage } = useSelector(
    ({ infoReduce }) => ({
      gender: infoReduce.gender,
      age: infoReduce.age,
      name: infoReduce.name,
      residence: infoReduce.residence,
      profileImage: infoReduce.profileImage,
    }),
  );
  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================
  let pageNum = enterPage;
  const changePages = (direction) => {
    direction === 'next'
      ? setEnterPage((pageNum += 1))
      : setEnterPage((pageNum -= 1));
  };
  const onChange = (name, value) => {
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };
  const renderList = [
    <InfoUserName changePages={changePages} onChange={onChange} name={name} />,
    <InfoAgeGender
      changePages={changePages}
      onChange={onChange}
      gender={gender}
      age={age}
    />,
  ];
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <>
      <InfoEnter
        onChange={onChange}
        currPage={renderList[enterPage]}
        changePages={changePages}
      />
    </>
  );
};

export default InfoContainer;
