import React from "react";
import CartItem from "./CartItem";
import Display from "./Display/Display";

const cartItems = [
  {
    name: "Keychain",
    price: "120",
    quantity: "3",
  },
  {
    name: "Water Bottle",
    price: "50",
    quantity: "5",
  },
  {
    name: "LED lamp",
    price: "150",
    quantity: "1",
  },
];

const Cart = () => {
  const items = cartItems.map((cartItem, index) => {
    return (
      <div>
        <CartItem
          key={`product${index + 1}`}
          productName={cartItem.name}
          price={cartItem.price}
          quantity={cartItem.quantity}
          place="cart"
        />
        <hr />
      </div>
    );
  });

  return <Display items={items} btn="Place Order" />;
};

export default Cart;
