import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, salary, speciality, email} = props.product;

    return (
        <div className="product">
            {/* <div>
                <img src={img} alt="" />
            </div> */}
            <div>
                {/* <img src={img} alt="" /> */}
                <h4 className="product-name">{name}</h4>
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

export default Product;