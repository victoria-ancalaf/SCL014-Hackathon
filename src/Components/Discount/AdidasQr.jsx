import React, { Fragment } from 'react';
import HeaderQr from './HeaderQr';
import adidasqr from '../../Img/Adidasqr.svg';
import './Styles/Discounts.css';
import { Link } from 'react-router-dom';

export const AdidasQr = () => {
    return(
        <Fragment>
        <HeaderQr />
        <div className='dContainer'>
        <Link to="/descuentos/adidas">
        <img src={adidasqr} className='adidPic' alt='adidas desc'></img>
        </Link>
        </div>
        </Fragment>
        );
};
export default AdidasQr;