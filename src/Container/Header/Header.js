import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LogoutUser } from '../../Redux/Action/auth.action';
import Alert from '../Alert/Alert';

function Header(props) {
    const dispatch = useDispatch()
    
    let auth = useSelector(state => state.auth)
    // console.log(auth);
    const handleLogout = () => {
        dispatch(LogoutUser())
    }
    return (
        <div>
            {/*====================  header area ====================*/}
            <div className="header-area header-area--default bg-white">
                {/* Header Bottom Wrap Start */}
                <header className="header-area header_absolute header_height-90 header-sticky">
                    <div className="container-fluid container-fluid--cp-100">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-lg-3 col-6">
                                <div className="logo text-start">
                                    <a href="#"><img src="assets/images/logo/logo.svg" alt /></a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-6  d-none d-lg-block">
                                {/* navigation menu */}
                                <div className="header__navigation d-none d-lg-block">
                                    <nav className="navigation-menu">
                                        <ul className="justify-content-center">
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href="#"><span>Home</span></a>
                                                <ul className="submenu">

                                                    <li>
                                                        {/* <a href="index-5.html"><span>Home V6 – Full Width</span></a> */}
                                                        <NavLink exact to={"/"}><span>Home V6 – Full Width</span></NavLink>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="has-children">
                                                {/* <a href="#"><span>Shop</span></a> */}
                                                <NavLink exact to={"/shop_sidebar"}><span>Shop</span></NavLink>
                                                {/* mega menu */}
                                                <ul className="megamenu megamenu--mega">
                                                    <li>
                                                        <h2 className="page-list-title">Shop Pages</h2>
                                                        <ul>
                                                            <li>
                                                                {/* <a href="shop-left-sidebar.html"><span>Shop Left Sidebar</span></a> */}
                                                                <NavLink exact to={"/shop_sidebar"}><span>Shop Left Sidebar</span></NavLink>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h2 className="page-list-title">Other Pages</h2>
                                                        <ul>
                                                            <li>
                                                                {/* <a href="cart.html"><span>Cart</span></a> */}
                                                                <NavLink exact to={"/cart"}><span>Cart</span></NavLink>
                                                            </li>

                                                            <li>
                                                                {/* <a href="checkout.html"><span>Checkout</span></a> */}
                                                                <NavLink exact to={"/checkout"}><span>Checkout</span></NavLink>
                                                            </li>
                                                            <li>
                                                                {/* <a href="my-account.html"><span>My Account</span></a> */}
                                                                <NavLink exact to={"/account"}><span>My Account</span></NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href="#"><span>Pages</span></a>
                                                {/* multilevel submenu */}
                                                <ul className="submenu">
                                                    <li>
                                                        {/* <a href="about-us.html"><span>About Us</span></a> */}
                                                        <NavLink exact to={"/about_us"}><span>About Us</span></NavLink>
                                                    </li>

                                                    <li>
                                                        {/* <a href="contact-us.html"><span>Contact</span></a> */}
                                                        <NavLink exact to={"/contact"}><span>Contact</span></NavLink>
                                                    </li>
                                                    <li>
                                                        {/* <a href="faq.html"><span>FAQ Pages</span></a> */}
                                                        <NavLink exact to={"/faq"}><span>FAQ Pages</span></NavLink>
                                                    </li>
                                                    <li>
                                                        {/* <a href="coming-soon.html"><span>Coming Soon</span></a> */}
                                                        <NavLink exact to={"/comming"}><span>Coming Soon</span></NavLink>
                                                    </li>
                                                    <li>
                                                        {/* <a href="404-page.html"><span>404 Page</span></a> */}
                                                        <NavLink exact to={"/error"}><span>404 Page</span></NavLink>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                {
                                                    auth.user === null ?
                                                        <NavLink exact to={"/login"}><span>Login</span></NavLink> :
                                                        <NavLink exact onClick={() => handleLogout()} to={"/login"}><span>Logout</span></NavLink>
                                                }

                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href="#"><span>Blog</span></a>
                                                {/* multilevel submenu */}
                                                <ul className="submenu">
                                                    <li>
                                                        {/* <a href="blog-grid.html"><span>Blog Grid</span></a> */}
                                                        <NavLink exact to={"/blog_grid"}><span>Blog Grid</span></NavLink>
                                                    </li>


                                                    <li>
                                                        {/* <a href="single-blog-post-2.html"><span>Single Post V2</span></a> */}
                                                        <NavLink exact to={"/blog"}><span>Single Post V2</span></NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-lg-3 col-6">
                                <div className="header-right-side text-end">
                                    <div className="header-right-items">
                                        {/* <a href="#miniCart" className=" header-cart minicart-btn toolbar-btn header-icon">
                                            <i className="icon-bag2" />
                                            <span className="item-counter" onClick={() => increment()}>0</span>
                                        </a> */}
                                        <NavLink exact to={"/cart"} className=" header-cart minicart-btn toolbar-btn header-icon">
                                        <i className="icon-bag2" />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Alert />
                    </div>
                </header>
                {/* Header Bottom Wrap End */}
            </div>
            {/*====================  End of header area  ====================*/}
        </div>


    );
}

export default Header;