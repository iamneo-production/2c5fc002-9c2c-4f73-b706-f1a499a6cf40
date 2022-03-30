import React from "react";
import classes from "./AdminOrders.module.css";
import { useMyOrdersCxt } from "../assests/myorders-context";
import Card from "../UI/Card";
import EmptyPage from "../Layout/CartAndOrders/Display/EmptyPage";

export default function AdminOrders(props) {
  const ordersCxt = useMyOrdersCxt();
  let element;
  if (ordersCxt.orderItems.length > 0) {
    element = (
      <Card clname={classes.width}>
        <table className={classes.table}>
          <thead className={classes.header}>
            <tr>
              <td>Order Id</td>
              <td>User Id</td>
              <td>Product Name</td>
              <td>Quantity</td>
              <td>Total Price</td>
            </tr>
          </thead>
          <tbody className={classes.content}>
            {ordersCxt.orderItems.map((item, index) => {
              return (
                <tr key={index} className={classes.tablerow}>
                  <td>{item.orderId}</td>
                  <td>{item.userId}</td>
                  <td>{item.productName}</td>
                  <td>{item.quantity}</td>
                  <td>${item.totalPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>{" "}
      </Card>
    );
  } else {
    element = <EmptyPage message="No Orders placed yet :( " />;
  }
  return element;
}
