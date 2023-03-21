import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h3>Country Name: {props.name}</h3>
            <img src={props.flag} alt="" />
        </div>
    );
};

export default Country;