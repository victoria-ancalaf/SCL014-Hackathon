import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormPage from "./Pages/FormPage";

function App() {
  return (
    <div className="App">
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
