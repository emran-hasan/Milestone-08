import React from 'react';
import { addToDb } from '../Utilities/FakeDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, phone, id,email} = props.cosmetic

    const addToCart =(id)=>{
        addToDb(id)
    }

    // const addToCartWithPara =()=>addToCart(id)
    
    return (
        <div className='info'>
            <h2>This is cosmetic:</h2>
            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
            {/* <button onClick={addToCartWithPara}>Add to cart</button> */}
            {/* alternative way we use this always */}
            <button onClick={()=>addToCart(id)}>Add to cart</button>

        </div>
    );
};

export default Cosmetic;