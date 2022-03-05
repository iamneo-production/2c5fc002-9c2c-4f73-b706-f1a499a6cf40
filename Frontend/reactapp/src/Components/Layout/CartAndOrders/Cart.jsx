import React, { useState, Fragment } from "react";

import CartItem from "./CartItem";
import Display from "./Display/Display";
import ModalOverlay from "../../UI/ModalOverlay/ModalOverlay";
import EmptyPage from "./Display/EmptyPage";

import { useCartCxt } from "../../assests/cart-context";

const Cart = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [haveToEditProduct, setHaveToEditProduct] = useState({});
  const cartCxt = useCartCxt();

  let element;

  const findTotalAmount = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  const removeHandler = (productId) => {
    console.log("removed");
    cartCxt.cartDispatchFn({
      type: "REMOVE_FROM_CART",
      value: productId,
    });
  };

  const openEditOverlayHandler = (productId) => {
    const product = cartCxt.cartItems.find((item) => {
      return productId === item.id;
    });
    setHaveToEditProduct(product);
    setIsClicked(true);
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
    setIsClicked(false);
  };

  const items = cartCxt.cartItems.map((cartItem, index) => {
    return (
      <div>
        <CartItem
          key={`product${index + 1}`}
          id={cartItem.id}
          productName={cartItem.name}
          totalAmount={cartItem.totalAmount}
          quantity={cartItem.quantity}
          place="cart"
          onOpen={openEditOverlayHandler}
          onDelete={removeHandler}
        />
        <hr />
      </div>
    );
  });

  if (cartCxt.cartItems.length > 0) {
    element = <Display items={items} />;
  } else {
    element = <EmptyPage page="Cart" />;
  }

  return (
    <Fragment>
      {isClicked && (
        <ModalOverlay
          productToBeShown={haveToEditProduct}
          onClose={closeEditOverlayHandler}
          onIncrement={increceProductQuantity}
          onDecrement={decreceProductQuantity}
          onSave={saveHandler}
        />
      )}
      {element}
    </Fragment>
  );
};

export default Cart;
