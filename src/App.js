import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormPage from "./Pages/FormPage";
// import Age from './Components/Form/Age'; 
import Competitive from './Components/Form/Competitive'

function App() {
  return (
    <div className="App">
      {/* <Age /> */}
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
