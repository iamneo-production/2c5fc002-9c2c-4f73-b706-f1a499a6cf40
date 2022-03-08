import React from "react";
// import { Link } from 'react-router-dom';
// import Popup from 'reactjs-popup';
// import { useState } from 'react';
import EditPage from "./EditPage";
import { MdDelete } from "react-icons/md";

export default function Mainbody(props) {
  return (
    // <div>
    //   <div className='headerDiv'>
    //     <div className='headerLabel'><label>Image</label></div>
    //     <div className='headerLabel'><label>Product Name</label></div>
    //     <div className='headerLabel'><label>Cost</label></div>
    //     <div className='headerLabel'><label>Quantity</label></div>
    //   </div>

    //   {props.data.map((item,cou) =>
    //     <div key={cou} className='componentdiv'>
    //       <div className='imagediv'><img className='image' src={item.image} alt={item.productName+" image"} /></div>
    //       <div className='labeldiv1'><label>{item.productName}</label></div>
    //       <div className='labeldiv2'><label>{item.cost}</label></div>
    //       <div className='labeldiv3'><label>{item.quantity}</label></div>
    //       <div className='labeldivedit'><button className='buttonedit' >Edit</button></div>
    //       <div className='labeldivdelete'><button className='buttondelete' onClick={() => props.onDelete(item)} >Delete</button></div>

    //     </div>
    //   )}
    // </div>

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
          <tbody>
            {props.data.map((item) => (
              <tr key={item.ud} style={{ backgroundColor: "white" }}>
                <td scope="row">
                  <img
                    style={{ height: "80px", width: "80px" }}
                    src={item.image}
                    alt={item.productName + " image"}
                  />
                </td>
                <td style={{ fontSize: "120%" }}>{item.productName}</td>
                <td style={{ fontSize: "120%" }}>{item.cost}</td>
                <td style={{ fontSize: "120%" }}>{item.quantity}</td>
                <td>
                  <EditPage
                    item={item}
                    onEditProduct={props.onEditProduct}
                    cou={item.ud}
                  />
                </td>
                <td>
                  <MdDelete
                    onClick={() => props.onDelete(item)}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
