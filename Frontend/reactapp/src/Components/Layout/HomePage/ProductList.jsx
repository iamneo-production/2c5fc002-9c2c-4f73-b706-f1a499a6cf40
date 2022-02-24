import React from 'react';

import productDetails from '../../assests/product-details';
import ProductItem from './ProductItem';

import classes from "./ProductsList.module.css";

function ProductList(){

    const productsList = productDetails.map((product,index) => {
        return <ProductItem 
                    key={`grid${index}`}
                    id={`grid${index}`}
                    url={product.url}
                    name={product.name}
                    price={product.price}/>
    })

    return(
        <div className={classes.container}>
            {productsList}
        </div>
    )
        
}


export default ProductList;