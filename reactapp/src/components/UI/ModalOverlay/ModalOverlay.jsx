import React, { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./ModalOverlay.module.css";
import Card from "../Card";

export const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  const { product } = props;
  return (
    <Card clname={classes.container}>
      <header className={classes.header}>Edit item</header>
      <div className={classes.details}>
        <div className={classes["img-div"]}>
          <img className={classes.img} src={props.imageUrl} alt="item" />
        </div>
        <div className={classes.info}>
          <p>Product name: {product.productName}</p>
          <p>
            Quantiy: <span>{product.quantity}</span>ps
          </p>
          <p>Total price: ${product.totalPrice}</p>
        </div>
        <div className={classes.btns}>
          <button onClick={props.onDecrement}>-</button>
          <button onClick={props.onIncrement}>+</button>
        </div>
      </div>
      <footer className={classes.footer}>
        <button className={classes.close} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.save} onClick={props.onSave}>
          Save
        </button>
      </footer>
    </Card>
  );
};

const ModalOverlay = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay
          product={props.productToBeShown}
          imageUrl={props.imageUrl}
          onIncrement={props.onIncrement}
          onClose={props.onClose}
          onSave={props.onSave}
          onDecrement={props.onDecrement}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ModalOverlay;
