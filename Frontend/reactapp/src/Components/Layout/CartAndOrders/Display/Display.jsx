import React from "react";

import classes from "./Display.module.css";
import Card from "../../../UI/Card";

const Display = (props) => {
  return (
    <Card clname={classes.width}>
      <header className={classes.header}>
        <div id="productName" className={classes["header-div"]}>
          Product Name
        </div>
        <div id="quantity" className={classes["header-div"]}>
          Quantity
        </div>
        <div id="price" className={classes["header-div"]}>
          Price
        </div>
        <div className={classes["header-div"]}>Options</div>
      </header>
      <div>{props.items}</div>
    </Card>
  );
};

export default Display;
