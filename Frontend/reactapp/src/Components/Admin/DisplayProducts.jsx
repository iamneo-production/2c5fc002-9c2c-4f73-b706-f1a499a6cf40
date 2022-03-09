import React from "react";
import EditPage from "./EditPage";
import { MdDelete } from "react-icons/md";
import { useProductsCxt } from "../assests/products-context";

const TableData = (props) => {
  return props.data.map((item) => (
    <tr key={item.id} style={{ backgroundColor: "white" }}>
      <td>
        <img
          style={{ height: "80px", width: "80px" }}
          src={item.url}
          alt={item.productName}
        />
      </td>
      <td style={{ fontSize: "120%" }}>{item.productName}</td>
      <td style={{ fontSize: "120%" }}>${item.price}</td>
      <td style={{ fontSize: "120%" }}>{item.quantity}</td>
      <td>
        <EditPage item={item} cou={item.id} />
      </td>
      <td>
        <MdDelete
          onClick={() => props.onDelete(item.id)}
          id={"deleteProduct" + item.ud}
          style={{
            marginLeft: "30px",
            cursor: "pointer",
            marginRight: "20px",
            height: "25px",
            width: "25px",
          }}
          color="red"
        />
      </td>
    </tr>
  ));
};

export default function DisplayProducts() {
  const productsCxt = useProductsCxt();

  const deleteProductHandler = (productId) => {
    productsCxt.productsDispatchFn({
      type: "DELETE_PRODUCT",
      value: productId,
    });
  };

  let tableBody = (
    <TableData
      data={productsCxt.productsList}
      onDelete={deleteProductHandler}
    />
  );
  return (
    <div
      className="container col-md-7 ms-3"
      style={{
        float: "left",
        fontFamily: "Montserrat, sans-serif ",
        textAlign: "center",
      }}
    >
      <div
        className="table-responsive"
        style={{
          border: "none",
          borderRadius: "15px",
          overflow: "hidde",
          boxShadow: "0 2px 16px rgba(0, 0, 0, 0.25)",
          backgroundColor: "white",
        }}
      >
        <table
          className="table table-hover"
          style={{ verticalAlign: "middle" }}
        >
          <thead>
            <tr
              style={{
                fontSize: "130%",
                backgroundColor: "rgb(100, 22, 173)",
                color: "white",
              }}
            >
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Cost</th>
              <th scope="col">Quantity</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </div>
  );
}
