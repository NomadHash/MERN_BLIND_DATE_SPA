import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import InfoEnter from '../components/systems/user_info/InfoEnter';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../modules/information';
import InfoAge from '../components/systems/user_info/InfoAge';
import InfoUserName from '../components/systems/user_info/InfoUserName';
import InfoGender from '../components/systems/user_info/InfoGender';
import InfoUserImage from '../components/systems/user_info/InfoUserImage';
import InfoResidence from '../components/systems/user_info/InfoResidence';
import { updateUserInfo } from '../modules/information';
import { authUser } from '../modules/auth';

//TODO ======================
//TODO    INFO_CONTAINER (CT)
//TODO ======================
const InfoContainer = ({ history }) => {
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
  const {
    gender,
    age,
    name,
    residence,
    profileImage,
    enteredUserInformation,
  } = useSelector(({ infoReduce }) => ({
    gender: infoReduce.gender,
    age: infoReduce.age,
    name: infoReduce.name,
    residence: infoReduce.residence,
    profileImage: infoReduce.profileImage,
    enteredUserInformation: infoReduce.enteredUserInformation,
  }));
  const { email, isUpdate } = useSelector(({ authReduce }) => ({
    email: authReduce.userAuth.email,
    isUpdate: authReduce.userAuth.enteredUserInformation,
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
      enteredUserInformation: true,
    };
    dispatch(updateUserInfo(requestBody));
  };

  useEffect(() => {
    if (enteredUserInformation) {
      dispatch(authUser());
    }
  }, [dispatch, enteredUserInformation]);

  useEffect(() => {
    if (isUpdate) {
      history.push('/lobby');
    }
  }, [isUpdate, history]);
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
      ß
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
export default withRouter(InfoContainer);
