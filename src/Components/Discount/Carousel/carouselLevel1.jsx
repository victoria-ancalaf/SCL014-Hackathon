import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Styles/carouselLevel1.css";
import homy from "../../../Img/homy.svg";
import adidas from "../../../Img/adidas.svg";
import mcdonal from "../../../Img/mcdonal.svg";
import { Link } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Link to="/descuentos/mcdonalds">
    <img
      src={mcdonal}
      alt="photo"
      className="photoCarouselLvl1"
      onDragStart={handleDragStart}
    />
  </Link>,
  <Link to="/descuentos/adidas">
  <img
    src={adidas}
    alt="photo"
    className="photoCarouselLvl1"
    onDragStart={handleDragStart}
  />
  </Link>,
  <Link to="/descuentos/homy">
  <img
    src={homy}
    alt="photo"
    className="photoCarouselLvl1"
    onDragStart={handleDragStart}
  />
  </Link>,
];

const CarouselLevel1 = () => {
  return (
    <div className="containerCarouselDiscLevel1">
      <AliceCarousel
        className="aliceCarDiscLvl1"
        paddingLeft={30}
        swipeDelta={0}
        swipeExtraPadding={0}
        mouseTracking
        items={items}
        infinite={true}
        disableButtonsControls={true}
      />
    </div>
  );
};

export default CarouselLevel1;
