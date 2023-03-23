import React, { useState } from 'react';
import './Mobile.css'


const Mobile = () => {
    const [count, setCount] =useState([100])

    const counts =()=>{
        const counter = count -10;
        // setCount(counter)

        if(counter < 0){
            alert('Stop Count !!')
        }else{
            setCount(counter);
        }
    }
    return (
        <div className='countDown'>
            <p>{count}%</p>
            <button onClick={counts}>Battery Down</button>
        </div>
    );
};

export default Mobile;