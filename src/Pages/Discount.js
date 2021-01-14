import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderWelcomeDiscount from '../Components/Discount/HeaderWelcomeDiscount';
import WelcomeDiscount from "../Components/Discount/WelcomeDiscount";
import DiscountLvl1 from '../Components/Discount/DiscountLvl1';
import DiscountAdidas from '../Components/Discount/DiscountAdidas';
import DiscountMc from '../Components/Discount/DiscountMc';
import DiscountHomy from '../Components/Discount/DiscountHomy';
import McQr from '../Components/Discount/McQr';
import AdidasQr from '../Components/Discount/AdidasQr';
import QrHomy from '../Components/Discount/QrHomy';


const Discount = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/descuentos" exact>
          <WelcomeDiscount/>
          <DiscountLvl1/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/descuentos/adidas" exact>
          <DiscountAdidas/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/descuentos/adidas/qr1" exact>
          <AdidasQr/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/descuentos/mcdonalds" exact>
          <DiscountMc/>
          </Route>
          <Switch>
          <Route path="/descuentos/mcdonalds/qr2" exact>
          <McQr/>
          </Route>
        </Switch>
        </Switch>
        <Switch>
          <Route path="/descuentos/homy" exact>
          <DiscountHomy/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/descuentos/homy/qr3" exact>
          <QrHomy/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
};

export default Discount;
