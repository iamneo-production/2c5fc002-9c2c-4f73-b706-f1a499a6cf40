import React, { useState, Fragment } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Display from "./Display/Display";
import CartItem from "./CartItem";
import ModalOverlay from "../../UI/ModalOverlay/ModalOverlay";

import { useMyOrdersCxt } from "../../assests/myorders-context";
import EmptyPage from "./Display/EmptyPage";
import { useProductsCxt } from "../../assests/products-context";
import { useAuthCxt } from "../../assests/auth-context";
import useHttp from "../../../hooks/use-http";

const MyOrders = () => {
  const navigate = useNavigate();
  const myordersCxt = useMyOrdersCxt();
  const { sendRequest } = useHttp();
  const authCxt = useAuthCxt();
  const productsCxt = useProductsCxt();
  const [haveToEditProduct, setHaveToEditProduct] = useState({});
  const { productsList } = productsCxt;
  const { orderItems } = myordersCxt;
  const [imageUrl, setImageUrl] = useState("");
  let element;

  const findTotalAmount = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  const findProduct = (productId) => {
    return {
      ...productsList.find((item) => {
        return productId === item.productId;
      }),
    };
  };

  const openEditOverlayHandler = (orderId) => {
    const tempProduct = {
      ...orderItems.find((item) => {
        return orderId === item.orderId;
      }),
    };
    const product = {
      ...productsList.find((item) => {
        return item.productId === tempProduct.productId;
      }),
    };
    setImageUrl(product.imageUrl);
    setHaveToEditProduct(tempProduct);
    navigate(`/myorders/${orderId}`);
  };

  const closeEditOverlayHandler = () => {
    navigate("/myorders");
  };

  const removeDataHandler = (orderId, data) => {
    myordersCxt.myordersDispatchFn({
      type: "CANCEL_ORDER",
      value: orderId,
    });
    setTimeout(() => {
      alert("Your order canceled successfully :) ");
    }, 300);
  };

  const updateProductDataHandler = (product, data) => {
    productsCxt.productsDispatchFn({ type: "EDIT_PRODUCT", value: product });
  };

  const removeHandler = (orderId, productId, quantity) => {
    const requestConfig = {
      url: `https://localhost:5001/api/OrderModel/deleteOrder/${orderId}`,
      method: "DELETE",
    };
    sendRequest(
      requestConfig,
      removeDataHandler.bind(null, orderId, productId, quantity)
    );
    const product = findProduct(productId);
    product.quantity = String(Number(product.quantity) + quantity);
    const updateRequestConfig = {
      url: `https://localhost:5001/api/ProductModel/admin/productEdit/${productId}`,
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: product,
    };
    sendRequest(
      updateRequestConfig,
      updateProductDataHandler.bind(null, product)
    );
  };

  const increceProductQuantity = () => {
    const tempProduct = { ...haveToEditProduct };
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
      removeHandler(
        tempProduct.orderId,
        tempProduct.productId,
        tempProduct.quantity
      );
      closeEditOverlayHandler();
    }
  };

  const updateDataHandler = (haveToEditProduct, data) => {
    myordersCxt.myordersDispatchFn({
      type: "UPDATE_ORDER",
      value: haveToEditProduct,
    });
    closeEditOverlayHandler();
  };

  const saveHandler = () => {
    const requestConfig = {
      url: `https://localhost:5001/api/OrderModel/editOrder/${haveToEditProduct.orderId}`,
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: haveToEditProduct,
    };
    sendRequest(requestConfig, updateDataHandler.bind(null, haveToEditProduct));
  };

  const items = orderItems
    .filter((item) => {
      return item.userId === authCxt.userInfo.userId;
    })
    .map((item, index) => {
      return (
        <div key={`product${index + 1}`}>
          <CartItem
            orderId={item.orderId}
            productId={item.productId}
            productName={item.productName}
            totalPrice={item.totalPrice}
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

  if (items.length > 0) {
    element = <Display items={items} />;
  } else {
    element = (
      <EmptyPage
        message="No Orders Found :("
        btnText="Go to Cart."
        onClick={gotoCartHandler}
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
