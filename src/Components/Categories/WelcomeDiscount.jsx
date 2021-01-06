import React, { Fragment } from 'react'
import HeaderWelcomeDiscount from './HeaderWelcomeDiscount'
import '../Categories/Styles/WelcomeDiscount.css'

const WelcomeDiscount = () => {
    return (
        <Fragment>
            <div className="containerAllDiscount">
        <div className="container-header-1">
            <HeaderWelcomeDiscount />
        </div>
        <div className="container-text-discount-boxes">
        <div className="box-discount-welcome-text">
            <p className="Welcome-text-discount">Bienvenida Juana</p>
        </div>
        <div className="container-text-discount">
            <p className="text-discount2">Estos son los descuentos que tenemos para ti, dependiendo a la categoría a la cual pertenezcas</p>
        </div>
        </div>
        </div>
        </Fragment>
    )
}

export default WelcomeDiscount
