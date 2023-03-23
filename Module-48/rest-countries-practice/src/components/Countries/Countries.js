import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
            
        <div className='countries'>
            {
                countries.map(country =><Country 

                    county ={country}
                    // name={country.name.common}
                    // population={country.population}
                    // capital={country.capital}
                    // area={country.area}
                    // flags={country.flags.png}
                    ></Country>)
            }
        </div>
    );
};

export default Countries;