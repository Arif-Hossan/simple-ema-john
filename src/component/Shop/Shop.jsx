import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        let newCart = []
        // // if product doesn't exist in the cart ,then set quantity to 1
        const exist = cart.find(pd => pd.id === product.id);
        if(!exist){
            product.quantity = 1;
            newCart=[...cart,product];
        }
        // // if exist ,then update the quantity by 1
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart=[...remaining,exist];
        }
        setCart(newCart);
        //add to db
        addToDb(product.id);
    }
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // get id
        for (let id in storedCart) {
            //get products from product state using id
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
            //get the quantity
            if (addedProduct) {
                //add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log(savedCart);
            setCart(savedCart)
        }

    }, [products])

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link className='proceed-btn' to='/orders'><span>Review Order <FontAwesomeIcon icon={faArrowRight} /></span></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;