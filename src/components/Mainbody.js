import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import EditPage from './EditPage';

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



        <div className="container col-md-7 ms-3" style={{ float: "left" }}>
            <div className="table-responsive">
                <table className="table table-hover" style={{ verticalAlign: "middle" }}>
                    <thead>
                        <tr style={{ fontSize: "130%", backgroundColor: 'rgb(255, 26, 198)', color: 'white' }}>
                            <th scope="col">Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((item) =>
                            <tr key={item.ud} style={{ backgroundColor: "white" }}>
                                <td scope="row">
                                    <img style={{ height: "80px", width: "80px" }} src={item.image} alt={item.productName + " image"} />
                                </td>
                                <td style={{ fontSize: "120%" }}>{item.productName}</td>
                                <td style={{ fontSize: "120%" }}>{item.cost}</td>
                                <td style={{ fontSize: "120%" }}>{item.quantity}</td>
                                <td>
                                    <EditPage item={item} onEditProduct={props.onEditProduct} cou={item.ud}/>
                                </td>
                                <td><button onClick={() => props.onDelete(item)} id={"deleteProduct"+item.ud}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fillRule="evenodd" d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"></path><path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path><path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path></svg></button></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>

    )
}
