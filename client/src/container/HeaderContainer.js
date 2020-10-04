import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/systems/Header";

const HeaderContainer = () => {
  const { auth } = useSelector(({ authReduce }) => {
    return {
      auth: authReduce.testAuth?.isAuth,
    };
  });

  return <Header name={"park"} auth={auth} />;
};

export default HeaderContainer;
