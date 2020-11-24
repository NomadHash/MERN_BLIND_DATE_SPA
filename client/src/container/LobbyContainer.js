import React, { useEffect } from 'react';
import Lobby from '../components/contents/lobby/Lobby';
import { useSelector } from 'react-redux';
import { logOutUser } from '../modules/auth';
import { useDispatch } from 'react-redux';
import { authUser, loginUser } from '../modules/auth';
import infoReduce from '../modules/information';

const LobbyContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { loginSuccess, auth, enteredUserInformation } = useSelector(
    ({ authReduce }) => {
      return {
        auth: authReduce.userAuth?.isAuth,
        loginSuccess: authReduce.loginSuccess,
        enteredUserInformation: authReduce.userAuth?.enteredUserInformation,
      };
    },
  );

  useEffect(() => {
    if (!enteredUserInformation) {
      history.push('/agreement');
    }
  }, [enteredUserInformation, history]);

  useEffect(() => {
    if (!localStorage.getItem('CURRENT_USER')) {
      history.push('/');
    }
  }, [loginSuccess]);

  const logoutHandler = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <Lobby logoutHandler={logoutHandler} />
    </>
  );
};

export default LobbyContainer;
