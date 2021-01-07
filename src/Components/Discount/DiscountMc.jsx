import React, { Fragment } from 'react';
import DiscountHeader from './DiscountHeader';
import mc from '../../Img/mcdonalds.svg'
import { Link } from 'react-router-dom';
import './Styles/Discounts.css';

export const DiscountMc = () => {
    return(
        <Fragment>
        <DiscountHeader />
        <div className='dContainer'>
        <img src={mc} className='mcPic' alt='McDonalds desc'></img>
        <Link to="/descuentos/mcdonalds/qr2">
        <button className='btndsc'>Ver Cupón</button>
        </Link>
        </div>
        </Fragment>
        );
};
export default DiscountMc;