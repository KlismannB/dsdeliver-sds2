import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import NavBar from './Navbar';

function Routes() {
   return( 
   <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
            <Route path="/orders">
                <Orders></Orders>
            </Route>
            <Route path ="/">
                <Home></Home>
            </Route>
        </Switch>
    </BrowserRouter>
   )
}

export default Routes;