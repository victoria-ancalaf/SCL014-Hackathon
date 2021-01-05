import React, { Fragment } from 'react';
import './Styles/Levels.css';
import walk from '../../Img/woman.svg';
import run from '../../Img/runing.svg';
import superw from '../../Img/superhero.svg';
import {Link} from 'react-router-dom';

export const Levels = () => {
    return(
        <Fragment>
            <div className='welc-cont'>
                <h1>
                    Bienvenida Juana a MACH Points
                </h1>
                <p>
                En MACH todos ganan. Acumula puntos, sube de nivel y disfruta de los diferentes beneficios.
                </p>
            </div>
            <div className='category'>
            <Link to="/categorias/newmacher">
            <div className='new'>
                <h3 className='cat-title'>New Macher</h3>
                <p className='cat-txt'>4 Beneficios disponibles</p>
                <img className='walk' src={walk} alt='walking woman'></img>
            </div>
            </Link>
            <div className='true'>
                <h3 className='cat-title'>True Macher</h3>
                <p className='cat-txt'>5 Beneficios disponibles</p>
                <img className='run' src={run} alt='running woman'></img>
            </div>
            <div className='lover'>
                <h3 className='cat-title'>MACH Lover</h3>
                <p className='cat-txt'>7 Beneficios disponibles</p>
                <img className='super' src={superw} alt='super woman'></img>
            </div>
            </div>
        </Fragment>

    )
}
export default Levels;