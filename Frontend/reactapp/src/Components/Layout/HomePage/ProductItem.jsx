import React from "react";
// import { useNavigate } from "react-router-dom";
import classes from "./ProductItem.module.css";
import Button from "../../UI/Button";

import { useCartCxt } from "../../assests/cart-context";

function ProductItem(props) {
  // const navigate = useNavigate();
  const cartCxt = useCartCxt();
  const { product } = props;

  const addToCartHandler = () => {
    if (cartCxt.cartItems.length < 5) {
      product.quantity = 1;
      props.onClick({ type: "ADD_TO_CART", value: product });
    } else {
      alert("Cant't add to cart. Your Cart is full :(");
    }
  };

  return (
    <div id={props.id} className={classes.container}>
      <div>
        <img className={classes.img} src={product.url} alt={product.name} />
      </div>
      <div className={classes.description}>
        <h3>{product.name}</h3>
        <h3>${product.price}</h3>
      </div>
      <div className={classes.footer}>
        <Button onClick={addToCartHandler}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductItem;
