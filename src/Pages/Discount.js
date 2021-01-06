import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeDiscount from "../Components/Discount/WelcomeDiscount";
import DiscountLvl1 from '../Components/Discount/DiscountLvl1';


const Discount = () => {
  return (
    <div>
      <WelcomeDiscount/>
      <DiscountLvl1/>
     
    </div>
  );
};

export default Discount;
