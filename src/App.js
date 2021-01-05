import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgressBar from "./Components/Categories/ProgressBar";
import FormPage from "./Pages/FormPage";
import HomePage from './Pages/HomePage';
import Categories from './Pages/Categories';

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
        <Route path="/categorias" exact>
          <Categories/>
        </Route>
      </Switch>
 
    </Router>
    </div>
  );
}

export default App;
