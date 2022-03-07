import React, { useReducer, useContext } from "react";

// import PhotoFrame from "../../images/photot-frame.jfif";
import AppleWatch from "../../images/Apple-watch.jfif";

const orderItems = [
  {
    id: "product-1",
    url: AppleWatch,
    name: "Watch I7",
    price: "1000",
    quantity: 2,
    totalAmount: "2000",
  },
];

// MyOrders context
const MyOrdersContext = React.createContext({
  orderItems: [],
  myordersDispatchFn: () => {},
});

// Reducer fn
const myordersReducer = (prevState, action) => {
  let updatedArray;
  if (action.type === "PLACE_ORDER") {
    updatedArray = [action.value, ...prevState];
    return updatedArray;
  } else if (action.type === "UPDATE_ORDER") {
    const exsistedItem = prevState.find((item) => {
      return item.id === action.value.id;
    });
    const index = prevState.indexOf(exsistedItem);
    updatedArray = [...prevState];
    updatedArray[index] = { ...action.value };
    return updatedArray;
  } else if (action.type === "CANCEL_ORDER") {
    updatedArray = [
      ...prevState.filter((item) => {
        return item.id !== action.value;
      }),
    ];
    return updatedArray;
  }
  return prevState;
};

// MyOrdersContext Provider
export const MyOrdersContextProvider = (props) => {
  const [myordersState, myordersDispatchFn] = useReducer(
    myordersReducer,
    orderItems
  );

  return (
    <MyOrdersContext.Provider
      value={{
        orderItems: myordersState,
        myordersDispatchFn: myordersDispatchFn,
      }}
    >
      {props.children}
    </MyOrdersContext.Provider>
  );
};

export const useMyOrdersCxt = () => {
  return useContext(MyOrdersContext);
};

export default MyOrdersContext;
