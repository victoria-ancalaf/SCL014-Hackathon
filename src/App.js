import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormPage from "./Pages/FormPage";
import Age from './Components/Form/Age'

function App() {
  return (
    <div className="App">
      <Age />
    <Router>
      <Switch>
        <Route path="/formulario">
          <FormPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
