import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    const totalPrice = cart.reduce((initial,current)=>,total);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : {totalPrice}</p>
            <p>Total Shipping Charge : </p>
            <p>Tax : </p>
            <h6>Grand Total : </h6>
            <button>Clear Cart</button>
            <button>Review Order : </button>
        </div>
    );
};

export default Cart;