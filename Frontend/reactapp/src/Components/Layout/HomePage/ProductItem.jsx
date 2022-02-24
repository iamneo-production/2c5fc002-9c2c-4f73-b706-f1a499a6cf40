import React from 'react';

import classes from './ProductItem.module.css';
import Button from '../../UI/Button';

function ProductItem(props){
    return(
        <div id={props.id} className={classes.container}>
            <div>
                <img className={classes.img} src={props.url} alt={props.name} />
            </div>
            <div className={classes.description}>
                <h3>{props.name}</h3>
                <h3>${props.price}</h3>
            </div>
            <div className={classes.footer}>
                <Button>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductItem;