import React from 'react';
import './Styles/HeaderWelcomeDiscount.css';
import { Link } from 'react-router-dom';

const HeaderWelcomeDiscount = () => {
    return (
        <div className="header-discount">
            <Link to='/gana'>
            <div className="header-box">
                <h2 className="discount-text">{"<"}</h2>
            </div>
            </Link>
            <div className="text-box-discount">
                <h2 className="discount-text">Descuentos</h2>
            </div>
            <div className="discount-header-3"></div>
        </div>
    );
};

export default HeaderWelcomeDiscount;
