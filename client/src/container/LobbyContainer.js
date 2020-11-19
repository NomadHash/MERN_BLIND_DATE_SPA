import React, { useEffect } from 'react';
import Lobby from '../components/contents/lobby/Lobby';
import { useSelector } from 'react-redux';

const LobbyContainer = ({ history }) => {
  const { enteredUserInformation } = useSelector(({ authReduce }) => {
    return {
      enteredUserInformation: authReduce.userAuth?.enteredUserInformation,
    };
  });
  useEffect(() => {
    if (!enteredUserInformation) {
      console.log('유저 정보입력 ');
      history.push('/agreement');
    }
  }, [enteredUserInformation]);

  return (
    <>
      <Lobby />
    </>
  );
};

export default LobbyContainer;
