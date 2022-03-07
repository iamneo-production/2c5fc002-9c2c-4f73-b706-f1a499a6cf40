import React, { useState, Fragment } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Display from "./Display/Display";
import CartItem from "./CartItem";
import ModalOverlay from "../../UI/ModalOverlay/ModalOverlay";

import { useMyOrdersCxt } from "../../assests/myorders-context";
import EmptyPage from "./Display/EmptyPage";

const MyOrders = () => {
  const navigate = useNavigate();
  const myordersCxt = useMyOrdersCxt();
  const [haveToEditProduct, setHaveToEditProduct] = useState({});

  const { orderItems } = myordersCxt;
  let element;

  const findTotalAmount = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  const openEditOverlayHandler = (productId) => {
    const tempProduct = {
      ...orderItems.find((item) => {
        return productId === item.id;
      }),
    };
    setHaveToEditProduct(tempProduct);
    navigate(`/myorders/${productId}`);
  };

  const closeEditOverlayHandler = () => {
    navigate("/myorders");
  };

  const removeHandler = (productId) => {
    myordersCxt.myordersDispatchFn({
      type: "CANCEL_ORDER",
      value: productId,
    });
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
    myordersCxt.myordersDispatchFn({
      type: "UPDATE_ORDER",
      value: haveToEditProduct,
    });
    closeEditOverlayHandler();
  };

  const items = orderItems.map((item, index) => {
    return (
      <div key={`product${index + 1}`}>
        <CartItem
          id={item.id}
          productName={item.name}
          totalAmount={item.totalAmount}
          quantity={item.quantity}
          onOpen={openEditOverlayHandler}
          onCancel={removeHandler}
        />
        <hr />
      </div>
    );
  });

  const gotoCartHandler = () => {
    navigate("/cart");
  };

  if (orderItems.length > 0) {
    element = <Display items={items} />;
  } else {
    element = (
      <EmptyPage
        message="No Orders Found :("
        btnText="Go to Cart."
        onClick={gotoCartHandler}
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
              onIncrement={increceProductQuantity}
              onClose={closeEditOverlayHandler}
              onSave={saveHandler}
              onDecrement={decreceProductQuantity}
            />
          }
        />
      </Routes>
      {element}
    </Fragment>
  );
};

export default MyOrders;
