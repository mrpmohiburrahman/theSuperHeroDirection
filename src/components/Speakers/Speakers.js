import React from 'react';
import './Speakers.css';

const Speakers = ({ cart }) => {
    let totalQuantity = 0;
    let total = 0;
    for (const speaker of cart) {
        if (!speaker.quantity) speaker.quantity = 1;
        total = total + speaker.salary * speaker.quantity;
        totalQuantity = totalQuantity + speaker.quantity;
    }
    return (
        <div>
            <h3>List Summary</h3>
            <h5>Numebr of Speakers: {totalQuantity}</h5>
            <p>Total Cost: {total} $</p>
            <br/>
            { cart.length !== 0 && <h4>Speaker Lists</h4> }
            { cart.map( speaker => <p key={speaker.key}>{speaker.name}</p>) }
        </div>
    );
};

export default Speakers;