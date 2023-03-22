import React from 'react';
import './Country.css'
const Country = (props) => {
    /* third ways Destructuring  */
    const {area,capital,continents,flags} =props.country
    return (
        <div className='country bg-warning'>

            {/* First ways */}
            {/* <h3>Name: {props.name}</h3>
            <h3>Capital: {props.capital}</h3>
            <h3>Capital: {props.capital}</h3>
            <img src={props.flags} alt="" /> */}

            {/* Second ways */}
            {/* <h3>Name: {props.country.area}</h3>
            <h3>Capital: {props.country.capital}</h3>
            <h3>Continents: {props.country.continents}</h3>
            <img src={props.country.flags.png} alt="" /> */}

            {/* third ways Destructuring */}
            <h3>Name: {area}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Continents: {continents}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;