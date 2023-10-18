// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        // console.log(remaining);
        setCart(remaining);
        removeFromDb(id)
        // console.log(cart);
        // console.log(id);
    }
    return (
        <div className="shop-container">
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;