import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to countries component</h1>
            <nav className='menu'>
                <a href="#home.html">Home</a>
                <a href="#country.html">Country</a>
                <a href="#area.html">Area</a>
                <a href="#location.html">Location</a>
            </nav>
        </div>
    );
};

export default Header;