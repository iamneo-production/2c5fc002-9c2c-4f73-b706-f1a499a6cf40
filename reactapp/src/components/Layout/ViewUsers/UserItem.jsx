import React from "react";
import classes from "./UserItem.module.css";

import userIcon from "../../../images/user-icon-2.jpg";

const UserItem = (props) => {
  const { user } = props;

  return (
    <div className={classes["user-item-container"]}>
      <div className={classes["img-div"]}>
        <img src={userIcon} alt="user-icon" />
      </div>
      <div className={classes.content}>
        <div>
          <p>Username :</p>
          <p>{user.username}</p>
        </div>
        <div>
          <p>Email-id :</p>
          <p>{user.email}</p>
        </div>
        <div>
          <p>Mobile number :</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>
      <div className={classes.footer}>
        <button
          className={classes.edit}
          onClick={() => props.onEdit(user.userId)}
        >
          Edit
        </button>
        <button
          className={classes.delete}
          onClick={() => props.onDelete(user.userId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;
