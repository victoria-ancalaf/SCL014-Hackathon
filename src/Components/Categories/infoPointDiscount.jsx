import React from 'react';
import './Styles/infoPointDiscount.css';
import {Link} from 'react-router-dom'

const InfoPointDiscount = () => {
    return(
        <div className="containerInfoPointDiscount">
            <Link to="/informacion">
            <button className="btnMACHPoints">Información MACH Points</button>
            </Link>
            <button className="btnDiscount">Ver descuentos</button>
        </div>
    );
}

export default InfoPointDiscount;