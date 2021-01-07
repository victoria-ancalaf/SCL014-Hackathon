import React from 'react';
import './Styles/HeaderWelcomeDiscount.css';

const HeaderQr = () => {
    return (
        <div className="header-discount">
            <div className="header-box">
                <h2 className="discount-text">{"<"}</h2>
            </div>
            <div className="text-box-discount">
                <h2 className="discount-text">Cupón</h2>
            </div>
            <div className="discount-header-3"></div>
        </div>
    );
};

export default HeaderQr;
