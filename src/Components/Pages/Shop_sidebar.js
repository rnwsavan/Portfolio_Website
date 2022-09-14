import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Navbar from '../../Container/Navbar/Navbar';
import { getproductdata } from '../../Redux/Action/product.action';

function Shop_sidebar(props) {
    const [Product, setProduct] = useState([]);
    

    const dispatch = useDispatch()
    const products = useSelector(state => state.product)

    const uniqueList = [
        "ALL",
        ...new Set(
            products.product.map((curElem) => {
                return curElem.category;
            })
        ),
    ];

    useEffect(
        () => {
            dispatch(getproductdata())
            setProduct(products.product)
        },
        []
    )

    const filterItem = (category) => {
        console.log("category", category);
        if (category === "All") {
            setProduct(products);
            return;
        }

        const updatedList = products.product.filter((curElem1, index) => {
            return (
                curElem1.category === category
            )

        });
        setProduct(updatedList);
        console.log("updatedList", updatedList);
    };


    let finalData = Product.length > 0 ? Product : products.product;

    console.log(products.product);
    return (
        <div>
            {/* breadcrumb-area start */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row breadcrumb_box  align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-start">
                                    <h2 className="breadcrumb-title">Shop</h2>
                                </div>
                                <div className="col-lg-6  col-md-6 col-sm-6">
                                    {/* breadcrumb-list start */}
                                    <ul className="breadcrumb-list text-center text-sm-end">
                                        <li className="breadcrumb-item">
                                            {/* <a href="index-2.html">Home</a> */}
                                            <NavLink exact to={"/"}>Home</NavLink>
                                        </li>
                                        <li className="breadcrumb-item active">Shop</li>
                                    </ul>
                                    {/* breadcrumb-list end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrumb-area end */}
            <main>
                <div id="main-wrapper">
                    <div className="site-wrapper-reveal border-bottom">
                        {/* Product Area Start */}
                        <div className="product-wrapper section-space--ptb_120">
                            <div className="container">
                                <div className="row">


                                    <div className="col-lg-3 col-md-3 order-md-1 order-2  small-mt__40">
                                        <div className="shop-widget widget-shop-categories">
                                            <div className="product-filter">
                                                <h6 className="mb-20">Categories</h6>
                                                <ul className="widget-nav-list">
                                                
                                                <a><Navbar filterItem={filterItem} uniqueList={uniqueList} /></a>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Product Filter */}
                                        <div className="shop-widget widget-color">
                                            <div className="product-filter">
                                                <h6 className="mb-20">Color</h6>
                                                <ul className="widget-nav-list">
                                                    <li><a href="#"><span className="swatch-color black" /></a></li>
                                                    <li><a href="#"><span className="swatch-color green" /></a></li>
                                                    <li><a href="#"><span className="swatch-color grey" /></a></li>
                                                    <li><a href="#"><span className="swatch-color red" /></a></li>
                                                    <li><a href="#"><span className="swatch-color white" /></a></li>
                                                    <li><a href="#"><span className="swatch-color yellow" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Product Filter */}
                                        <div className="shop-widget widget-size">
                                            <div className="product-filter">
                                                <h6 className="mb-20">Size</h6>
                                                <ul className="widget-nav-list">
                                                    <li><a href="#">Large <span className="count">1</span></a></li>
                                                    <li><a href="#">Medium <span className="count">1</span></a></li>
                                                    <li><a href="#">Small <span className="count">1</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Product Filter */}
                                        <div className="shop-widget">
                                            <div className="product-filter widget-price">
                                                <h6 className="mb-20">Price</h6>
                                                <ul className="widget-nav-list">
                                                    <li><a href="#">$0.00 - $20.00</a></li>
                                                    <li><a href="#">$20.00 - $40.00</a></li>
                                                    <li><a href="#">£40.00 - £50.00</a></li>
                                                    <li><a href="#">£50.00 - £60.00</a></li>
                                                    <li><a href="#">£60.00 +</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Product Filter */}
                                        <div className="shop-widget">
                                            <div className="product-filter">
                                                <h6 className="mb-20">Tags</h6>
                                                <div className="tagcloud"><a href="#" className="selected">All</a><a href="#" className>Accesssories</a><a href="#" className>Box</a><a href="#" className>chair</a><a href="#" className>Deco</a><a href="#" className>Furniture</a><a href="#" className>Glass</a><a href="#" className>Pottery</a><a href="#" className>Table</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9  order-md-2 order-1">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-4">
                                                <div className="shop-toolbar__items shop-toolbar__item--right">
                                                    <div className="shop-toolbar__items-wrapper">
                                                        <div className="shop-toolbar__item">
                                                            <ul className="nav toolber-tab-menu justify-content-start" role="tablist">
                                                                <li className="tab__item nav-item active">
                                                                    <a className="nav-link active" data-bs-toggle="tab" href="#tab_columns_01" role="tab">
                                                                        <img src="assets/images/svg/column-03.svg" className="img-fluid" alt="Columns 03" />
                                                                    </a>
                                                                </li>
                                                                <li className="tab__item nav-item">
                                                                    <a className="nav-link" data-bs-toggle="tab" href="#tab_columns_02" role="tab"><img src="assets/images/svg/column-04.svg" className="img-fluid" alt="Columns 03" /> </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="shop-toolbar__item shop-toolbar__item--filter ">
                                                            <a className="shop-filter-active" href="#">Filter<i className="icon-plus" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="tab_columns_01">
                                                <div className="row">
                                                    {finalData && finalData.map((val, index) => {
                                                        return (
                                                            <>
                                                                <div className="col-lg-4 col-md-4 col-sm-6" key={val.id}>
                                                                    {/* Single Product Item Start */}
                                                                    <div className="single-product-item text-center" >

                                                                        <div className="products-images">
                                                                        
                                                                            <NavLink exact to={"/product_detail"}>
                                                                                <img src={val.url} className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                            </NavLink>
                                                                            <div className="product-actions">
                                                                                <a href="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus" /><span className="tool-tip">Quick View</span></a>

                                                                                <NavLink exact to={"/product_detail"}><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></NavLink>
                                                                              
                                                                                <NavLink exact to={"/whishlist"}><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></NavLink>
                                                                            </div>
                                                                        </div>
                                                                        <div className="product-content">
                                                                            <h6 className="prodect-title">
                                                                               
                                                                                <NavLink exact to={"/product_detail"}>{val.productname}</NavLink>
                                                                            </h6>
                                                                            <div className="prodect-price">
                                                                                <span className="new-price">{val.price}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>{/* Single Product Item End */}
                                                                </div>

                                                            </>
                                                        )
                                                    })}

                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab_columns_02">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                                        {/* Single Product Item Start */}
                                                        <div className="single-product-item text-center">
                                                            <div className="products-images">
                                                                {/* <a href="product-details.html" className="product-thumbnail">
                                                                    <img src="assets/images/product/1_3-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                </a> */}
                                                                <NavLink exact to={"/product_detail"}><img src="assets/images/product/1_3-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} /></NavLink>
                                                                <div className="product-actions">
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus" /><span className="tool-tip">Quick View</span></a>
                                                                    {/* <a href="product-details.html"><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></a> */}
                                                                    <NavLink exact to={"/product_detail"}><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></NavLink>
                                                                    {/* <a href="wishlist.html"><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></a> */}
                                                                    <NavLink exact to={"/whishlist"}><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h6 className="prodect-title">
                                                                    {/* <a href="product-details.html">Smooth Disk</a> */}
                                                                    <NavLink exact to={"/product_detail"}>Smooth Disk</NavLink>
                                                                </h6>
                                                                <div className="prodect-price">
                                                                    <span className="new-price">£46.00</span>
                                                                </div>
                                                            </div>
                                                        </div>{/* Single Product Item End */}
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                                        {/* Single Product Item Start */}
                                                        <div className="single-product-item text-center">
                                                            <div className="products-images">
                                                                {/* <a href="product-details.html" className="product-thumbnail">
                                                                    <img src="assets/images/product/1_4-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                    <span className="ribbon onsale">
                                                                        -14%
                                                                    </span>
                                                                </a> */}
                                                                <NavLink exact to={"/product_detail"}><img src="assets/images/product/1_4-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                </NavLink>
                                                                <div className="product-actions">
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus" /><span className="tool-tip">Quick View</span></a>
                                                                    {/* <a href="product-details.html"><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></a> */}
                                                                    <NavLink exact to={"/product_detail"}><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></NavLink>
                                                                    {/* <a href="wishlist.html"><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></a> */}
                                                                    <NavLink exact to={"/whishlist"}><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h6 className="prodect-title">
                                                                    {/* <a href="product-details.html">Wooden Flowerpot</a> */}
                                                                    <NavLink exact to={"/product_detail"}>Wooden Flowerpot</NavLink>
                                                                </h6>
                                                                <div className="prodect-price">
                                                                    <span className="new-price">£40.00</span> - <span className="old-price"> £635.00</span>
                                                                </div>
                                                            </div>
                                                        </div>{/* Single Product Item End */}
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                                        {/* Single Product Item Start */}
                                                        <div className="single-product-item text-center">
                                                            <div className="products-images">
                                                                {/* <a href="product-details.html" className="product-thumbnail">
                                                                    <img src="assets/images/product/1_5-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                </a> */}
                                                                <NavLink exact to={"/product_detail"}> <img src="assets/images/product/1_5-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} /></NavLink>
                                                                <div className="product-actions">
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus" /><span className="tool-tip">Quick View</span></a>
                                                                    {/* <a href="product-details.html"><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></a> */}
                                                                    <NavLink exact to={"/product_detail"}><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></NavLink>
                                                                    {/* <a href="wishlist.html"><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></a> */}
                                                                    <NavLink exact to={"/whishlist"}><span className="tool-tip">Browse Wishlist</span></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h6 className="prodect-title">
                                                                    {/* <a href="product-details.html">Living room &amp; Bedroom lights</a> */}
                                                                    <NavLink exact to={"/product_detail"}>iving room &amp; Bedroom lights</NavLink>
                                                                </h6>
                                                                <div className="prodect-price">
                                                                    <span className="new-price">£60.00</span> - <span className="old-price"> £69.00</span>
                                                                </div>
                                                            </div>
                                                        </div>{/* Single Product Item End */}
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                                        {/* Single Product Item Start */}
                                                        <div className="single-product-item text-center">
                                                            <div className="products-images">
                                                                {/* <a href="product-details.html" className="product-thumbnail">
                                                                    <img src="assets/images/product/1_6-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                </a> */}
                                                                <NavLink exact to={"/product_detail"}><img src="assets/images/product/1_6-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} /></NavLink>
                                                                <div className="product-actions">
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus" /><span className="tool-tip">Quick View</span></a>
                                                                    {/* <a href="product-details.html"><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></a> */}
                                                                    <NavLink exact to={"/product_detail"}><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></NavLink>
                                                                    {/* <a href="wishlist.html"><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></a> */}
                                                                    <NavLink exact to={"/whishlist"}><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h6 className="prodect-title">
                                                                    {/* <a href="product-details.html">Gray lamp</a> */}
                                                                    <NavLink exact to={"/product_detail"}>Gray lamp</NavLink>
                                                                </h6>
                                                                <div className="prodect-price">
                                                                    <span className="new-price">£80.00</span>
                                                                </div>
                                                            </div>
                                                        </div>{/* Single Product Item End */}
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                                        {/* Single Product Item Start */}
                                                        <div className="single-product-item text-center">
                                                            <div className="products-images">
                                                                {/* <a href="product-details.html" className="product-thumbnail">
                                                                    <img src="assets/images/product/1_7-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                </a> */}
                                                                <NavLink exact to={"/product_detail"}><img src="assets/images/product/1_7-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} /></NavLink>
                                                                <div className="product-actions">
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus" /><span className="tool-tip">Quick View</span></a>
                                                                    {/* <a href="product-details.html"><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></a> */}
                                                                    <NavLink exact to={"/product_detail"}><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></NavLink>
                                                                    {/* <a href="wishlist.html"><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></a> */}
                                                                    <NavLink exact to={"/whishlist"}><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h6 className="prodect-title">
                                                                    {/* <a href="product-details.html">Decoration wood</a> */}
                                                                    <NavLink exact to={"/product_detail"}>Decoration wood</NavLink>
                                                                </h6>
                                                                <div className="prodect-price">
                                                                    <span className="new-price">£50.00</span>
                                                                </div>
                                                            </div>
                                                        </div>{/* Single Product Item End */}
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                                        {/* Single Product Item Start */}
                                                        <div className="single-product-item text-center">
                                                            <div className="products-images">
                                                                {/* <a href="product-details.html" className="product-thumbnail">
                                                                    <img src="assets/images/product/1_8-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                </a> */}
                                                                <NavLink exact to={"/product_detail"}><img src="assets/images/product/1_8-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} /></NavLink>
                                                                <div className="product-actions">
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus" /><span className="tool-tip">Quick View</span></a>
                                                                    {/* <a href="product-details.html"><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></a> */}
                                                                    <NavLink exact to={"/product_detail"}><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></NavLink>
                                                                    {/* <a href="wishlist.html"><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></a> */}
                                                                    <NavLink exact to={"/whishlist"}><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h6 className="prodect-title">
                                                                    {/* <a href="product-details.html">Teapot with black tea</a> */}
                                                                    <NavLink exact to={"/product_detail"}>Teapot with black tea</NavLink>
                                                                </h6>
                                                                <div className="prodect-price">
                                                                    <span className="new-price">£20.00</span> - <span className="old-price"> £135.00</span>
                                                                </div>
                                                            </div>
                                                        </div>{/* Single Product Item End */}
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                                        {/* Single Product Item Start */}
                                                        <div className="single-product-item text-center">
                                                            <div className="products-images">
                                                                {/* <a href="product-details.html" className="product-thumbnail">
                                                                    <img src="assets/images/product/1_1-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                    <span className="ribbon out-of-stock ">
                                                                        Out Of Stock
                                                                    </span>
                                                                </a> */}
                                                                <NavLink exact to={"/product_detail"}> <img src="assets/images/product/1_1-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                </NavLink>
                                                                <div className="product-actions">
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus" /><span className="tool-tip">Quick View</span></a>
                                                                    {/* <a href="product-details.html"><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></a> */}
                                                                    <NavLink exact to={"/product_detail"}><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></NavLink>
                                                                    {/* <a href="wishlist.html"><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></a> */}
                                                                    <NavLink exact to={"/whishlist"}><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h6 className="prodect-title">
                                                                    {/* <a href="product-details.html">Teapot with black tea</a> */}
                                                                    <NavLink exact to={"/product_detail"}>Teapot with black tea</NavLink>
                                                                </h6>
                                                                <div className="prodect-price">
                                                                    <span className="new-price">£40.00</span> - <span className="old-price"> £635.00</span>
                                                                </div>
                                                            </div>
                                                        </div>{/* Single Product Item End */}
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                                        {/* Single Product Item Start */}
                                                        <div className="single-product-item text-center">
                                                            <div className="products-images">
                                                                {/* <a href="product-details.html" className="product-thumbnail">
                                                                    <img src="assets/images/product/1_8-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} />
                                                                </a> */}
                                                                <NavLink exact to={"/product_detail"}><img src="assets/images/product/1_8-300x300.webp" className="img-fluid" alt="Product Images" width={300} height={300} /></NavLink>
                                                                <div className="product-actions">
                                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#prodect-modal"><i className="p-icon icon-plus" /><span className="tool-tip">Quick View</span></a>
                                                                    {/* <a href="product-details.html"><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></a> */}
                                                                    <NavLink exact to={"/product_detail"}><i className="p-icon icon-bag2" /> <span className="tool-tip">Add to cart</span></NavLink>
                                                                    {/* <a href="wishlist.html"><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></a> */}
                                                                    <NavLink exact to={"/whishlist"}><i className="p-icon icon-heart" /> <span className="tool-tip">Browse Wishlist</span></NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="product-content">
                                                                <h6 className="prodect-title">
                                                                    {/* <a href="product-details.html">Teapot with black tea</a> */}
                                                                    <NavLink exact to={"/product_detail"}>Teapot with black tea</NavLink>
                                                                </h6>
                                                                <div className="prodect-price">
                                                                    <span className="new-price">£20.00</span> - <span className="old-price"> £135.00</span>
                                                                </div>
                                                            </div>
                                                        </div>{/* Single Product Item End */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <ul className="page-pagination text-center mt-40">
                                                        <li><span className="page-numbers current">1</span></li>
                                                        <li><a className="page-numbers" href="#">2</a></li>
                                                        <li><a className="page-numbers" href="#">3</a></li>
                                                        <li><a className="next page-numbers" href="#">Next Page<i className="icon-chevron-right" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product Area End */}
                    </div>
                    {/*====================  footer area ====================*/}
                    {/* <div className="footer-area-wrapper">
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
                                        <li><a href="#" className="hover-style-link">About Us</a></li>
                                        <li><a href="#" className="hover-style-link">What We Do</a></li>
                                        <li><a href="#" className="hover-style-link">FAQ Page</a></li>
                                        <li><a href="#" className="hover-style-link">Contact Us</a></li>
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
                </div> */}
                    {/*====================  End of footer area  ====================*/}
                </div>
            </main>
            {/* Modal */}
            <div className="product-modal-box modal fade" id="prodect-modal" tabIndex={-1} role="dialog">
                <div className="modal-dialog  modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span className="icon-cross" aria-hidden="true" /></button>
                        </div>
                        <div className="modal-body container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="quickview-product-active mr-lg-5">
                                        <a href="#" className="images">
                                            <img src="assets/images/product/2-570x570.webp" className="img-fluid" alt />
                                        </a>
                                        <a href="#" className="images">
                                            <img src="assets/images/product/3-600x600.webp" className="img-fluid" alt />
                                        </a>
                                        <a href="#" className="images">
                                            <img src="assets/images/product/4-768x768.webp" className="img-fluid" alt />
                                        </a>
                                    </div>
                                    {/* Thumbnail Large Image End */}
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="product-details-content quickview-content-wrap ">
                                        <h5 className="font-weight--reguler mb-10">Teapot with black tea</h5>
                                        <div className="quickview-ratting-review mb-10">
                                            <div className="quickview-ratting-wrap">
                                                <div className="quickview-ratting">
                                                    <i className="yellow icon_star" />
                                                    <i className="yellow icon_star" />
                                                    <i className="yellow icon_star" />
                                                    <i className="yellow icon_star" />
                                                    <i className="yellow icon_star" />
                                                </div>
                                                <a href="#"> 2 customer review</a>
                                            </div>
                                        </div>
                                        <h3 className="price">£59.99</h3>
                                        <div className="stock in-stock mt-10">
                                            <p>Available: <span>In stock</span></p>
                                        </div>
                                        <div className="quickview-peragraph mt-10">
                                            <p>At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.</p>
                                        </div>
                                        <div className="quickview-action-wrap mt-30">
                                            <div className="quickview-cart-box">
                                                <div className="quickview-quality">
                                                    <div className="cart-plus-minus">
                                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={0} />
                                                    </div>
                                                </div>
                                                <div className="quickview-button">
                                                    <div className="quickview-cart button">
                                                        <a href="product-details.html" className="btn--lg btn--black font-weight--reguler text-white">Add to cart</a>
                                                    </div>
                                                    <div className="quickview-wishlist button">
                                                        <a title="Add to wishlist" href="#"><i className="icon-heart" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product_meta mt-30">
                                            <div className="sku_wrapper item_meta">
                                                <span className="label"> SKU: </span>
                                                <span className="sku"> 502 </span>
                                            </div>
                                            <div className="posted_in item_meta">
                                                <span className="label">Categories: </span><a href="#">Furniture</a>, <a href="#">Table</a>
                                            </div>
                                            <div className="tagged_as item_meta">
                                                <span className="label">Tag: </span><a href="#">Pottery</a>
                                            </div>
                                        </div>
                                        <div className="product_socials section-space--mt_60">
                                            <span className="label">Share this items :</span>
                                            <ul className="helendo-social-share socials-inline">
                                                <li>
                                                    <a className="share-twitter helendo-twitter" href="#" target="_blank"><i className="social_twitter" /></a>
                                                </li>
                                                <li>
                                                    <a className="share-facebook helendo-facebook" href="#" target="_blank"><i className="social_facebook" /></a>
                                                </li>
                                                <li>
                                                    <a className="share-google-plus helendo-google-plus" href="#" target="_blank"><i className="social_googleplus" /></a>
                                                </li>
                                                <li>
                                                    <a className="share-pinterest helendo-pinterest" href="#" target="_blank"><i className="social_pinterest" /></a>
                                                </li>
                                                <li>
                                                    <a className="share-linkedin helendo-linkedin" href="#" target="_blank"><i className="social_linkedin" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal end */}
            {/* Modal */}
            <div className="header-login-register-wrapper modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-box-wrapper">
                            <div className="helendo-tabs">
                                <ul className="nav" role="tablist">
                                    <li className="tab__item nav-item active">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#tab_list_06" role="tab">Login</a>
                                    </li>
                                    <li className="tab__item nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab_list_07" role="tab">Our Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content content-modal-box">
                                <div className="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                                    <form action="#" className="account-form-box">
                                        <h6>Login your account</h6>
                                        <div className="single-input">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="single-input">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <div className="checkbox-wrap mt-10">
                                            <label className="label-for-checkbox inline mt-15">
                                                <input className="input-checkbox" name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> <span>Remember me</span>
                                            </label>
                                            <a href="#" className=" mt-10">Lost your password?</a>
                                        </div>
                                        <div className="button-box mt-25">
                                            <a href="#" className="btn btn--full btn--black">Log in</a>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="tab_list_07" role="tabpanel">
                                    <form action="#" className="account-form-box">
                                        <h6>Register An Account</h6>
                                        <div className="single-input">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="single-input">
                                            <input type="text" placeholder="Email address" />
                                        </div>
                                        <div className="single-input">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <p className="mt-15">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="privacy-policy-link" target="_blank">privacy policy</a>.</p>
                                        <div className="button-box mt-25">
                                            <a href="#" className="btn btn--full btn--black">Register</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="header-login-register-wrapper modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-box-wrapper">
                            <div className="helendo-tabs">
                                <ul className="nav" role="tablist">
                                    <li className="tab__item nav-item active">
                                        <a className="nav-link active" data-bs-toggle="tab" href="#tab_list_06" role="tab">Login</a>
                                    </li>
                                    <li className="tab__item nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab_list_07" role="tab">Our Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content content-modal-box">
                                <div className="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                                    <form action="#" className="account-form-box">
                                        <h6>Login your account</h6>
                                        <div className="single-input">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="single-input">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <div className="checkbox-wrap mt-10">
                                            <label className="label-for-checkbox inline mt-15">
                                                <input className="input-checkbox" name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> <span>Remember me</span>
                                            </label>
                                            <a href="#" className=" mt-10">Lost your password?</a>
                                        </div>
                                        <div className="button-box mt-25">
                                            <a href="#" className="btn btn--full btn--black">Log in</a>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="tab_list_07" role="tabpanel">
                                    <form action="#" className="account-form-box">
                                        <h6>Register An Account</h6>
                                        <div className="single-input">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="single-input">
                                            <input type="text" placeholder="Email address" />
                                        </div>
                                        <div className="single-input">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <p className="mt-15">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="privacy-policy-link" target="_blank">privacy policy</a>.</p>
                                        <div className="button-box mt-25">
                                            <a href="#" className="btn btn--full btn--black">Register</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====================  mobile menu overlay ====================*/}
            <div className="mobile-menu-overlay" id="mobile-menu-overlay">
                <div className="mobile-menu-overlay__inner">
                    <div className="mobile-menu-close-box text-start">
                        <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger"> <i className="icon-cross2" /></span>
                    </div>
                    <div className="mobile-menu-overlay__body">
                        <div className="offcanvas-menu-header d-md-block d-none">
                            <div className="helendo-language-currency row-flex row section-space--mb_60 ">
                                <div className="widget-language col-md-6">
                                    <h6> Language</h6>
                                    <ul>
                                        <li className="actived"> <a href="#">English</a></li>
                                        <li><a href="#">French</a></li>
                                        <li><a href="#">Arabric</a></li>
                                    </ul>
                                </div>
                                <div className="widget-currency col-md-6">
                                    <h6> Currencies</h6>
                                    <ul>
                                        <li className="actived"><a href="#">USD - US Dollar</a></li>
                                        <li><a href="#">Euro</a></li>
                                        <li><a href="#">Pround</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <nav className="offcanvas-navigation">
                            <ul>
                                <li className="has-children">
                                    <a href="#">Home</a>
                                    <ul className="sub-menu">
                                        <li><a href="index-2.html"><span>Home V1 – Default</span></a></li>
                                        <li><a href="index-7.html"><span>Home V2 – Boxed</span></a></li>
                                        <li><a href="index-8.html"><span>Home V3 – Carousel</span></a></li>
                                        <li><a href="index-11.html"><span>Home V4 – Categories</span></a></li>
                                        <li><a href="index-10.html"><span>Home V5 – Collection</span></a></li>
                                        <li><a href="index-5.html"><span>Home V6 – Full Width</span></a></li>
                                        <li><a href="index-4.html"><span>Home V7 – Left Sidebar</span></a></li>
                                        <li><a href="index-3.html"><span>Home V8 – Metro</span></a></li>
                                        <li><a href="index-6.html"><span>Home V9 – Minimal</span></a></li>
                                        <li><a href="index-9.html"><span>Home V10 – Parallax</span></a></li>
                                        <li><a href="index-12.html"><span>Home V11 – Video Feature</span></a></li>
                                        <li><a href="index-13.html"><span>Home V12 – Feature</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#">Shop</a>
                                    <ul className="sub-menu">
                                        <li className="has-children">
                                            <a href="#"><span>Shop Pages</span></a>
                                            <ul className="sub-menu">
                                                <li><a href="shop-3-column.html"><span>Shop 3 Columns</span></a></li>
                                                <li><a href="shop-4-column.html"><span>Shop 4 Columns</span></a></li>
                                                <li><a href="shop-5-column.html"><span>Shop 5 Columns</span></a></li>
                                                <li><a href="shop-6-column.html"><span>Shop 6 Columns</span></a></li>
                                                <li><a href="shop-categories.html"><span>Shop Categories</span></a></li>
                                                <li><a href="shop-carousel.html"><span>Shop Carousel</span></a></li>
                                                <li><a href="shop-with-boder.html"><span>Shop With Border</span></a></li>
                                                <li><a href="shop-left-sidebar.html"><span>Shop Left Sidebar</span></a></li>
                                                <li><a href="shop-right-sidebar.html"><span>Shop Right Sidebar</span></a></li>
                                                <li><a href="shop-without-gutter.html"><span>Shop Without Gutter</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="#"><span>Product Pages</span></a>
                                            <ul className="sub-menu">
                                                <li><a href="product-details.html"><span>Default</span></a></li>
                                                <li><a href="product-simple.html"><span>Simple</span></a></li>
                                                <li><a href="product-variable.html"><span>Variable</span></a></li>
                                                <li><a href="product-groupped.html"><span>Groupped</span></a></li>
                                                <li><a href="product-on-sale.html"><span>On Sale</span></a></li>
                                                <li><a href="product-out-of-stock.html"><span>Out Of Stock</span></a></li>
                                                <li><a href="product-affiliate.html"><span>Affiliate</span></a></li>
                                                <li><a href="product-image-swatches.html"><span>Image Swatches</span></a></li>
                                                <li><a href="product-countdown-timer.html"><span>With Countdown Timer</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="#"><span>Other Pages</span></a>
                                            <ul className="sub-menu">
                                                <li><a href="cart.html"><span>Cart</span></a></li>
                                                <li><a href="checkout.html"><span>Checkout</span></a></li>
                                                <li><a href="my-account.html"><span>My Account</span></a></li>
                                                <li><a href="wishlist.html"><span>Wishlist</span></a></li>
                                                <li><a href="order-tracking.html"><span>Order Tracking</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#">Pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="about-us.html"><span>About Us</span></a></li>
                                        <li><a href="contact-us.html"><span>Contact</span></a></li>
                                        <li><a href="faq.html"><span>FAQ Pages</span></a></li>
                                        <li><a href="coming-soon.html"><span>Coming Soon</span></a></li>
                                        <li><a href="404-page.html"><span>404 Page</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="javascript:void(0)">Blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-grid.html"><span>Blog Grid</span></a></li>
                                        <li><a href="blog-listing.html"><span>Blog List</span></a></li>
                                        <li><a href="blog-masonry.html"><span>Blog Masonry</span></a></li>
                                        <li><a href="blog-left-sidebar.html"><span>Blog Sidebar</span></a></li>
                                        <li><a href="single-blog-post.html"><span>Single Post V1</span></a></li>
                                        <li><a href="single-blog-post-2.html"><span>Single Post V2</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="mobile-menu-contact-info section-space--mt_60">
                            <h6>Contact Us</h6>
                            <p>69 Halsey St, Ny 10002, New York, United States <br />support.center@unero.co <br />(0091) 8547 632521</p>
                        </div>
                        <div className="mobile-menu-social-share section-space--mt_60">
                            <h6>Follow US On Socials</h6>
                            <ul className="social-share">
                                <li><a href="#"><i className="social social_facebook" /></a></li>
                                <li><a href="#"><i className="social social_twitter" /></a></li>
                                <li><a href="#"><i className="social social_googleplus" /></a></li>
                                <li><a href="#"><i className="social social_linkedin" /></a></li>
                                <li><a href="#"><i className="social social_pinterest" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*====================  End of mobile menu overlay  ====================*/}
            {/*  offcanvas Minicart Start */}
            <div className="offcanvas-minicart_wrapper" id="miniCart">
                <div className="offcanvas-menu-inner">
                    <div className="close-btn-box">
                        <a href="#" className="btn-close"><i className="icon-cross2" /></a>
                    </div>
                    <div className="minicart-content">
                        <ul className="minicart-list">
                            <li className="minicart-product">
                                <a className="product-item_remove" href="javascript:void(0)"><i className="icon-cross2" /></a>
                                <a className="product-item_img">
                                    <img className="img-fluid" src="assets/images/product/small/cart-01.webp" alt="Product Image" />
                                </a>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="product-details.html">Plant pots</a>
                                    <label>Qty : <span>1</span></label>
                                    <label className="product-item_quantity">Price: <span> $20.00</span></label>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <a className="product-item_remove" href="javascript:void(0)"><i className="icon-cross2" /></a>
                                <a className="product-item_img">
                                    <img className="img-fluid" src="assets/images/product/small/cart-02.webp" alt="Product Image" />
                                </a>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="product-details.html">Teapot with black tea</a>
                                    <label>Qty : <span>1</span></label>
                                    <label className="product-item_quantity">Price: <span> $20.00</span></label>
                                </div>
                            </li>
                            <li className="minicart-product">
                                <a className="product-item_remove" href="javascript:void(0)"><i className="icon-cross2" /></a>
                                <a className="product-item_img">
                                    <img className="img-fluid" src="assets/images/product/small/cart-03.webp" alt="Product Image" />
                                </a>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="product-details.html">Simple Chair</a>
                                    <label>Qty : <span>1</span></label>
                                    <label className="product-item_quantity">Price: <span> $20.00</span></label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="minicart-item_total">
                        <span className="font-weight--reguler">Subtotal:</span>
                        <span className="ammount font-weight--reguler">$60.00</span>
                    </div>
                    <div className="minicart-btn_area">
                        <a href="cart.html" className="btn btn--full btn--border_1">View cart</a>
                    </div>
                    <div className="minicart-btn_area">
                        <a href="checkout.html" className="btn btn--full btn--black">Checkout</a>
                    </div>
                </div>
                <div className="global-overlay" />
            </div>
            {/*  offcanvas Minicart End */}
            {/*====================  search overlay ====================*/}
            <div className="search-overlay" id="search-overlay">
                <div className="search-overlay__header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-8">
                                <div className="search-title">
                                    <h4 className="font-weight--normal">Search</h4>
                                </div>
                            </div>
                            <div className="col-md-6 ms-auto col-4">
                                {/* search content */}
                                <div className="search-content text-end">
                                    <span className="mobile-navigation-close-icon" id="search-close-trigger"><i className="icon-cross" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-overlay__inner">
                    <div className="search-overlay__body">
                        <div className="search-overlay__form">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 m-auto">
                                        <form action="#">
                                            <div className="product-cats section-space--mb_60 text-center">
                                                <label> <input type="radio" name="product_cat" defaultValue defaultChecked="checked" /> <span className="line-hover">All</span> </label>
                                                <label> <input type="radio" name="product_cat" defaultValue="decoration" /> <span className="line-hover">Decoration</span> </label>
                                                <label> <input type="radio" name="product_cat" defaultValue="furniture" /> <span className="line-hover">Furniture</span> </label>
                                                <label> <input type="radio" name="product_cat" defaultValue="table" /> <span className="line-hover">Table</span> </label> <label> <input type="radio" name="product_cat" defaultValue="chair" /> <span className="line-hover">Chair</span> </label>
                                            </div>
                                            <div className="search-fields">
                                                <input type="text" placeholder="Search" />
                                                <button className="submit-button"><i className="icon-magnifier" /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====================  End of search overlay  ====================*/}
            {/*====================  scroll top ====================*/}
            <a href="#" className="scroll-top" id="scroll-top">
                <i className="arrow-top icon-arrow-up" />
                <i className="arrow-bottom icon-arrow-up" />
            </a>
            {/*====================  End of scroll top  ====================*/}
        </div>

    );
}

export default Shop_sidebar;