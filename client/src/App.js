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
import Profile from './views/Profile/Profile';
import MyProfile from './Components/MyProfile/MyProfile';
import AdminCategory from './views/Admin/AdminCategory/AdminCategory';
import AdminUserCreate from './views/Admin/AdminUserCreate/AdminUserCreate';
import SearchView from './views/SearchView/SearchView';
import AdminCreatePost from './views/Admin/AdminCreatePost/AdminCreatePost';
import PanerUserConfig from './views/PanelUser/PanerUserConfig/PanerUserConfig';
import PanelUser from './views/PanelUser/PanelUser';
import CheckoutTest from './CheckoutTest';
import CheckoutTestBACK from './CheckoutTestBACK';
import PaymentSuccessTest from './PaymentSuccessTest';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/testcheckout'>
          <CheckoutTest />
        </Route>
        <Route path='/testcheckoutback'>
          <CheckoutTestBACK />
        </Route>
        <Route path='/paymentsuccesstest/:id'>
          <PaymentSuccessTest />
        </Route>
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
          <TestPosts />
        </Route>
        <Route exact path='/myproftest'>
          <MyProfile />
        </Route>
        <Route path='/profile/:id'>
          <Profile />
        </Route>
        *// Panel de administradorPruebas//*
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route exact path='/admin/category'>
          <AdminCategory />
        </Route>
        <Route exact path='/admin/createuser'>
          <AdminUserCreate />
        </Route>
        <Route exact path='/admin/createpost'>
          <AdminCreatePost />
        </Route>

        *//////////////////**Panel User*/
        <Route exact path='/user'>
          <PanelUser />
        </Route>
        <Route exact path='/user/config'>
          <PanerUserConfig />
        </Route>

        <Route path='/faq'>
          <FAQ />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
