import React from 'react';
import { add } from '../Utilities/Calculat';

const Shoes = () => {
    const first = 12;
    const second = 20;
    const result = add(first, second)
    return (
        <div>
            <h3>This is shoes components</h3>
            <h4>Result: {result}</h4>
        </div>
    );
};

export default Shoes;