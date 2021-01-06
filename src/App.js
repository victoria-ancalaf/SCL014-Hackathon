import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import HomePage from './Pages/HomePage';
import Categories from './Pages/Categories';
import Misiones from './Pages/Misiones'

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
 
    </Router>
    </div>
  );
}

export default App;
