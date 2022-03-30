import React from "react";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { useProductsCxt } from "../assests/products-context";
import useHttp from "../../hooks/use-http";

export default function EditPage({ item, cou }) {
  const { sendRequest: editRequest } = useHttp();
  const productsCxt = useProductsCxt();
  const [editImage, setEditImage] = useState(item.imageUrl);
  const [editProductName, setEditProductName] = useState(item.productName);
  const [editCost, setEditCost] = useState(item.price);
  const [editQuantity, setEditQuantity] = useState(item.quantity);
  const [editDescription, setEditDescription] = useState(item.description);

  const editData = (updatedProduct, data) => {
    // console.log(data);
    productsCxt.productsDispatchFn({
      type: "EDIT_PRODUCT",
      value: updatedProduct,
    });
    setTimeout(() => {
      alert("Product deatails edited successfully!");
    }, 300);
  };

  const onEdit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      productId: item.productId,
      imageUrl: editImage,
      productName: editProductName,
      price: editCost,
      quantity: editQuantity,
      description: editDescription,
    };
    const requestConfig = {
      url: `https://localhost:5001/api/ProductModel/admin/productEdit/${item.productId}`,
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: updatedProduct,
    };
    editRequest(requestConfig, editData.bind(null, updatedProduct));
  };

  return (
    <div>
      <MdModeEdit
        data-bs-toggle="modal"
        data-bs-target={"#modal" + cou}
        id={"editProduct" + cou}
        color="blueviolet"
        style={{
          height: "25px",
          width: "25px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      />
      <div className="modal" id={"modal" + cou}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Item</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form onSubmit={onEdit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label>Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter the product name"
                    defaultValue={item.productName}
                    onChange={(e) => setEditProductName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Product Cost</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter the product price"
                    defaultValue={item.price}
                    onChange={(e) => setEditCost(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Product Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter the product image url"
                    defaultValue={item.imageUrl}
                    onChange={(e) => setEditImage(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Product Quantity</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter the product quantity"
                    defaultValue={item.quantity}
                    onChange={(e) => setEditQuantity(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Product Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter the product description"
                    defaultValue={item.description}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
