
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import './App.css';
import NotFound from './views/NotFound/NotFound';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
