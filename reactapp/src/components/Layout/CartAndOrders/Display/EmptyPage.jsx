import React from "react";

import Card from "../../../UI/Card";
import Button from "../../../UI/Button";

import classes from "./EmptyPage.module.css";

const EmptyPage = (props) => {
  return (
    <Card clname={classes.width}>
      <p>{props.message}</p>
      {props.hasNeed && (
        <Button onClick={props?.onClick}>{props?.btnText}</Button>
      )}
    </Card>
  );
};

export default EmptyPage;
