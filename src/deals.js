import React from 'react';
import "./middle.css";

const data = [
    { "category": "Jewellery", "deal": "Upto 50% offer" },
    { "category": "Electronics", "deal": "Upto 70% offer" },
    { "category": "Men's clothing", "deal": "Upto 75% offer" },
    { "category": "Women's clothing", "deal": "Upto 80% offer" },
   
];
 const Deals = () => (
    <div className='update'>
        {data.map((offer, index) => (
            <div key={index} className='off' >
               <p>{offer.deal}</p>
               <h3>{offer.category}</h3>
            </div>
        ))}
    </div>
);
export default Deals;