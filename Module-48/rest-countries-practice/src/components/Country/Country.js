import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>



            <h3>Name: {props.name}</h3>
            <h3>Population: {props.population}</h3>
            <h3>Capital: {props.capital}</h3>
            <h3><small>Area: {props.area}</small></h3>
            <img src={props.flags} alt="" />
        </div>
    );
};

export default Country;