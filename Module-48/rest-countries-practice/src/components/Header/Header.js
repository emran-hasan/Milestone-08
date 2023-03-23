import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome To Country List In The World</h1>
            <nav className='menu'>
                <a href="#home.html">Home</a>
                <a href="#country.html">Country</a>
                <a href="#About.html">About Us</a>
                <a href="#contact.html">Contact</a>
            </nav>
        </div>
    );
};

export default Header;