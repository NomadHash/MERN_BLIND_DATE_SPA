//IMPORT_MODULES
import React from 'react';
import SnsLogin from './pass_port/SnsLogin';
//* ======================
//*     STYLED_COMPONENT
//* ======================
//! ============================================
//!   LOGIN_MODAL ('Change component's name')
//! ============================================
const LoginModal = ({ oAuthLoginHandler }) => {
  //* ======================
  //*    RENDER
  //* ======================
  return (
    <>
      <SnsLogin oAuthLoginHandler={oAuthLoginHandler} />
    </>
  );
};
export default LoginModal;
