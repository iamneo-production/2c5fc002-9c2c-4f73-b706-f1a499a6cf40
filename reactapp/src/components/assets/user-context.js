import React, { useReducer, useContext, useEffect } from "react";
import useHttp from "../../hooks/use-http";

const usersDetailsList = [];

const UserContext = React.createContext({
  usersList: [],
  userDispatchFn: () => {},
});

const userReducer = (prevState, action) => {
  let updatedArray;
  if (action.type === "GET_USERS") {
    updatedArray = [...action.value];
    return updatedArray;
  } else if (action.type === "ADD_USER") {
    const newUser = action.value;
    updatedArray = [...prevState, newUser];
    return updatedArray;
  } else if (action.type === "EDIT_USER") {
    const exsistedUser = prevState.find((user) => {
      return action.value.userId === user.userId;
    });
    const index = prevState.indexOf(exsistedUser);
    updatedArray = [...prevState];
    updatedArray[index] = { ...action.value };
    return updatedArray;
  } else if (action.type === "DELETE_USER") {
    updatedArray = [
      ...prevState.filter((user) => {
        return action.value !== user.userId;
      }),
    ];
    return updatedArray;
  }
  return prevState;
};

const UserContextProvider = (props) => {
  const { isLoading, sendRequest: getUsers } = useHttp();
  const [usersList, userDispatchFn] = useReducer(userReducer, usersDetailsList);

  useEffect(() => {
    const transformData = (data) => {
      userDispatchFn({ type: "GET_USERS", value: data });
    };
    const requestConfig = {
      url: "https://localhost:5001/api/UserModel/getUser",
    };
    getUsers(requestConfig, transformData);
  }, [getUsers]);

  return (
    <UserContext.Provider
      value={{
        usersList: usersList,
        userDispatchFn: userDispatchFn,
        isLoading: isLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

const useUserCxt = () => {
  return useContext(UserContext);
};

export default UserContextProvider;
export { useUserCxt };
