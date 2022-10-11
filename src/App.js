import logo from './logo.svg';
import './App.css';
import Header from './Container/Header/Header';
import Footer from './Container/Footer/Footer';
import Home from './Components/Pages/Home';
import About_us from './Components/Pages/About_us';
import Shop_sidebar from './Components/Pages/Shop_sidebar';
import Shop_border from './Components/Pages/Shop_border';
import Product_on_sale from './Components/Pages/Product_on_sale';
import Product_groupped from './Components/Pages/Product_groupped';
import Login from './Components/Pages/Login';
import Faq from './Components/Pages/Faq';
import Error_Page from './Components/Pages/Error_Page';
import Contact from './Components/Pages/Contact';
import Comming_Soon from './Components/Pages/Comming_Soon';
import Checkout from './Components/Pages/Checkout';
import Cart from './Components/Pages/Cart';
import Blog from './Components/Pages/Blog';
import Account from './Components/Pages/Account';
import { Route, Switch } from 'react-router-dom';
import Product_detail from './Components/Pages/Product_detail';
import Blog_grid from './Components/Pages/Blog_grid';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
// import { configureStore } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './Redux/Store';
import Category_admin from './AdminPanel/Components/Category_admin';
import AddProduct_admin from './AdminPanel/Components/AddProduct_admin';


function App() {
  // const store = configureStore();
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor} >
              <Header />
              <Switch>
                <PublicRoute exact path={"/"} component={Home} />
                <PublicRoute exact path={"/category_admin"} component={Category_admin} />
                <PublicRoute exact path={"/product_admin"} component={AddProduct_admin} />
                <PublicRoute exact path={"/home"} component={Home} />
                <PublicRoute exact path={"/about_us"} component={About_us} />
                <PrivateRoute exact path={"/account"} component={Account} />
                <PublicRoute restricted={true} exact path={"/login"} component={Login} />
                <PublicRoute exact path={"/faq"} component={Faq} />
                <PublicRoute exact path={"/error"} component={Error_Page} />
                <PublicRoute exact path={"/contact"} component={Contact} />
                <PublicRoute exact path={"/comming"} component={Comming_Soon} />
                <PublicRoute exact path={"/checkout"} component={Checkout} />
                <PublicRoute exact path={"/cart"} component={Cart} />
                <PublicRoute exact path={"/blog"} component={Blog} />
                <PublicRoute exact path={"/blog_grid"} component={Blog_grid} />
                <PublicRoute exact path={"/product_groupped"} component={Product_groupped} />
                <PublicRoute exact path={"/product_detail"} component={Product_detail} />
                <PublicRoute exact path={"/product_sale"} component={Product_on_sale} />
                <PublicRoute exact path={"/shop_border"} component={Shop_border} />
                <PublicRoute exact path={"/shop_sidebar"} component={Shop_sidebar} />
              </Switch>
              <Footer />
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
