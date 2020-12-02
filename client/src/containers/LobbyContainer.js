import React, { useEffect } from 'react';
import Lobby from '../components/contents/lobby/Lobby';
import { useSelector } from 'react-redux';
import { logOutUser } from '../modules/auth';
import { useDispatch } from 'react-redux';
import { authUser } from '../modules/auth';
import { loadUserList } from '../modules/userCard';
//* ============================================
//*    LOBBY_CONTAINER
//* ============================================
const LobbyContainer = ({ history }) => {
  //* ============================
  //*    USE_SELECTOR || DISPATCH
  //* ============================
  const dispatch = useDispatch();
  const { auth, enteredUserInformation, error, userData } = useSelector(
    ({ authReduce }) => {
      return {
        auth: authReduce.userAuth?.isAuth,
        enteredUserInformation: authReduce.userAuth?.enteredUserInformation,
        error: authReduce.error,
        userData: authReduce.userAuth,
      };
    },
  );
  //* ====================
  //*    USE_EFFECT
  //* ====================
  useEffect(() => {
    if (error || !auth) {
      history.push('/');
    }
  }, [error, history, auth]);

  useEffect(() => {
    if (auth && !enteredUserInformation) {
      history.push('/agreement');
    }
  }, [enteredUserInformation, history, auth]);

  useEffect(() => {
    if (auth) {
      dispatch(loadUserList(userData));
    }
  }, [auth]);

  //* =========================
  //*   VARIABLE || FUNCTIONS
  //* =========================
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
