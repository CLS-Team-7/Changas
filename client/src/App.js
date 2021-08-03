
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
