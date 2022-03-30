import React, { useState, Fragment } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import Display from "./Display/Display";
import ModalOverlay from "../../UI/ModalOverlay/ModalOverlay";
import EmptyPage from "./Display/EmptyPage";

import { useCartCxt } from "../../assests/cart-context";
import { useMyOrdersCxt } from "../../assests/myorders-context";
import { useProductsCxt } from "../../assests/products-context";
import { useAuthCxt } from "../../assests/auth-context";

import useGenerateId from "../../../hooks/generate-id";
import useHttp from "../../../hooks/use-http";

const Cart = () => {
  const [haveToEditProduct, setHaveToEditProduct] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const cartCxt = useCartCxt();
  const authCxt = useAuthCxt();
  const myordersCxt = useMyOrdersCxt();
  const productsCxt = useProductsCxt();
  const navigate = useNavigate();
  const generateId = useGenerateId();
  const { sendRequest } = useHttp();

  let element;

  const findTotalAmount = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  const findProduct = (cartItemId) => {
    return {
      ...cartCxt.cartItems.find((item) => {
        return cartItemId === item.cartItemId;
      }),
    };
  };

  const removeDataHandler = (cartItemId, data) => {
    cartCxt.cartDispatchFn({
      type: "REMOVE_FROM_CART",
      value: cartItemId,
    });
  };

  const removeHandler = (cartItemId) => {
    const requestConfig = {
      url: `https://localhost:5001/api/CartModel/deleteCartItem/${cartItemId}`,
      method: "DELETE",
    };
    sendRequest(requestConfig, removeDataHandler.bind(null, cartItemId));
  };

  const openEditOverlayHandler = (cartItemId) => {
    const cartItem = findProduct(cartItemId);
    const product = {
      ...productsCxt.productsList.find((item) => {
        return cartItem.productId === item.productId;
      }),
    };
    setImageUrl(product.imageUrl);
    setHaveToEditProduct(cartItem);
    navigate(`/cart/${cartItemId}`);
  };

  const increceProductQuantity = () => {
    const tempProduct = { ...haveToEditProduct };
    console.log(tempProduct);
    tempProduct.quantity += 1;
    tempProduct.totalPrice = findTotalAmount(
      tempProduct.quantity,
      tempProduct.price
    );
    setHaveToEditProduct(tempProduct);
  };

  const decreceProductQuantity = () => {
    const tempProduct = { ...haveToEditProduct };
    if (tempProduct.quantity > 1) {
      tempProduct.quantity -= 1;
      tempProduct.totalPrice = findTotalAmount(
        tempProduct.quantity,
        tempProduct.price
      );
      setHaveToEditProduct(tempProduct);
    } else {
      removeHandler(haveToEditProduct.cartItemId);
      closeEditOverlayHandler();
    }
  };

  const saveDataHandler = (cartItem, data) => {
    cartCxt.cartDispatchFn({
      type: "SAVE_EDITED_PRODUCT",
      value: cartItem,
    });
    closeEditOverlayHandler();
  };

  const saveHandler = () => {
    const cartItem = {
      cartItemId: haveToEditProduct.cartItemId,
      userId: haveToEditProduct.userId,
      productId: haveToEditProduct.productId,
      productName: haveToEditProduct.productName,
      price: haveToEditProduct.price,
      quantity: haveToEditProduct.quantity,
    };
    const requestConfig = {
      url: `https://localhost:5001/api/CartModel/editCartItem/${cartItem.cartItemId}`,
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: cartItem,
    };
    sendRequest(requestConfig, saveDataHandler.bind(null, cartItem));
  };

  const closeEditOverlayHandler = () => {
    navigate("/cart");
  };

  const placeOrderDataHandler = (orderedProduct, product, data) => {
    myordersCxt.myordersDispatchFn({
      type: "PLACE_ORDER",
      value: orderedProduct,
    });
    removeHandler(product.cartItemId);
    setTimeout(() => {
      alert("Your order placed successfully :)");
    }, 300);
  };

  const updateProductsDataHandler = (product, data) => {
    productsCxt.productsDispatchFn({ type: "EDIT_PRODUCT", value: product });
  };

  const placeOrderHandler = (cartItemId) => {
    const product = findProduct(cartItemId);
    const exsistedProduct = {
      ...productsCxt.productsList.find((item) => {
        return product.productId === item.productId;
      }),
    };
    const orderedProduct = {
      orderId: generateId("O"),
      userId: authCxt.userInfo.userId,
      productId: product.productId,
      productName: product.productName,
      quantity: product.quantity,
      price: product.price,
      totalPrice: product.totalPrice,
      status: "Order placed",
    };
    if (exsistedProduct.quantity >= orderedProduct.quantity) {
      const requestConfig = {
        url: "https://localhost:5001/api/OrderModel/addOrder",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: orderedProduct,
      };
      sendRequest(
        requestConfig,
        placeOrderDataHandler.bind(null, orderedProduct, product)
      );
      exsistedProduct.quantity =
        exsistedProduct.quantity - orderedProduct.quantity + "";
      const updateRequestConfig = {
        url: `https://localhost:5001/api/ProductModel/admin/productEdit/${exsistedProduct.productId}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: exsistedProduct,
      };
      sendRequest(
        updateRequestConfig,
        updateProductsDataHandler.bind(null, exsistedProduct)
      );
    } else {
      alert("Not sufficient stocks available :(");
    }
  };

  const items = cartCxt.cartItems.map((cartItem, index) => {
    return (
      <div key={`product${index + 1}`}>
        <CartItem
          productId={cartItem.productId}
          productName={cartItem.productName}
          totalPrice={cartItem.totalPrice}
          quantity={cartItem.quantity}
          place="cart"
          cartItemId={cartItem.cartItemId}
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
        hasNeed={true}
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
              imageUrl={imageUrl}
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
