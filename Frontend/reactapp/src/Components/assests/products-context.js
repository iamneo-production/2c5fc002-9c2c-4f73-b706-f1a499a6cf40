import React, { useContext, useReducer } from "react";

const productDetails = [
  {
    id: "product-1",
    url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_PF+watch-45-alum-midnight-nc-7s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171068000,1631661680000",
    productName: "Watch I7",
    price: "1000",
    quantity: 10,
  },
  {
    id: "product-2",
    url: "https://media.istockphoto.com/photos/blank-metal-trinket-with-a-ring-for-a-key-heart-shape-3d-picture-id961988456?k=20&m=961988456&s=612x612&w=0&h=MQFsQFYhToIubwY_igkKsZ6JmQKmx1JXP3lP22V9lKs=",
    productName: "Key chain",
    price: "12.99",
    quantity: 8,
  },
  {
    id: "product-3",
    url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2019%2F10%2F21%2Fhow-to-clean-water-bottle.jpg",
    productName: "Water bottle",
    price: "48.54",
    quantity: 50,
  },
  {
    id: "product-4",
    url: "https://images.unsplash.com/photo-1532007271951-c487760934ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVkJTIwYnVsYnxlbnwwfHwwfHw%3D&w=1000&q=80",
    productName: "LED lamp",
    price: "60.21",
    quantity: 20,
  },
  {
    id: "product-5",
    url: "https://i.ytimg.com/vi/mcbAx4w3QmA/maxresdefault.jpg",
    productName: "Handmade gifts",
    price: "35.12",
    quantity: 5,
  },
  {
    id: "product-6",
    url: "https://m.media-amazon.com/images/I/61VFk0kwpKL._SY355_.jpg",
    productName: "Photo-frame",
    price: "70.00",
    quantity: 3,
  },
  {
    id: "product-7",
    url: "https://static-01.daraz.pk/p/f65873c3aabe04a378d3be9b57f16a32.jpg",
    productName: "Wrist watch (classic)",
    price: "150.87",
    quantity: 15,
  },
  {
    id: "product-8",
    url: "https://i.pinimg.com/originals/08/00/6d/08006d49c5482843555b865ddb162263.jpg",
    productName: "Wrist watch (Formal)",
    price: "120.87",
    quantity: 12,
  },
];

const ProductsContext = React.createContext({
  productsList: [],
  productsDispatchFn: () => {},
});

const productsReducer = (prevState, action) => {
  let updatedArray;
  if (action.type === "ADD_PRODUCT") {
    action.value.id = `product-${prevState.length + 1}`;
    const newProduct = { ...action.value };
    updatedArray = [...prevState, newProduct];
    return updatedArray;
  } else if (action.type === "EDIT_PRODUCT") {
    const exsistedProduct = prevState.find((item) => {
      return item.id === action.value.id;
    });
    const index = prevState.indexOf(exsistedProduct);
    updatedArray = [...prevState];
    updatedArray[index] = action.value;
    return updatedArray;
  } else if (action.type === "DELETE_PRODUCT") {
    updatedArray = [
      ...prevState.filter((item) => {
        return item.id !== action.value;
      }),
    ];
    return updatedArray;
  } else if (action.type === "PLACE_ORDER") {
    const exsistedProduct = prevState.find((item) => {
      return item.id === action.value.id;
    });
    const index = prevState.indexOf(exsistedProduct);
    const tempProduct = { ...exsistedProduct };
    tempProduct.quantity = tempProduct.quantity - action.value.quantity;
    updatedArray = [...prevState];
    updatedArray[index] = tempProduct;
    return updatedArray;
  } else if (action.type === "CANCEL_ORDER") {
    const exsistedProduct = prevState.find((item) => {
      return item.id === action.value.id;
    });
    const index = prevState.indexOf(exsistedProduct);
    const tempProduct = { ...exsistedProduct };
    tempProduct.quantity = tempProduct.quantity + action.value.quantity;
    updatedArray = [...prevState];
    updatedArray[index] = tempProduct;
    return updatedArray;
  }
  return prevState;
};

export const ProductsContextProvider = (props) => {
  const [productsList, productsDispatchFn] = useReducer(
    productsReducer,
    productDetails
  );
  return (
    <ProductsContext.Provider
      value={{
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
