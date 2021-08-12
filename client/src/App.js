import { Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import './App.css';
import NotFound from './views/NotFound/NotFound';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import PostDetail from './views/PostDetail/PostDetail';
import About from './views/About/About';
import TestPosts from './Components/TestPosts/TestPosts';
import Admin from './views/Admin/Admin';
import { FAQ } from './views/FAQ/FAQ';
import  Profile from './views/Profile/Profile';
import MyProfile from './Components/MyProfile/MyProfile';
import AdminCategory from './views/Admin/AdminCategory/AdminCategory';
import AdminUserCreate from './views/Admin/AdminUserCreate/AdminUserCreate';
import SearchView from './views/SearchView/SearchView';
import AdminCreatePost from './views/Admin/AdminCreatePost/AdminCreatePost';
import Reviews from './Components/Review/Review';


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
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/posts/:id'>
          <PostDetail />
        </Route>
        <Route exact path='/search/:title'>
        <SearchView />
        </Route>
        <Route exact path='/testposts'>
          <Reviews />
        </Route>
        <Route exact path='/myproftest'>
          <MyProfile />
        </Route>
        <Route path='/profile/:id'>
          <Profile />
        </Route>
        *// Panel de administradorPruebas//*
        <Route exact path='/admin'>
          <Admin/>
        </Route>
        <Route exact path='/admin/category'>
          <AdminCategory/>
        </Route>
        <Route exact path='/admin/createuser'>
          <AdminUserCreate/>
        </Route>
        <Route exact path='/admin/createpost'>
          <AdminCreatePost/>
        </Route>
        
        *//////////////////** */
        <Route path='/faq'>
          <FAQ/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
