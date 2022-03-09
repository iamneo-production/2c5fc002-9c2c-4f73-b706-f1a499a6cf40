import React, { useContext, useState } from "react";

const AuthContext = React.createContext({
  isLogged: false,
  isAdmin: false,
  loginHandler: () => {},
  logoutHandler: () => {},
  changeAdminHandler: () => {},
});

const AuthContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const loginHandler = () => {
    setIsLogged(true);
  };

  const logoutHandler = () => {
    setIsLogged(false);
  };

  const changeAdminHandler = (value) => {
    setIsAdmin(value);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
        isAdmin: isAdmin,
        changeAdminHandler: changeAdminHandler,
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
