import React, { useEffect, useState } from 'react';
import Speakers from '../Speakers/Speakers';
import Programmer from '../Programmer/Programmer';
import './ProgrammersHub.css';

const ProgrammersHub = () => {
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./programmers.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    programmers.map(programmer => <Programmer
                        key={programmer.key}
                        programmer={programmer}
                        handleAddToCart={handleAddToCart}
                    >
                    </Programmer>)
                }
            </div>
            <div className="cart-container">
                <Speakers cart={cart}/>
            </div>
        </div>
    );
};

export default ProgrammersHub;