import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import './Programmer.css';

const Programmer = ({ programmer , handleAddToCart }) => {
    const { name, img, salary, speciality, email} = programmer;

    return (
        <div className="programmer">
            <div>
                <img className="programmer-image" src={img} alt="" />
                <h4 className="programmer-name">{name}</h4>
                <p>Salary: {salary}$</p>
                <p>Speciality: {speciality}</p>
                <p>Email: {email}</p>
                <button className="btn-regular" onClick={() => handleAddToCart(programmer)}>
                    <p>add to List</p>
                    <FontAwesomeIcon icon={faList} />
                </button>
            </div>
        </div>
    );
};

export default Programmer;