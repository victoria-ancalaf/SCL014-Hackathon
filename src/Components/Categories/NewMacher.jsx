import React from 'react';
import woman from '../../Img/woman.svg';

const NewMacher = () => {
    return(
        <div>
            <header className='headerLevels'>
                <p> {"<"} </p>
                <p>Nivel 1</p>
            </header>
            <div className='containerCardLevel'>
                <div className='headCardLevel1'>
                    <h1>New Macher</h1>
                    <div>
                      <img src={woman} alt='woman'/>  
                    </div>
                    <div>
                      <img src={woman} alt='unlock'/>  
                    </div>
                </div>
                <div className='bodyCardLevel'>
                    <p>Perteneces a esta categoría si cuentas con entre 0 y 99 MACH Points, lo que te permite acceder a:</p>
                    <ul>
                        <li>Por cada $5.000 pesos gastados, te damos 3 puntos.</li>
                        <li>Hasta 20% de descuento en productos seleccionados.</li>
                        <li>1 Caja sorpresa de regalo anual(desde los 50 puntos).</li>
                        <li>Descuentos personalizados, en base a tus preferencias.</li>
                    </ul>
                </div>
                <div className='bottomCardLevel'>
                    <button>Activar mi caja</button>
                    <button>Mis descuentos</button>
                </div>
            </div>
            
        </div>

    );
}

export default NewMacher;