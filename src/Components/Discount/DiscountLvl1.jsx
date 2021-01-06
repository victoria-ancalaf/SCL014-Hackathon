import React from "react";
import unlock from '../../Img/unlock.svg';
import CarouselLevel1 from "./Carousel/carouselLevel1";
import './Styles/discountlvl1.css';

const DiscountLvl1 = () => {
  return (
    <div className="containerDiscountLvl1">
      <div className="topCardDiscountLvl1">
        <div className="textCardDiscLvl1">
          <p className="titleTextCardlvl1">New Macher</p>
          <p className="descriptionCardLvl1">Beneficios Desbloqueados</p>
        </div>
        <div className="containerUnlockDiscountLevel1">
          <img className="unlockDiscountLevel1" src={unlock} alt="unlock" />
        </div> 
      </div>
      <CarouselLevel1 />
    </div>
  );
};

export default DiscountLvl1;
