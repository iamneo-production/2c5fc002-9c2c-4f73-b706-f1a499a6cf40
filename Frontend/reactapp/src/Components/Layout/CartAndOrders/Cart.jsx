import React, { useState, Fragment } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import Display from "./Display/Display";
import ModalOverlay from "../../UI/ModalOverlay/ModalOverlay";
import EmptyPage from "./Display/EmptyPage";

import { useCartCxt } from "../../assests/cart-context";
import { useMyOrdersCxt } from "../../assests/myorders-context";

const Cart = () => {
  const [haveToEditProduct, setHaveToEditProduct] = useState({});
  const cartCxt = useCartCxt();
  const myordersCxt = useMyOrdersCxt();
  const navigate = useNavigate();

  let element;

  const findTotalAmount = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  const findProduct = (productId) => {
    return {
      ...cartCxt.cartItems.find((item) => {
        return productId === item.id;
      }),
    };
  };

  const removeHandler = (productId) => {
    cartCxt.cartDispatchFn({
      type: "REMOVE_FROM_CART",
      value: productId,
    });
  };

  const openEditOverlayHandler = (productId) => {
    const product = findProduct(productId);
    setHaveToEditProduct(product);
    navigate(`/cart/${productId}`);
  };

  const increceProductQuantity = () => {
    const tempProduct = { ...haveToEditProduct };
    tempProduct.quantity += 1;
    tempProduct.totalAmount = findTotalAmount(
      tempProduct.quantity,
      tempProduct.price
    );
    setHaveToEditProduct(tempProduct);
  };

  const decreceProductQuantity = () => {
    const tempProduct = { ...haveToEditProduct };
    if (tempProduct.quantity > 1) {
      tempProduct.quantity -= 1;
      tempProduct.totalAmount = findTotalAmount(
        tempProduct.quantity,
        tempProduct.price
      );
      setHaveToEditProduct(tempProduct);
    } else {
      removeHandler(haveToEditProduct.id);
      closeEditOverlayHandler();
    }
  };

  const saveHandler = () => {
    cartCxt.cartDispatchFn({
      type: "SAVE_EDITED_PRODUCT",
      value: haveToEditProduct,
    });
    closeEditOverlayHandler();
  };

  const closeEditOverlayHandler = () => {
    navigate("/cart");
  };

  const placeOrderHandler = (productId) => {
    const product = findProduct(productId);
    myordersCxt.myordersDispatchFn({ type: "PLACE_ORDER", value: product });
    removeHandler(productId);
  };

  const items = cartCxt.cartItems.map((cartItem, index) => {
    return (
      <div key={`product${index + 1}`}>
        <CartItem
          id={cartItem.id}
          productName={cartItem.name}
          totalAmount={cartItem.totalAmount}
          quantity={cartItem.quantity}
          place="cart"
          onOpen={openEditOverlayHandler}
          onDelete={removeHandler}
          onPlaceOrder={placeOrderHandler}
        />
        <hr key={index + 1} />
      </div>
    );
  });

  const goToProductsPageHandler = () => {
    navigate("/home");
  };

  if (cartCxt.cartItems.length > 0) {
    element = <Display items={items} />;
  } else {
    element = (
      <EmptyPage
        message="Your Cart is Empty :("
        btnText="Add Products"
        onClick={goToProductsPageHandler}
      />
    );
  }

  return (
    <Fragment>
      <Routes>
        <Route
          path=":productId"
          element={
            <ModalOverlay
              productToBeShown={haveToEditProduct}
              onClose={closeEditOverlayHandler}
              onIncrement={increceProductQuantity}
              onDecrement={decreceProductQuantity}
              onSave={saveHandler}
            />
          }
        />
      </Routes>
      {element}
    </Fragment>
  );
};

export default Cart;
