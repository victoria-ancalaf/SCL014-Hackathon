import React, { Fragment } from 'react';
import DiscountHeader from './DiscountHeader';
import homy from '../../Img/Homy2.svg'
import { Link } from 'react-router-dom';
import './Styles/Discounts.css';

export const DiscountHomy = () => {
    return(
        <Fragment>
        <DiscountHeader />
        <div className='dContainer'>
        <img src={homy} className='homyPic' alt='Homy desc'></img>
        <Link to='/descuentos/homy/qr3'>
        <button className='btndsc'>Ver Cupón</button>
        </Link>
        </div>
        </Fragment>
        );
};
export default DiscountHomy;