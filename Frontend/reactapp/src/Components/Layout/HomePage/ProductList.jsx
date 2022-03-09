import React from "react";

import ProductItem from "./ProductItem";

import classes from "./ProductsList.module.css";
import { useCartCxt } from "../../assests/cart-context";
import { useProductsCxt } from "../../assests/products-context";

function ProductList() {
  const cartCxt = useCartCxt();
  const productsCxt = useProductsCxt();

  const productsList = productsCxt.productsList.map((product, index) => {
    // console.log(product);
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
