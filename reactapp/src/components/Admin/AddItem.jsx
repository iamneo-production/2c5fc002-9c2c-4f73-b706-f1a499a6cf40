import React, { useState } from "react";
import Button from "../UI/Button";
import { useProductsCxt } from "../assests/products-context";
import useHttp from "../../hooks/use-http";

import useGenerateId from "../../hooks/generate-id";

export default function AddItem() {
  const productsCxt = useProductsCxt();
  const generateId = useGenerateId();
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const { sendRequest: addProduct } = useHttp();

  const transformData = (newProduct, data) => {
    productsCxt.productsDispatchFn({
      type: "ADD_PRODUCT",
      value: newProduct,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (
      image !== "" &&
      productName !== "" &&
      cost !== "" &&
      quantity !== "" &&
      description !== ""
    ) {
      const newProduct = {
        productId: generateId("P"),
        imageUrl: image,
        productName: productName,
        price: cost,
        description: description,
        quantity: quantity,
      };
      const requestConfig = {
        url: "https://localhost:5001/api/ProductModel/admin/addProducts",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: newProduct,
      };
      addProduct(requestConfig, transformData.bind(null, newProduct));

      setImage("");
      setProductName("");
      setCost("");
      setQuantity("");
      setDescription("");
    } else {
      alert("Please Enter all details");
    }
  };

  return (
    <div
      className="container col-md-4"
      id="AddItem"
      style={{
        float: "right",
        marginRight: "3%",
        marginTop: "-30px",
        borderRadius: "15px",
        backgroundColor: "blueviolet",
      }}
    >
      <form onSubmit={submit}>
        <header
          style={{
            height: "60px",
            textAlign: "center",
            color: "white",
            paddingTop: "30px",
          }}
        >
          <h2>Add Item</h2>
        </header>
        <div className="my-5">
          <input
            className="form-control"
            id="enterProductName"
            style={{
              width: "98%",
              marginTop: "1%",
              paddingTop: "2%",
              paddingBottom: "2%",
            }}
            type="text"
            value={productName}
            placeholder="enter the product name"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <input
            className="form-control"
            id="enterProductPrice"
            style={{
              width: "98%",
              marginTop: "1%",
              paddingTop: "2%",
              paddingBottom: "2%",
            }}
            type="text"
            value={cost}
            placeholder="enter the product price"
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="my-5">
          <input
            className="form-control"
            id="enterProductImageUrl"
            style={{
              width: "98%",
              marginTop: "1%",
              paddingTop: "2%",
              paddingBottom: "2%",
            }}
            type="text"
            value={image}
            placeholder="enter the product image url"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="my-5">
          <input
            className="form-control"
            id="enterProductQuantity"
            style={{
              width: "98%",
              marginTop: "1%",
              paddingTop: "2%",
              paddingBottom: "2%",
            }}
            type="text"
            value={quantity}
            placeholder="enter the product quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="my-5">
          <input
            className="form-control"
            id="enterProductDescription"
            style={{
              width: "98%",
              marginTop: "1%",
              paddingTop: "2%",
              paddingBottom: "2%",
            }}
            type="text"
            value={description}
            placeholder="enter the product description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="my-5" style={{ textAlign: "center" }}>
          <Button id="addProductButton">Add</Button>
        </div>
      </form>
    </div>
  );
}