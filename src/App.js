import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard/index';
import Account from './pages/Account/index';
import Rockets from './pages/Rockets/index';
import Rocket from './pages/Rocket/index';

function App() {  
  return (
    <>
      <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/account">Minha conta</Link>
            </li>
            <li>
              <Link to="/rockets">Foguetes</Link>
            </li>
          </ul>
          <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/account" component={Account} />
              <Route path="/rockets" component={Rockets} />
              <Route path="/rocket" component={Rocket} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
