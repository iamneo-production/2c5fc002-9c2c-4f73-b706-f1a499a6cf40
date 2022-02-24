import React from 'react';

import Display from './Display/Display';
import CartItem from './CartItem';

const cartItems = [
    {
        name:'Keychain',
        price:'120',
        quantity:'3'
    },
    {
        name:'Water Bottle',
        price:'50',
        quantity:'5'
    },
    {
        name:'LED lamp',
        price:'150',
        quantity:'1'
    },
    {
        name:'Apple Watch I7',
        price:'1000',
        quantity:'1'
    }
]

const MyOrders = (props) => {
    const items = cartItems.map((cartItem,index) => {
        return <div><CartItem 
                    key={`product${index+1}`} 
                    productName={cartItem.name} 
                    price={cartItem.price}
                    quantity={cartItem.quantity}
                /><hr/></div>
    })

    return <Display items={items} btn='Pay' />
}

export default MyOrders;