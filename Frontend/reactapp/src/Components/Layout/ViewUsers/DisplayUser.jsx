import React, { Fragment, useState } from "react";
import Card from "../../UI/Card";
import UserItem from "./UserItem";
import { useUserCxt } from "../../assests/user-context";
import EditUser from "./EditUser";
import { Routes, Route } from "react-router-dom";
import classes from "./DisplayUser.module.css";
import { useNavigate } from "react-router-dom";

const DisplayUser = () => {
  const userCxt = useUserCxt();
  const navigate = useNavigate();
  const [enteredValue, setEnteredValue] = useState("");
  const [user, setUser] = useState({});

  let element;

  const editHandler = (userId) => {
    const tempUser = userCxt.usersList.find((user) => {
      return userId === user.userId;
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

  const deleteHandler = (userId) => {
    userCxt.userDispatchFn({ type: "DELETE_USER", value: userId });
  };

  const usersList = userCxt.usersList
    .filter((user) => {
      return user.userName.includes(enteredValue);
    })
    .map((user, index) => {
      return (
        <div key={index + 1}>
          <UserItem user={user} onDelete={deleteHandler} onEdit={editHandler} />
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
