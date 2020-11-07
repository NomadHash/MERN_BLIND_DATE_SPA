import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../modules/auth';
import Header from '../components/systems/header/Header';
import { withRouter } from 'react-router-dom';
import LoginContainer from '../container/LoginContainer';

const HeaderContainer = ({ history }) => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(logOutUser());
  };

  const onMypageHandler = () => {
    setOpen(!open);
  };

  const goLoginPage = () => {
    setLoginPopup(true);
    if (loginPopup) {
      setLoginPopup(false);
    }
  };

  const goRootPage = () => {
    history.push('/');
  };
  const { auth } = useSelector(({ authReduce }) => {
    return {
      auth: authReduce.testAuth?.isAuth,
    };
  });

  const { loginSuccess } = useSelector(({ userReducer }) => {
    return {
      loginSuccess: userReducer.loginSuccess,
    };
  });

  return (
    <>
      <Header
        auth={auth}
        loginSuccess={loginSuccess}
        onClickHandler={onClickHandler}
        goLoginPage={goLoginPage}
        onMypageHandler={onMypageHandler}
        open={open}
        goRootPage={goRootPage}
      />
      {loginPopup ? <LoginContainer goLoginPage={goLoginPage} /> : null}
    </>
  );
};

export default withRouter(HeaderContainer);
