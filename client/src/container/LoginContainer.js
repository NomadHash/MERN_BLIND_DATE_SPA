import React from 'react';
import LoginModal from '../components/systems/user_login/LoginModal';

const LoginContainer = ({ goLoginPage }) => {
  return (
    <>
      {/* LoginModal Componet */}
      <LoginModal goLoginPage={goLoginPage} />
    </>
  );
};

export default LoginContainer;
