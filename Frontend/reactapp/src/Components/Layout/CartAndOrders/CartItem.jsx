import React from 'react';

import {MdDelete, MdModeEdit} from 'react-icons/md';

import classes from './CartItem.module.css';

const CartItem = (props) => {
    const totalAmount =`$${(props.price*props.quantity).toFixed(2)}`;
    const qty = `${props.quantity} ps`

    return <div className={classes['item-container']}>
        <div>{props.productName}</div>
        <div>{totalAmount}</div>
        <div>{qty} </div>
        <div>
            <MdDelete style={{'margin-left':'30px',cursor:'pointer'}} color='red'/>
            <MdModeEdit style={{'margin-left':'30px',cursor:'pointer'}} color='blue'/>
            <button style={{'margin-left':'30px',cursor:'pointer','backgroundColor':'rgb(136, 67, 247)','color':'white','border-radius':'5px',
                            'box-shadow':' 0 2px 16px rgba(0, 0, 0, 0.5)','border':'none','fontSize':'12px','height':'35px','width': '80px'
                            }} >Buy</button>
        </div>
    </div>
}

export default CartItem;