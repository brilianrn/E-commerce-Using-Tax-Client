import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Footer, Navbar } from './components';
import {
  Cart,
  Detail,
  Home,
  Login
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/item-detail/:itemId'>
          <Navbar />
          <Detail />
          <Footer />
        </Route>
        <Route path='/my-profile/:userId'>
          {/* Profile */}
        </Route>
        <Route path='/register'>
          {/* Register */}
        </Route>
        <Route path='/my-cart'>
          <Navbar />
          <Cart />
          <Footer />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Navbar />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
