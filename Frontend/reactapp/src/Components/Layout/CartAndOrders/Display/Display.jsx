
import React from 'react';

import classes from "./Display.module.css";
import Card from "../../../UI/Card";
import Button from '../../../UI/Button';

const Display = (props) => {
    return(
        <Card>
            <header className={classes.header}>
                <div id="productName" className={classes['header-div']}>Product Name</div>
                <div id="price" className={classes['header-div']}>Price</div>
                <div id="quantity" className={classes['header-div']}>Quantity</div>
                <div id="buy" className={classes['header-div']}></div>
            </header>
            <div>
                {props.items}
            </div>
            <div className={classes.footer}>
                <Button>{props.btn}</Button>
            </div>
       </Card>
    )
}

export default Display;