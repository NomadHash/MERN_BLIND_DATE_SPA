import React, { useEffect } from 'react';
import Lobby from '../components/contents/lobby/Lobby';
import { useSelector } from 'react-redux';
import { logOutUser } from '../modules/auth';
import { useDispatch } from 'react-redux';
import { authUser } from '../modules/auth';
//* ============================================
//*    LOBBY_CONTAINER
//* ============================================
const LobbyContainer = ({ history }) => {
  //* ============================
  //*    USE_SELECTOR || DISPATCH
  //* ============================
  const dispatch = useDispatch();
  const { auth, enteredUserInformation, error } = useSelector(
    ({ authReduce }) => {
      return {
        auth: authReduce.userAuth?.isAuth,
        enteredUserInformation: authReduce.userAuth?.enteredUserInformation,
        error: authReduce.error,
      };
    },
  );
  //* ======================
  //*    USE_EFFECT
  //* ======================
  useEffect(() => {
    if (!auth) {
      dispatch(authUser());
    }
    if (error) {
      history.push('/');
    }
  }, [dispatch, error, history]);

  useEffect(() => {
    if (auth && !enteredUserInformation) {
      history.push('/agreement');
    }
  }, [enteredUserInformation, history, auth]);

  useEffect(() => {
    if (!localStorage.getItem('CURRENT_USER')) {
      history.push('/');
    }
  }, [auth, history]);

  //* ========================
  //*   VARIABLE || FUNCTIONS
  //* ========================
  const logoutHandler = () => {
    dispatch(logOutUser());
  };

  //* ======================
  //*    RENDER
  //* ======================
  return (
    <>
      <Lobby logoutHandler={logoutHandler} />
    </>
  );
};

export default LobbyContainer;
