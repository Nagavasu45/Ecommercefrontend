import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { PiShoppingCart } from "react-icons/pi";
import { add } from "../redux/features/navbar/navbarSlice";


// import Hero from "./Slide";

import "../styles/Products.css";

function Checkproduct4() {

    const products = useSelector(state => state.checkproductReducer4.value); // products is an array

    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <>
            {/* <Hero /> */}

            <h1>ACCESSORIES</h1>

            <div id="flex-container">
            {products.length > 0 && products.filter((item)=>item.catageory==="access").map((eachProduct, index) => {
                    return (
                        <div id="flex-item" key={index}>

                            <div id="product-head">
                                <img onClick={() => navigate(`/details/${eachProduct.id}`)}
                                    src={eachProduct.imgstore} // 
                                    alt='not loaded'>
                                </img>

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
                    );
                })}
            </div>
        </>
    )
};



export default Checkproduct4
