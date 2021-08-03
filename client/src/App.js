
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import './App.css';
import LandingPage from './views/LandingPage';

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
      </Switch>
    </div>
  );
}

export default App;
