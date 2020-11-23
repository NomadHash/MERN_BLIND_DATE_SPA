import React, { useState } from 'react';
import InfoEnter from '../components/systems/user_info/InfoEnter';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../modules/information';
import InfoAge from '../components/systems/user_info/InfoAge';
import InfoUserName from '../components/systems/user_info/InfoUserName';
import InfoGender from '../components/systems/user_info/InfoGender';
import InfoUserImage from '../components/systems/user_info/InfoUserImage';
import InfoResidence from '../components/systems/user_info/InfoResidence';
import { updateUserInfo } from '../modules/information';

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
    ({ infoReduce, authReduce }) => ({
      gender: infoReduce.gender,
      age: infoReduce.age,
      name: infoReduce.name,
      residence: infoReduce.residence,
      profileImage: infoReduce.profileImage,
    }),
  );
  const { email } = useSelector(({ authReduce }) => ({
    email: authReduce.userAuth.email,
  }));

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
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let requestBody = {
      gender,
      age,
      name,
      residence,
      profileImage,
      email,
    };
    dispatch(updateUserInfo(requestBody));
  };
  const renderList = [
    <InfoUserName changePages={changePages} onChange={onChange} name={name} />,
    <InfoAge changePages={changePages} onChange={onChange} age={age} />,
    <InfoGender
      changePages={changePages}
      onChange={onChange}
      gender={gender}
    />,
    <InfoResidence
      onChange={onChange}
      residence={residence}
      changePages={changePages}
    />,
    <InfoUserImage
      onChange={onChange}
      profileImage={profileImage}
      changePages={changePages}
      onSubmitHandler={onSubmitHandler}
    />,
  ];
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <>
      <InfoEnter currPage={renderList[enterPage]} />
    </>
  );
};
export default InfoContainer;
