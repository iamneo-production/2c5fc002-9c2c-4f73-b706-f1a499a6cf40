import React, { useContext, useReducer, useEffect } from "react";
import useHttp from "../../hooks/use-http";

const productDetails = [];

const ProductsContext = React.createContext({
  isLoading: false,
  productsList: [],
  productsDispatchFn: () => {},
});

const productsReducer = (prevState, action) => {
  let updatedArray;
  if (action.type === "GET_PRODUCTS") {
    updatedArray = [...action.value];
    return updatedArray;
  } else if (action.type === "ADD_PRODUCT") {
    const newProduct = { ...action.value };
    updatedArray = [...prevState, newProduct];
    return updatedArray;
  } else if (action.type === "EDIT_PRODUCT") {
    const exsistedProduct = prevState.find((item) => {
      return item.productId === action.value.productId;
    });
    const index = prevState.indexOf(exsistedProduct);
    updatedArray = [...prevState];
    updatedArray[index] = { ...action.value };
    return updatedArray;
  } else if (action.type === "DELETE_PRODUCT") {
    updatedArray = [
      ...prevState.filter((item) => {
        return item.productId !== action.value;
      }),
    ];
    return updatedArray;
  }
  return prevState;
};

export const ProductsContextProvider = (props) => {
  const { isLoading, sendRequest: fetchProducts } = useHttp();
  const [productsList, productsDispatchFn] = useReducer(
    productsReducer,
    productDetails
  );

  useEffect(() => {
    const callReducer = (data) => {
      productsDispatchFn({ type: "GET_PRODUCTS", value: data });
    };
    const requestConfig = {
      url: "https://localhost:5001/api/ProductModel/admin",
    };
    fetchProducts(requestConfig, callReducer);
  }, [fetchProducts]);

  return (
    <ProductsContext.Provider
      value={{
        isLoading: isLoading,
        productsList: productsList,
        productsDispatchFn: productsDispatchFn,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export const useProductsCxt = () => {
  return useContext(ProductsContext);
};

export default ProductsContext;
