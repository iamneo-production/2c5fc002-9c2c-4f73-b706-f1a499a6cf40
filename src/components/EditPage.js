import React, { useEffect } from 'react';
import { useState } from "react";
import Popup from 'reactjs-popup';


export default function EditPage({ item, onEditProduct, cou}) {

    const [editImage, setEditImage] = useState(item.image);
    const [editProductName, setEditProductName] = useState(item.productName);
    const [editCost, setEditCost] = useState(item.cost);
    const [editQuantity, setEditQuantity] = useState(item.quantity);

    const onEdit = (e) => {
        e.preventDefault();
        onEditProduct(editProductName, editCost, editImage, editQuantity, item);
        alert("Product deatails edited successfully!")

    }
   

    return (
        <div>
            {/* <Popup trigger={<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg></button>} position="bottom center">
                {close => (
                    <div style={{ backgroundColor: "white", border: "2px solid gray", height: "75vh", width: "60vh" }}>
                        <form onSubmit={onEdit}>
                            <label style={{ marginTop: "5vh", marginLeft: "2%" }}>Product Name</label>
                            <input className="form-control" style={{ width: "95%", paddingTop: "2%", paddingBottom: "2%", marginLeft: "2%" }} type="text"
                                placeholder="enter the product name" defaultValue={item.productName} onChange={(e) => setEditProductName(e.target.value)} />
                            <label style={{ marginTop: "5vh", marginLeft: "2%" }}>Product Price</label>
                            <input className="form-control" style={{ width: "95%", paddingTop: "2%", paddingBottom: "2%", marginLeft: "2%" }} type="text"
                                placeholder="enter the product price" defaultValue={item.cost} onChange={(e) => setEditCost(e.target.value)} />
                            <label style={{ marginTop: "5vh", marginLeft: "2%" }}>Product Image URL</label>
                            <input className="form-control" style={{ width: "95%", paddingTop: "2%", paddingBottom: "2%", marginLeft: "2%" }} type="text"
                                placeholder="enter the product image url" defaultValue={item.image} onChange={(e) => setEditImage(e.target.value)} />
                            <label style={{ marginTop: "5vh", marginLeft: "2%" }}>Product Quantity</label>
                            <input className="form-control" style={{ width: "95%", paddingTop: "2%", paddingBottom: "2%", marginLeft: "2%" }} type="text"
                                placeholder="enter the product quantity" defaultValue={item.quantity} onChange={(e) => setEditQuantity(e.target.value)} />
                            <div>
                                <button className='close btn btn-danger' style={{ marginTop: "5vh", marginLeft: "12%", paddingLeft: "13%", paddingRight: "13%" }} onClick={close}>close</button>
                                <button className="btn btn-success" style={{ marginTop: "5vh", marginLeft: "13%", paddingLeft: "13%", paddingRight: "13%" }}>Save</button>
                            </div>
                        </form>
                    </div>)}
            </Popup> */}

            <button data-bs-toggle="modal" data-bs-target={"#modal"+cou} id={"editProduct"+cou}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg></button>
            <div className='modal' id={"modal"+cou}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Edit Item</h5>
                            <button className='btn-close' data-bs-dismiss="modal"></button>
                        </div>
                        <form onSubmit={onEdit}>
                            <div className='modal-body'>
                                <div className='mb-3'>
                                    <label>Product Name</label>
                                    <input type='text' className='form-control' placeholder="enter the product name" 
                                    defaultValue={item.productName} onChange={(e) => setEditProductName(e.target.value)}/>
                                </div>
                                <div className='mb-3'>
                                    <label>Product Cost</label>
                                    <input type='text' className='form-control' placeholder="enter the product price" 
                                    defaultValue={item.cost} onChange={(e) => setEditCost(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <label>Product Image URL</label>
                                    <input type='text' className='form-control' placeholder="enter the product image url" 
                                    defaultValue={item.image} onChange={(e) => setEditImage(e.target.value)}/>
                                </div>
                                <div className='mb-3'>
                                    <label>Product Quantity</label>
                                    <input type='text' className='form-control' placeholder="enter the product quantity" 
                                    defaultValue={item.quantity} onChange={(e) => setEditQuantity(e.target.value)} />
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button type='submit' className='btn btn-success'>Save</button>
                            </div>
                        </form>
                    </div>
                </div> 
             </div>
        </div>

    )
}
