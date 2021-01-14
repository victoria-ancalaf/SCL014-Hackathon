import React, { Fragment } from 'react';
import DiscountHeader from './DiscountHeader';
import adidas from '../../Img/Adidas2.svg'
import { Link } from 'react-router-dom';
import './Styles/Discounts.css';

export const DiscountAdidas = () => {
    return(
        <Fragment>
        <DiscountHeader />
        <div className='dContainer'>
        <img src={adidas} className='adidPic' alt='adidas desc'></img>
        <Link to="/descuentos/adidas/qr1">
        <button className='btndsc'>Ver Cupón</button>
        </Link>
        </div>
        </Fragment>
        );
};
export default DiscountAdidas;