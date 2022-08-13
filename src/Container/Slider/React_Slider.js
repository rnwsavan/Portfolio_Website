import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export default class React_Slider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="hero-area hero-slider-one">
                        <div className="single-hero-slider-one bg-img" data-bg="assets/images/hero/home-default-1.webp">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-text-one">
                                            <h6 className="text-color-primary mb-10">
                                                CHAIR <br /> COLLECTION <br /> 2022
                                            </h6>
                                            <h1 className="hero-title">
                                                Welcome To <br /> Helendo Store
                                            </h1>
                                            <p className="mt-30"> Many desktop publishing packages and web page editors now use <br />
                                                Lorem Ipsum as their default model text
                                            </p>
                                            <div className="button-box mt-30">
                                                <button className="hero-btn-one btn">Shop now <i className="icon-arrow-right" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-hero-slider-one bg-img" data-bg="assets/images/hero/home-default-2.webp">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-text-one">
                                            <h6 className="text-color-primary mb-10">
                                                CHAIR <br /> COLLECTION <br /> 2022
                                            </h6>
                                            <h1 className="hero-title">
                                                Welcome To <br /> Helendo Store
                                            </h1>
                                            <p className="mt-30"> Many desktop publishing packages and web page editors now use <br />
                                                Lorem Ipsum as their default model text
                                            </p>
                                            <div className="button-box mt-30">
                                                {/* <a href="shop-3-column.html" className="hero-btn-one btn">Shop now <i className="icon-arrow-right" /></a> */}
                                                <NavLink exact to={"/shop_col"} className="hero-btn-one btn">Shop now <i className="icon-arrow-right" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-hero-slider-one bg-img" data-bg="assets/images/hero/home-default-3.webp">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-text-one">
                                            <h6 className="text-color-primary mb-10">
                                                CHAIR <br /> COLLECTION <br /> 2022
                                            </h6>
                                            <h1 className="hero-title">
                                                Welcome To <br /> Helendo Store
                                            </h1>
                                            <p className="mt-30"> Many desktop publishing packages and web page editors now use <br />
                                                Lorem Ipsum as their default model text
                                            </p>
                                            <div className="button-box mt-30">
                                                {/* <a href="shop-3-column.html" className="hero-btn-one btn">Shop now <i className="icon-arrow-right" /></a> */}
                                                <NavLink exact to={"/shop_col"} className="hero-btn-one btn">Shop now <i className="icon-arrow-right" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}