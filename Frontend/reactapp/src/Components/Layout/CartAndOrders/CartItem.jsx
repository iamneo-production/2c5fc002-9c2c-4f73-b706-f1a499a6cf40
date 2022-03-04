import React from "react";

import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const totalAmount = `$${(props.price * props.quantity).toFixed(2)}`;
  const qty = `${props.quantity} ps`;

  return (
    <div className={classes["item-container"]}>
      <div>{props.productName}</div>
      <div>{qty}</div>
      <div>{totalAmount}</div>
      <div>
        <MdModeEdit color="blueviolet" style={{ cursor: "pointer" }} />
        <MdDelete
          style={{
            "margin-left": "30px",
            cursor: "pointer",
            "margin-right": "20px",
          }}
          color="red"
        />
        {props?.place === "cart" && (
          <button className={classes.btn}>Place Order</button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
