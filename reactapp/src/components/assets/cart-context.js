import React, { useReducer, useContext, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { useAuthCxt } from "./auth-context";

const cartItems = [];
// Cart context
const CartContext = React.createContext({
  cartItems: [],
  cartDispatchFn: () => {},
});

// Cart Reducer fn
const cartReducer = (prevState, action) => {
  let updatedArray;
  if (action.type === "GET_CART_ITEMS") {
    updatedArray = [...action.value];
    return updatedArray;
  } else if (action.type === "ADD_TO_CART") {
    action.value.totalPrice = (
      action.value.quantity * action.value.price
    ).toFixed(2);
    updatedArray = [action.value, ...prevState];
    return updatedArray;
  } else if (action.type === "SAVE_EDITED_PRODUCT") {
    const exsistedItem = prevState.find((item) => {
      return action.value.productId === item.productId;
    });
    const index = prevState.indexOf(exsistedItem);
    action.value.totalPrice = (
      action.value.quantity * action.value.price
    ).toFixed(2);
    const cloneProduct = { ...action.value };
    updatedArray = [...prevState];
    updatedArray[index] = cloneProduct;
    return updatedArray;
  } else if (action.type === "REMOVE_FROM_CART") {
    updatedArray = [
      ...prevState.filter((item) => {
        return item.cartItemId !== action.value;
      }),
    ];
    return updatedArray;
  }
  return prevState;
};

// Cart Context Provider
export const CartContextProvider = (props) => {
  const [cartState, cartDispatchFn] = useReducer(cartReducer, cartItems);
  const { sendRequest } = useHttp();
  const authCxt = useAuthCxt();
  useEffect(() => {
    const transformData = (data) => {
      const tempArray = data.filter((item) => {
        item.totalPrice = (item.quantity * item.price).toFixed(2);
        return item.userId === authCxt.userInfo.userId;
      });
      cartDispatchFn({ type: "GET_CART_ITEMS", value: tempArray });
    };
    const requestConfig = {
      url: "https://localhost:5001/api/CartModel/getCartItems",
    };
    sendRequest(requestConfig, transformData);
  }, [sendRequest, authCxt.userInfo.userId]);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState,
        cartDispatchFn: cartDispatchFn,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartCxt = () => {
  return useContext(CartContext);
};

export default CartContext;
