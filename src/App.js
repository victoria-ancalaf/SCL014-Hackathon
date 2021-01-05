import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FormPage from "./Pages/FormPage";
import Competitive from './Components/Form/Competitive'


function App() {
  return (
    <div className="App">
      <Competitive />
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
