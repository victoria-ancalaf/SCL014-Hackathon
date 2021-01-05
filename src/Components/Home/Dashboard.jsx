import React, { Fragment } from 'react';
import img from '../../Img/iconpeso.svg'
import img1 from '../../Img/iconbill.svg'

export const dashboard = () => {
    return(
        <Fragment>
            <div>
                <img src={img1} className='iconbill'></img>
                <h1>
                Equipo MACH
                </h1>
                <p>
                Juana, acabas de realizar una transferencia de $5.000 a tu cuenta MACH...
                </p>
            </div>
            <div>
            <img src={img} className='iconpers'></img>
                <h1>
                Equipo MACH
                </h1>
                <p>
                Juana, acabas de realizar un pago de $20.000 a la cuenta...
                </p>
            </div>
        </Fragment>
    )
}