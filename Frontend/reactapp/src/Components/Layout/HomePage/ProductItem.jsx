import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ProductItem.module.css";
import Button from "../../UI/Button";

function ProductItem(props) {
  const navigate = useNavigate();
  const { product } = props;

  const addToCartHandler = () => {
    product.quantity = 1;
    // console.log(product);
    props.onClick({ type: "ADD_TO_CART", value: product });
    navigate("/cart");
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
