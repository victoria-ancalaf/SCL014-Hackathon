import React from "react";
import Geolocation from "../Components/Form/Geolocation";
import ModalThanks from "../Components/Form/modalThanks";
import ModalWelcome from "../Components/Form/modalWelcome";
import Preferences from "../Components/Form/Preferences";
import Age from "../Components/Form/Age";
import Gender from "../Components/Form/Gender";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const FormPage = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <ModalWelcome />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form1">
            <Age />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form2">
            <Gender />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form3">
            <Preferences />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form4">
            <Geolocation />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form5">
            <ModalThanks/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default FormPage;
