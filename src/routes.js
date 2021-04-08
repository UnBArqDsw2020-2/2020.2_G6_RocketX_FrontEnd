import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
  
import Rockets from "./pages/Rockets";
import Rocket from "./pages/Rocket";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
  
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/account" component={Account} />
                <Route path="/rockets" component={Rockets} />
                <Route path="/rocket" component={Rocket} />
            </Switch>
        </BrowserRouter>
    );
}
  
export default Routes;
  