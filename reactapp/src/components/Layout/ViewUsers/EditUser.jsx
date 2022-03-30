import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import { Backdrop } from "../../UI/ModalOverlay/ModalOverlay";
import Card from "../../UI/Card";
import userIcon from "../../../images/user-icon-2.jpg";
import classes from "./EditUser.module.css";
import { useUserCxt } from "../../assests/user-context";
import useHttp from "../../../hooks/use-http";

const Overlay = (props) => {
  const [user, setUser] = useState(props.user);
  const userCxt = useUserCxt();
  const { sendRequest: editRequest } = useHttp();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const saveData = (user, data) => {
    console.log(data);
    userCxt.userDispatchFn({ type: "EDIT_USER", value: user });
  };

  const saveHandler = () => {
    const requestConfig = {
      url: `https://localhost:5001/api/UserModel/editUser/${user.userId}`,
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: user,
    };
    editRequest(requestConfig, saveData.bind(null, user));
    props.onClose();
  };

  return (
    <Card clname={classes.container}>
      <div className={classes["img-div"]}>
        <img src={userIcon} alt="user-icon" />
      </div>
      <div className={classes.content}>
        <div>
          <label>Username :</label>
          <label>Email-Id :</label>
          <label>Mobile number :</label>
        </div>
        <div>
          <input
            name="username"
            type="text"
            value={user.username}
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
          <input
            type="number"
            name="mobileNumber"
            value={user.mobileNumber}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className={classes.footer}>
        <button className={classes.close} onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.save} onClick={saveHandler}>
          Save
        </button>
      </div>
    </Card>
  );
};

const EditUser = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay onClose={props.onClose} user={props.user} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default EditUser;
