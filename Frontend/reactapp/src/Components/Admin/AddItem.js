import React, { useState } from "react";
import Button from "../UI/Button";

export default function AddItem(props) {
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");

  const submit = (e) => {
    e.preventDefault();
    props.onAdd(image, productName, cost, quantity);
    setImage("");
    setProductName("");
    setCost("");
    setQuantity("");
  };

  return (
    // <div className='Adddiv'>
    //   <label className='addproductslabel'><center>Add Product</center></label>
    //   <form onSubmit={submit}>
    //     <div className='formdiv'>
    //     <input className='inputtag' id='enterProductName' type='text' value={productName} placeholder='enter the product name' onChange={(e) => setProductName(e.target.value)}/>
    //     </div>
    //     <div className='formdiv'>
    //     <input className='inputtag' id='enterProductPrice' type='number' value={cost} placeholder='enter the product price' onChange={(e) => setCost(e.target.value)}/>
    //     </div>
    //     <div className='formdiv'>
    //     <input className='inputtag' id='enterProductImageUrl' type='text' value={image} placeholder='enter the product image url' onChange={(e) => setImage(e.target.value)}/>
    //     </div>
    //     <div className='formdiv'>
    //     <input className='inputtag' id='enterProductQuantity' type='number' value={quantity} placeholder='enter the product quantity' onChange={(e) => setQuantity(e.target.value)}/>
    //     </div>
    //     <div className='formdiv'>
    //     <input className='submitbutton' id='addProductButton' type='submit' value='Add'/>
    //     </div>
    //   </form>
    // </div>

    <div
      className="container col-md-4"
      id="AddItem"
      style={{
        float: "right",
        marginRight: "3%",
        marginTop: "-30px",
        backgroundColor: "white",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "rgb(100, 22, 173)",
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
        <div className="my-5" style={{ textAlign: "center" }}>
          <Button id="addProductButton">Add</Button>
        </div>
      </form>
    </div>
  );
}
