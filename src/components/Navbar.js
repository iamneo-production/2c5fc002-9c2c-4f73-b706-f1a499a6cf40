import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // <div className='navdiv'>
    //   <div className='listItems'><label className='navlabel'>Amaze Pack</label></div>
    //   <div className='listItems'><label className='navlabel' id='adminProductButton'>Products</label></div>
    //   <div className='listItems'><label className='navlabel' id='adminOrderButton'>Orders</label></div>
    //   <div className='listItems' style={{ float: 'right', marginRight: '2%' }}><label className='navlabel'>Logout</label></div>
    // </div>


    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{backgroundColor:"rgb(255, 26, 198)"}}>
        <div className="container-fluid py-2">
            <label style={{fontSize: "150%"}} className="navbar-brand col-1 mx-3 text-white">Amaze Pack</label>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav container-fluid">
                    <a style={{fontSize: "130%"}} className="nav-link active col-1 ms-3 text-white" aria-current="page" >Products</a>
                    <a style={{fontSize: "130%"}} className="nav-link col-10 text-white">Orders</a>
                    <a style={{fontSize: "130%"}} className="nav-link col-1 text-white">Logout</a>

                </div>
            </div>
        </div>
    </nav>
    <br/>
    </div>
  );
}
