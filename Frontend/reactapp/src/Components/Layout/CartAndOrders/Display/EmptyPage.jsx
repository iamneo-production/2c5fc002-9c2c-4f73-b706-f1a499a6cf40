import React from "react";
import Card from "../../../UI/Card";

import classes from "./EmptyPage.module.css";

const EmptyPage = (props) => {
  return (
    <Card clname={classes.width}>
      <h1>Your {props.page} is Empty</h1>
    </Card>
  );
};

export default EmptyPage;
