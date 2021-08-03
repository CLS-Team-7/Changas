
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import './App.css';
import NotFound from './views/NotFound/NotFound';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import TestCard from './Components/TestCard/TestCard';
import PostDetail from './views/PostDetail/PostDetail';

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
        <Route exact path='/posts/:id'>
          <PostDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
