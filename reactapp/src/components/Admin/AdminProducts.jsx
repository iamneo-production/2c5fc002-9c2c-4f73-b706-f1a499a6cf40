import React, { Fragment } from "react";
import DisplayProducts from "./DisplayProducts";
import AddItem from "./AddItem";

import classes from "./AdminProducts.module.css";

export default function AdminProducts() {
  return (
    <Fragment>
      <div className={classes.content}>
        <DisplayProducts />
        <br />
        <AddItem />
      </div>
    </Fragment>
  );
}