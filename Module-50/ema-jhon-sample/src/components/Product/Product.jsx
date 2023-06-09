import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img,price,name,ratings,seller} = props.product
    const addToCart = props.addToCart

    
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={()=>addToCart(props.product)} className='btn-cart'>
                Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;