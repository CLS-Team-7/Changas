import { Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import './App.css';
import NotFound from './views/NotFound/NotFound';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import PostDetail from './views/PostDetail/PostDetail';
import About from './views/About/About';
import Admin from './views/Admin/Admin';
import { FAQ } from './views/FAQ/FAQ';
import Profile from './views/Profile/Profile';
import MyProfile from './Components/MyProfile/MyProfile';
import AdminCategory from './views/Admin/AdminCategory/AdminCategory';
import AdminUserCreate from './views/Admin/AdminUserCreate/AdminUserCreate';
import SearchView from './views/SearchView/SearchView';
import AdminCreatePost from './views/Admin/AdminCreatePost/AdminCreatePost';
import Reviews from './Components/Review/Review';
import PanerUserConfig from './views/PanelUser/PanerUserConfig/PanerUserConfig';
import PanelUser from './views/PanelUser/PanelUser';
import PanelUserPost from './views/PanelUser/PanelUserPost/PanelUserPost';
import PanelCreatePost from './views/PanelUser/PanelCreatePost/PanelCreatePost';
import CheckoutView from './views/CheckoutView/CheckoutView';
import SuccessCheckout from './views/CheckoutView/SuccessCheckout';


function App() {
  return (
    <div className="App">
      <Switch>
        {/*<Route path='/testcheckout'>
          <CheckoutTest />
        </Route>*/}
        <Route path='/testcheckout/:id'>
          <CheckoutView />
        </Route>
        <Route path='/paymentsuccesstest/:id'>
          <SuccessCheckout />
        </Route>
        {/*a
        <Route path='/paymentfailuretest/:id'>
          <PaymentFailureTest /> aun queda crear este componente, pero para la demo final
        </Route>*/}
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
        {/* <Route exact path='/favs'>
          <FavsTest/>
        </Route> */}
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
        <Route exact path='/user/posts'>
          <PanelUserPost />
        </Route>
        <Route exact path='/user/createpost'>
          <PanelCreatePost />
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
