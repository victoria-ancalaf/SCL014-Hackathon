import React from "react";
import '../Styles/carousel.css';

const FirstSlide = () => {
  return (
    <div className='containerCarousel1'>
      <div>rueda</div>
      <div className='containerTextCarousel'>
        <p className='titleCarousel'>Anímate a ganar punto</p>
        <p>Pasa a la siguiente categoría y recibe mejores beneficios</p>
      </div>
      <div>
        <button className='btnMisionCarousel'>Ver misiones</button>
      </div>
    </div>
  );
};

export default FirstSlide;
