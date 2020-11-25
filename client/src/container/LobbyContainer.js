import React, { useEffect } from 'react';
import Lobby from '../components/contents/lobby/Lobby';
import { useSelector } from 'react-redux';
import { logOutUser } from '../modules/auth';
import { useDispatch } from 'react-redux';
import { authUser } from '../modules/auth';

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
    if (!auth) {
      dispatch(authUser());
    }
  }, [auth, dispatch]);

  useEffect(() => {
    if (auth && !enteredUserInformation) {
      history.push('/agreement');
    }
  }, [enteredUserInformation, history, auth]);

  useEffect(() => {
    if (!localStorage.getItem('CURRENT_USER')) {
      history.push('/');
    }
  }, [loginSuccess, history]);

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
