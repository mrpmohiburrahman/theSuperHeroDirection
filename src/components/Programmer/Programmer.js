import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Programmer.css';

const Programmer = ({ product , handleAddToCart }) => {
    const { name, img, salary, speciality, email} = product;

    return (
        <div className="programmer">
            <div>
                <img className="programmer-image" src={img} alt="" />
                <h4 className="programmer-name">{name}</h4>
                <p>Salary: {salary}$</p>
                <p>Speciality: {speciality}</p>
                <p>Email: {email}</p>
                <button
                    onClick={() => handleAddToCart(product)}
                    className="btn-regular"
                >
                    {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                     add to List</button>
            </div>
        </div>
    );
};

export default Programmer;