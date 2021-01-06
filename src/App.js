import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import HomePage from "./Pages/HomePage";
import Categories from "./Pages/Categories";
import Misiones from "./Pages/Misiones";
import NewMacher from "./Components/Categories/NewMacher";
import TrueMacher from './Components/Categories/TrueMacher';
import MachLover from './Components/Categories/MachLover';
import CabifyMission from './Components/Missions/CabifyMission';
import Information from "./Pages/Information";
import TrueMacher from "./Components/Categories/TrueMacher";
import MachLover from "./Components/Categories/MachLover";
import Information from "./Pages/Information";
import Discount from "./Pages/Discount";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form1" exact>
            <FormPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana" exact>
            <Categories />
          </Route>
        </Switch>
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
          <Route path="/gana/truemacher" exact>
            <TrueMacher />
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana/machlover" exact>
            <MachLover />
          </Route>
        </Switch>
        <Switch>
          <Route path="/misiones/cabify" exact>
            <CabifyMission/>
          <Route path="/informacion" exact>
            <Information />
          </Route>
        </Switch>
        <Switch>
          <Route path="/descuentos" exact>
            <Discount />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
