import { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
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
            console.log(addedProduct);
            //get the quantity
            if (addedProduct) {
                //add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            console.log(savedCart);
            setCart(savedCart)
        }

    }, [products])
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;