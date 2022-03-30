import React from "react";

import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const qty = `${props.quantity} ps`;

  return (
    <div className={classes["item-container"]}>
      <div>{props.productName}</div>
      <div>{qty}</div>
      <div>${props.totalPrice}</div>
      <div>
        <MdModeEdit
          color="blueviolet"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (props?.place === "cart") {
              props.onOpen(props.cartItemId);
            } else {
              props.onOpen(props.orderId);
            }
          }}
        />
        {props?.place === "cart" ? (
          <MdDelete
            style={{
              marginLeft: "30px",
              cursor: "pointer",
              marginRight: "20px",
            }}
            color="red"
            onClick={() => {
              props.onDelete(props.cartItemId);
            }}
          />
        ) : (
          <button
            className={classes.cancel}
            onClick={() =>
              props.onCancel(props.orderId, props.productId, props.quantity)
            }
          >
            Cancel Order
          </button>
        )}
        {props?.place === "cart" && (
          <button
            className={classes.btn}
            onClick={() => props.onPlaceOrder(props.cartItemId)}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
