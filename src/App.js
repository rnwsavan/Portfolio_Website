import logo from './logo.svg';
import './App.css';
import Header from './Container/Header/Header';
import Footer from './Container/Footer/Footer';
import Home from './Components/Pages/Home';
import About_us from './Components/Pages/About_us';
import Wishlist from './Components/Pages/Wishlist';
import Shop_sidebar from './Components/Pages/Shop_sidebar';
import Shop_border from './Components/Pages/Shop_border';
import Product_on_sale from './Components/Pages/Product_on_sale';
import Product_groupped from './Components/Pages/Product_groupped';
import Order from './Components/Pages/Order';
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
import Shop_carousel from './Components/Pages/Shop_carousel';
import Product_detail from './Components/Pages/Product_detail';
import Blog_grid from './Components/Pages/Blog_grid';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about_us"} component={About_us} />
        <Route exact path={"/account"} component={Account} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/faq"} component={Faq} />
        <Route exact path={"/error"} component={Error_Page} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/comming"} component={Comming_Soon} />
        <Route exact path={"/checkout"} component={Checkout} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/blog"} component={Blog} />
        <Route exact path={"/blog_grid"} component={Blog_grid} />
        <Route exact path={"/order"} component={Order} />
        <Route exact path={"/product_groupped"} component={Product_groupped} />
        <Route exact path={"/product_detail"} component={Product_detail} />
        <Route exact path={"/product_sale"} component={Product_on_sale} />
        <Route exact path={"/shop_border"} component={Shop_border} />
        <Route exact path={"/shop_carousel"} component={Shop_carousel} />

        <Route exact path={"/shop_sidebar"} component={Shop_sidebar} />
        <Route exact path={"/whishlist"} component={Wishlist} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
