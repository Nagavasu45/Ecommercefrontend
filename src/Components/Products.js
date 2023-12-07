import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";

import { add } from "../redux/features/navbar/navbarSlice";

// Component
import Hero from "./Slide";

import "../styles/Products.css";


function Products() {

    const products = useSelector(state => state.productsReducer.value); // products is an array

    const nav = useNavigate();

    const dispatch = useDispatch();

    return (
        <>
        {/* <BrowserRouter>
        <NavLink to="/">Checkproduct</NavLink>
        <NavLink to="/Checkproduct2">Checkproduct2</NavLink>
        <Routes>
            <Route path="/" element={<Checkproduct />} />
            <Route path="/Checkproduct2" element={<Checkproduct2 />}/>
        </Routes>
        </BrowserRouter> */}
            <Hero />
            

            <h1>PRODUCTS</h1>

            <div id="flex-container">
            {/* {data1.filter((item1)=>item1.level==="medium" && item1.catageory==="bolly") */}
                {products.length > 0 && products.map((eachProduct, index) => {
                    
                    return (
                        // <NavLink to="/">
                        <div id="flex-item" key={index}>

                            <div id="product-head">
                                <img onClick={() => nav(`/details/${eachProduct.id}`)}
                                    src={eachProduct.imgstore} // 
                                    alt='not loaded'/>
                                {/* </img> */}

                                <h2>{eachProduct.modelname}</h2>
                            </div>

                            <div id="product-info">
                                <h2>
                                    <span id="dolar-span">$</span>
                                    {eachProduct.price}
                                </h2>

                                <button id="shopping-cart" onClick={() => dispatch(add(eachProduct))} >Add</button> {/* sepete ekleme işlemi */}
                            </div>
                        </div>
                        // </NavLink>
                        );
                })}
            </div>
        </>
    )
};

export default Products;