import React, { Fragment } from 'react';
import HeaderQr from './HeaderQr';
import mc from '../../Img/mcdonaldsqr.svg';
import './Styles/Discounts.css';
import { Link } from 'react-router-dom';

export const McQr = () => {
    return(
        <Fragment>
        <HeaderQr />
        <div className='dContainer'>
        <Link to="/descuentos/mcdonalds">
        <img src={mc} className='mcPic' alt='McDonalds desc'></img>
        </Link>
        </div>
        </Fragment>
        );
};
export default McQr;