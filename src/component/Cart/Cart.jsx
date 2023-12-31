import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleClearCart ,children}) => {
    // console.log(cart);
    //calculate cart item total price
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    // const totalPrice = cart.reduce((initial,current)=>initial+current.price,total);
    for (const product of cart) {
        // setting the product quantity
        // if (product.quantity === 0){
        //     product.quantity = 1;
        // }
        // another solution to set the product quantity
        // product.quantity = product.quantity || 1;

        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        quantity += product.quantity;
    }
    const tax = parseFloat((totalPrice * 7 / 100).toFixed(2));
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items : {quantity}</p>
            <p>Total Price :${totalPrice}</p>
            <p>Total Shipping Charge :${totalShipping} </p>
            <p>Tax 5% : ${tax}</p>
            <h6>Grand Total : ${grandTotal}</h6>
            <button
                className="btn-clearCart"
                onClick={handleClearCart}>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
                
            </button>
            {children}

        </div>
    );
};

export default Cart;