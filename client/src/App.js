
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import Header from './Components/Header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home'>
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
