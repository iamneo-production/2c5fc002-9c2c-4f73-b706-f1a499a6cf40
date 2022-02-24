import React,{Fragment} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserNavbar from '../../UI/NavBar/UserNavBar';
import ProductList from './ProductList';
import Cart from '../CartAndOrders/Cart';
import MyOrders from '../CartAndOrders/MyOrders';

function HomePage(props){
    return(
        <Fragment>
            <Router>
                <UserNavbar id={props.id} /> 
                <Routes>
                    <Route path='/' exact element={<ProductList/>} />
                    <Route path='/cart' exact element={<Cart/>} />
                    <Route path='/myorders' exact element={<MyOrders/>} />
                </Routes>
            </Router>
        </Fragment>
    )
}

export default HomePage;