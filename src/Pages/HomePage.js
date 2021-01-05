import React, { Fragment } from "react";
import Carousel from '../Components/Home/carousell';
import MenuComponent from '../Components/Home/MenuComponent'; 

const HomePage = () => {
    return(
        <Fragment>
        <Carousel/>
        <MenuComponent />
        </Fragment>
    );
}

export default HomePage;