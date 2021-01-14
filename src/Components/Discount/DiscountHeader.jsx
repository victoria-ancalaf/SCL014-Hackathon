import React from 'react';
import './Styles/HeaderWelcomeDiscount.css';
import { Link } from 'react-router-dom';

const DiscountHeader = () => {
    return (
        <div className="header-discount">
            <div className="header-box">
                <Link to='/descuentos'>
                <h2 className="discount-text">{"<"}</h2>
                </Link>
            </div>
            <div className="text-box-discount">
                <h2 className="discount-text">Descuentos</h2>
            </div>
            <div className="discount-header-3"></div>
        </div>
    );
};

export default DiscountHeader;