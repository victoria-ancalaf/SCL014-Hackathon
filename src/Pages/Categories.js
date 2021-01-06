import React from "react";
import MisionPoints from "../Components/Categories/MisionPoint";
import InfoPointDiscount from "../Components/Categories/infoPointDiscount";
import NewMacher from "../Components/Categories/NewMacher";
import Levels from "../Components/Categories/Levels";
import Misiones from "./Misiones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgressBar from "../Components/Categories/ProgressBar";

const Categories = () => {
  return (
    <div>
      <ProgressBar />
      <MisionPoints />
      <Router>
        <Switch>
          <Route path="/misiones" exact>
            <Misiones />
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana/newmacher" exact>
            <NewMacher />
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana" exact>
            <Levels />
          </Route>
        </Switch>
      </Router>
      <InfoPointDiscount />
    </div>
  );
};


export default Categories;
