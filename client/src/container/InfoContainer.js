import React, { useEffect } from 'react';
import InfoFrom from '../components/systems/user_info/InfoForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../modules/information';
import { logOutUser } from '../modules/auth';
const InfoContainer = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('A');
  //   dispatch(logOutUser());
  // }, []);

  const onChange = (name, value) => {
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  //* USE_SELECTOR & USE_EFFECT
  const { gender, age, name, residence, profileImage } = useSelector(
    ({ infoReduce }) => ({
      gender: infoReduce.gender,
      age: infoReduce.age,
      name: infoReduce.name,
      residence: infoReduce.residence,
      profileImage: infoReduce.profileImage,
    }),
  );
  return (
    <>
      <InfoFrom onChange={onChange} />
    </>
  );
};

export default InfoContainer;
