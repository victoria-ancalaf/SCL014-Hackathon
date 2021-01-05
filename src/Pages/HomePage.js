
import React from "react";
import Carousel from '../Components/Home/Carousel/carousell';
import Saldo from "../Components/Home/Saldo";
import Dashboard from "../Components/Home/Dashboard";
import MenuComponent from '../Components/Home/MenuComponent'; 

const HomePage = () => {
  return (
    <div>
      <Saldo />
      <Carousel />
      <Dashboard />
       <MenuComponent />
    </div>
  );
};

export default HomePage;
