import React, { useContext, useState } from "react";

const AuthContext = React.createContext({
  isLogged: false,
  userInfo: {},
  loginHandler: () => {},
  logoutHandler: () => {},
});

const AuthContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userType: "",
  });

  const loginHandler = (userId, userType) => {
    setIsLogged(true);
    setUserInfo({
      userId: userId,
      userType: userType,
    });
  };

  const logoutHandler = () => {
    setIsLogged(false);
    setUserInfo({
      userId: "",
      userType: "",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
        userInfo: userInfo,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuthCxt = () => {
  return useContext(AuthContext);
};

export { useAuthCxt };
export default AuthContextProvider;
