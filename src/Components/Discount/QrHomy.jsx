import React, { Fragment } from 'react';
import HeaderQr from './HeaderQr';
import homy from '../../Img/Homyqr.svg';
import './Styles/Discounts.css';
import { Link } from 'react-router-dom';

export const QrHomy = () => {
    return(
        <Fragment>
        <HeaderQr />
        <div className='dContainer'>
        <Link to='/descuentos/homy'>
        <img src={homy} className='homyPic' alt='Homy desc'></img>
        </Link>
        </div>
        </Fragment>
        );
};
export default QrHomy;