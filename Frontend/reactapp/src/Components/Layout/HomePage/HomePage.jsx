import React,{Fragment} from 'react';

import ProductList from './ProductList';
import Navbar from '../../UI/NavBar';
import {userNavLinks} from '../../assests/userDetails.js';

function HomePage(props){
    return(
        <Fragment>
            <Navbar navlinks={userNavLinks} id={props.id} /> 
            <ProductList />           
        </Fragment>
    )
}

export default HomePage;