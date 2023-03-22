import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data))
    },[])
    return (
        <div >
            <h3>All Countries List.</h3>
               <div className='countries-container'>
                {
                     countries.map(country => <Country 
                        // First ways
                        // name={country.name.common} 
                        // capital={country.capital} 
                        // flags={country.flags.png} 
    
                        // Second ways
                        country ={country}
                        key={country.cca3}
    
                        ></Country>)
                }
               </div>
        </div>
    );
};

export default Countries;