import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Programmer.css';

const Programmer = (props) => {
    const { name, img, salary, speciality, email} = props.product;

    return (
        <div className="programmer">
            <div>
                {/* <img src={img} alt="" /> */}
                <h4 className="programmer-name">{name}</h4>
                <p>Salary: {salary}$</p>
                <p>Speciality: {speciality}</p>
                <p>Email: {email}</p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                >
                    {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                     add to List</button>
            </div>
        </div>
    );
};

export default Programmer;