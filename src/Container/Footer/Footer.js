import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(props) {
    return (
        <div>
            <div className="footer-area-wrapper">
                <div className="footer-area section-space--ptb_120">
                    <div className="container">
                        <div className="row footer-widget-wrapper">
                            <div className="col-lg-4 col-md-4 col-sm-6 footer-widget">
                                <h6 className="footer-widget__title mb-20">Address</h6>
                                <ul className="footer-widget__list">
                                    <li><i className="icon_pin" /> Helendo, Chicago, USA 2018</li>
                                    <li> <i className="icon_phone" /><a href="tel:846677028028" className="hover-style-link">+846677028028</a></li>
                                </ul>
                                <ul className="list footer-social-networks mt-25">
                                    <li className="item">
                                        <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
                                            <i className="social social_facebook" />
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a href="https://facebook.com/" target="_blank" aria-label="Facebook">
                                            <i className="social social_twitter" />
                                        </a>
                                    </li>
                                    <li className="item">
                                        <a href="https://instagram.com/" target="_blank" aria-label="Instagram">
                                            <i className="social social_tumblr" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                                <h6 className="footer-widget__title mb-20">Help &amp; Information</h6>
                                <ul className="footer-widget__list">
                                    <li><a href="#" className="hover-style-link">Help &amp; Contact Us</a></li>
                                    <li><a href="#" className="hover-style-link">Returns &amp; Refunds</a></li>
                                    <li><a href="#" className="hover-style-link">Online Stores</a></li>
                                    <li><a href="#" className="hover-style-link">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                                <h6 className="footer-widget__title mb-20">About Us</h6>
                                <ul className="footer-widget__list">
                                    <li>
                                        {/* <a href="#" className="hover-style-link">About Us</a> */}
                                        <NavLink exact className="hover-style-link" to={"/about_us"}>About Us</NavLink>
                                        </li>
                                    <li><a href="#" className="hover-style-link">What We Do</a></li>
                                    <li>
                                        {/* <a href="#" className="hover-style-link">FAQ Page</a> */}
                                        <NavLink exact className="hover-style-link" to={"/faq"}>FAQ Page</NavLink>
                                    </li>
                                    <li>
                                        {/* <a href="#" className="hover-style-link">Contact Us</a> */}
                                        <NavLink exact className="hover-style-link" to={"/contact"}></NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 footer-widget">
                                <h6 className="footer-widget__title mb-20">Newsletter</h6>
                                <div className="footer-widget__newsletter mt-30">
                                    <input type="text" placeholder="Your email address" />
                                    <button className="submit-button"><i className="icon-arrow-right" /></button>
                                </div>
                                <ul className="footer-widget__footer-menu  section-space--mt_60 d-none d-lg-block">
                                    <li><a href="#">Term &amp; Condition</a></li>
                                    <li><a href="#">Policy</a></li>
                                    <li><a href="#">Map</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-area section-space--pb_30">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 text-center text-md-start">
                                <ul className="footer-widget__footer-menu">
                                    <li><a href="#">Term &amp; Condition</a></li>
                                    <li><a href="#">Policy</a></li>
                                    <li><a href="#">Map</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-2 text-center">
                                <div className="footer-logo">
                                    <a href="#"><img src="assets/images/logo/logo.svg" alt="Logo images" /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 order-md-3">
                                <div className="footer-bottom-social">
                                    <h6 className="title">Follow Us On Social</h6>
                                    <ul className="list footer-social-networks ">
                                        <li className="item">
                                            <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
                                                <i className="social social_facebook" />
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="https://facebook.com/" target="_blank" aria-label="Facebook">
                                                <i className="social social_twitter" />
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="https://instagram.com/" target="_blank" aria-label="Instagram">
                                                <i className="social social_tumblr" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="copyright-text text-center  section-space--mt_40">© 2022 Helendo. <a href="https://hasthemes.com/" target="_blank">All Rights Reserved.</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;