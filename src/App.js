import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import HomePage from './Pages/HomePage';
import Categories from './Pages/Categories';
import Misiones from './Pages/Misiones';
import NewMacher from "./Components/Categories/NewMacher";
import TrueMacher from './Components/Categories/TrueMacher';
import MachLover from './Components/Categories/MachLover';
<<<<<<< HEAD
import CabifyMission from './Components/Missions/CabifyMission';

=======
import Information from "./Pages/Information";
>>>>>>> 2344cd203b96c976a834ad49f7e4e874495e4fbf

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/form1" exact>
          <FormPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/gana" exact>
          <Categories/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/misiones" exact>
          <Misiones/>
        </Route>
      </Switch>
      <Switch>
          <Route path="/gana/newmacher" exact>
            <NewMacher/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana/truemacher" exact>
            <TrueMacher/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana/machlover" exact>
            <MachLover/>
          </Route>
        </Switch>
        <Switch>
<<<<<<< HEAD
          <Route path="/misiones/cabify" exact>
            <CabifyMission/>
=======
          <Route path="/informacion" exact>
            <Information />
>>>>>>> 2344cd203b96c976a834ad49f7e4e874495e4fbf
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
