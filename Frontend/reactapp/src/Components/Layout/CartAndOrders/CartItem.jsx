import React from "react";
import {MdDelete} from 'react-icons/md'
import classes from './CartItem.module.css'

const CartItem = (props) => {
    const totalAmount = `$${(props.price*props.quantity).toFixed(2)}`;
    const qty = `${props.quantity} ps`

    return <div className={classes['item-container']}>
                <div>{props.productName}</div>
                <div>{qty}</div>
                <div>{totalAmount} <MdDelete style={{'margin-left':'30px',cursor:'pointer'}} color='red'/></div>
            </div>
}

export default CartItem;