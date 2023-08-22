import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    console.log(cart);
    //calculate cart item total price
    let totalPrice = 0;
    let totalShipping = 0;
    // const totalPrice = cart.reduce((initial,current)=>initial+current.price,total);
    for (const product of cart){
        totalPrice += product.price;
        totalShipping +=product.shipping;
    }
    const tax = parseFloat((totalPrice * 7/100).toFixed(2));
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price :${totalPrice}</p>
            <p>Total Shipping Charge :${totalShipping} </p>
            <p>Tax 5% : ${tax}</p>
            <h6>Grand Total : ${grandTotal}</h6>
            <button>Clear Cart</button>
            <button>Review Order : </button>
        </div>
    );
};

export default Cart;