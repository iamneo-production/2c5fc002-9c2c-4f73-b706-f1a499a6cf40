import React from "react";

import productDetails from "../../assests/product-details";
import ProductItem from "./ProductItem";

import classes from "./ProductsList.module.css";
import { useCartCxt } from "../../assests/cart-context";

function ProductList() {
  const cartCxt = useCartCxt();

  const productsList = productDetails.map((product, index) => {
    return (
      <ProductItem
        key={`grid${index}`}
        id={`grid${index}`}
        product={product}
        onClick={cartCxt.cartDispatchFn}
      />
    );
  });

  return <div className={classes.container}>{productsList}</div>;
}

export default ProductList;
