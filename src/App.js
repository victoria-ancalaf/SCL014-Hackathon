import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FormPage from "./Pages/FormPage";
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/formulario">
          <FormPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
