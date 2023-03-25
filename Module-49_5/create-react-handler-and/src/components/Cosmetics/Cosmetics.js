import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
//    const cosmetics = [
//     // {id:'1', name:'alta', price:'100'},
//     // {id:'2', name:'palta', price:'200'},
//     // {id:'3', name:'malta', price:'300'},
//     // {id:'4', name:'jalta', price:'400'},
//     // {id:'5', name:'talta', price:'500'},

//     // second way
    
        // {
        //   "id": "641ea955f3de022d5e96c7fd",
        //   "picture": "http://placehold.it/32x32",
        //   "name": "Shari Ortiz",
        //   "gender": "female",
        //   "company": "FIBRODYNE",
        //   "email": "shariortiz@fibrodyne.com",
        //   "phone": "+1 (861) 446-2957"
        // }
      
//    ]

    const [cosmetic, setCosmetic]=useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data =>setCosmetic(data))
    },[])


    return (
        <div>
            <h1>Hi! I am cosmetics component.</h1>
            {
                cosmetic.map(cosmetic => <Cosmetic 
                key={cosmetic.id}
                cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;