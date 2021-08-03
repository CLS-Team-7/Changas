
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import './App.css';
import NotFound from './views/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
