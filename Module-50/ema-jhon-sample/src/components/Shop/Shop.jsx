import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart()
        const savedCart = []
        // step: 1 Get id
        for(const id in storedCart){
            // step: 2 Get the product using id
            const addedProduct = products.find(product => product.id ==id);
            // step: 3 Get quantity of the product
            if(addedProduct){

                const quantity =storedCart[id]
                addedProduct.quantity = quantity;
                // step 4: added product into saveCard
                savedCart.push(addedProduct)
            }

        }
        setCart(savedCart)
    },[products])

    const addToCart =(product)=>{
        const newCart = [...cart, product]
        console.log(newCart);
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
               {
                products.map(product => <Product
                
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                
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