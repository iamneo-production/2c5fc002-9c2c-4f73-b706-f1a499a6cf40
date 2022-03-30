import React, { Fragment, useState } from "react";
import Card from "../../UI/Card";
import UserItem from "./UserItem";
import { useUserCxt } from "../../assests/user-context";
import EditUser from "./EditUser";
import { Routes, Route, useNavigate } from "react-router-dom";
import classes from "./DisplayUser.module.css";
import useHttp from "../../../hooks/use-http";

const DisplayUser = () => {
  const userCxt = useUserCxt();
  const { sendRequest: deleteRequest } = useHttp();
  const navigate = useNavigate();
  const [enteredValue, setEnteredValue] = useState("");
  const [user, setUser] = useState({});

  let element;

  const editHandler = (userId) => {
    const tempUser = userCxt.usersList.find((item) => {
      return userId === item.userId;
    });
    setUser(tempUser);
    navigate(`/admin/users-list/${userId}`);
  };

  const closeHandler = () => {
    navigate("/admin/users-list");
  };

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const deleteData = (userId, data) => {
    userCxt.userDispatchFn({ type: "DELETE_USER", value: userId });
  };

  const deleteHandler = (userId) => {
    const requestConfig = {
      url: `https://localhost:5001/api/UserModel/deleteUser/${userId}`,
      method: "DELETE",
    };
    deleteRequest(requestConfig, deleteData.bind(null, userId));
  };

  const usersList = userCxt.usersList
    .filter((item) => {
      return item.username.includes(enteredValue) && item.role !== "admin";
    })
    .map((item, index) => {
      return (
        <div key={index + 1}>
          <UserItem user={item} onDelete={deleteHandler} onEdit={editHandler} />
          <hr />
        </div>
      );
    });

  if (usersList.length > 0) {
    element = usersList;
  } else {
    element = <div className={classes.empty}>No Users Found</div>;
  }

  return (
    <Fragment>
      <Routes>
        <Route
          path=":userId"
          element={<EditUser onClose={closeHandler} user={user} />}
        />
      </Routes>
      <Card clname={classes.width}>
        <input
          type="text"
          placeholder="Enter Username here"
          onChange={changeHandler}
        />
      </Card>
      <div className={classes.content}>{element}</div>
    </Fragment>
  );
};

export default DisplayUser;
