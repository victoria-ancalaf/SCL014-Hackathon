import React from 'react';
import MisionPoints from '../Components/Categories/MisionPoint';
//import InfoPointDiscount from '../Components/Categories/infoPointDiscount';
import NewMacher from '../Components/Categories/NewMacher';
import Levels from '../Components/Categories/Levels';
// import Misiones from './Misiones';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Categories = () => {
    return (
        <div>
           <MisionPoints/>
            <Router>
            <Switch>
          <Route path="/categorias/newmacher" exact>
          <NewMacher/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/categorias" exact>
          <Levels />
          </Route>
        </Switch>
        </Router>
           {/* <InfoPointDiscount/> */}
           {/* <Misiones /> */}
        </div>
    );
};

export default Categories;
