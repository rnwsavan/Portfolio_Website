import React from "react";
import Slider from "react-slick";

export default function React_Slider() {
    
    var settings = {
        // loop: true,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="single-hero-slider-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="hero-content-wrap">
                                    <div className="hero-text-7 mt-lg-5">
                                        <h5 className="mb-20 text-color-primary">
                                            Helendo store
                                        </h5>
                                        <h1>Spice jars</h1>
                                        <p className="mt-30">There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration in some formr.</p>
                                        <div className="button-box section-space--mt_60">
                                            <a href="#" className="text-btn-normal font-weight--reguler font-lg-p">Shop Now <i className="icon-arrow-right" /></a>
                                        </div>
                                    </div>
                                    <div className="inner-images">
                                        <div className="image-one">
                                            <img src="assets/images/hero/home-collection-1.webp" width={644} height={465} className="img-fluid" alt="Image" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="single-hero-slider-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hero-content-wrap">
                                    <div className="hero-text-7 mt-lg-5">
                                        <h5 className="mb-20 text-color-primary">
                                            Helendo store
                                        </h5>
                                        <h1>Rattan Bag</h1>
                                        <p className="mt-30">There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration in some formr.</p>
                                        <div className="button-box section-space--mt_60">
                                            <a href="#" className="text-btn-normal font-weight--reguler font-lg-p">Shop Now <i className="icon-arrow-right" /></a>
                                        </div>
                                    </div>
                                    <div className="inner-images">
                                        <div className="image-one">
                                            <img src="assets/images/hero/home-collection-2.webp" width={622} height={390} className="img-fluid" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="single-hero-slider-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hero-content-wrap">
                                    <div className="hero-text-7 mt-lg-5">
                                        <h5 className="mb-20 text-color-primary">
                                            Helendo store
                                        </h5>
                                        <h1>Alarm Clock</h1>
                                        <p className="mt-30">There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration in some formr.</p>
                                        <div className="button-box section-space--mt_60">
                                            <a href="#" className="text-btn-normal font-weight--reguler font-lg-p">Shop Now <i className="icon-arrow-right" /></a>
                                        </div>
                                    </div>
                                    <div className="inner-images">
                                        <div className="image-one">
                                            <img src="assets/images/hero/home-collection-3.webp" width={431} height={385} className="img-fluid" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Slider>
    );
}