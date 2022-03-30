import React from "react";
import EditPage from "./EditPage";
import { MdDelete } from "react-icons/md";
import { useProductsCxt } from "../assests/products-context";
import useHttp from "../../hooks/use-http";
import EmptyPage from "../Layout/CartAndOrders/Display/EmptyPage";

const TableData = (props) => {
  return props.data.map((item) => (
    <tr key={item.productId} style={{ backgroundColor: "white" }}>
      <td>
        <img
          style={{ height: "80px", width: "80px" }}
          src={item.imageUrl}
          alt={item.productName}
        />
      </td>
      <td style={{ fontSize: "120%" }}>{item.productName}</td>
      <td style={{ fontSize: "120%" }}>${item.price}</td>
      <td style={{ fontSize: "120%" }}>{item.quantity}</td>
      <td>
        <EditPage item={item} cou={item.productId} />
      </td>
      <td>
        <MdDelete
          onClick={() => props.onDelete(item.productId)}
          id={"deleteProduct" + item.productId}
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
  const { sendRequest: deleteRequest } = useHttp();
  let element;

  const deleteData = (productId, data) => {
    productsCxt.productsDispatchFn({
      type: "DELETE_PRODUCT",
      value: productId,
    });
    setTimeout(() => {
      alert("Product deleted successfully");
    }, 300);
  };

  const deleteProductHandler = (productId) => {
    const requestConfig = {
      url: `https://localhost:5001/api/ProductModel/admin/delete/${productId}`,
      method: "DELETE",
    };
    deleteRequest(requestConfig, deleteData.bind(null, productId));
  };

  let tableBody = (
    <TableData
      data={productsCxt.productsList}
      onDelete={deleteProductHandler}
    />
  );
  // console.log(tableBody.props.data);

  if (tableBody.props.data.length > 0) {
    element = (
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
    );
  } else {
    element = <EmptyPage message="No Products Found" />;
  }

  return (
    <div
      className="container col-md-7 ms-3"
      style={{
        float: "left",
        fontFamily: "Montserrat, sans-serif ",
        textAlign: "center",
      }}
    >
      {element}
    </div>
  );
}
