import React from "react";
import Saldo from "../Components/Home/Saldo";
import Carousel from "../Components/Home/carousell";
import Dashboard from "../Components/Home/Dashboard";

const HomePage = () => {
  return (
    <div>
      <Saldo />
      <Carousel />
      <Dashboard />
    </div>
  );
};

export default HomePage;
