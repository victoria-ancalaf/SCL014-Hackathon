import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Styles/carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
    <div onDragStart={handleDragStart} className="eachContainerCarousell"> </div>,
    <div onDragStart={handleDragStart} className="eachContainerCarousell"> </div>,
    <div onDragStart={handleDragStart} className="eachContainerCarousell"> </div>,
  ];

const Carousel = () => {
    return(
        <AliceCarousel mouseTracking items={items}/>
    );
}

export default Carousel;