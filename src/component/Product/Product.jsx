// import React from 'react';
import './Product.css';
const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    const { id, img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    // console.log(props.product);
   

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price : ${price}</p>
                <div className='product-details'>
                    <p><small>Manufacturer : {seller}</small></p>
                    <p><small>Rating : {ratings}</small></p>
                </div>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;