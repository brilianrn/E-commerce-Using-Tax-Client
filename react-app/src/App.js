import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Navbar } from './components';
import {
  Detail,
  Home
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/item-detail/:itemId'>
          <Detail />
        </Route>
        <Route path='/my-profile/:userId'>
          {/* Profile */}
        </Route>
        <Route path='/register'>
          {/* Register */}
        </Route>
        <Route path='/login'>
          {/* Login */}
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
