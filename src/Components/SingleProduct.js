import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/features/navbar/navbarSlice";

import "../styles/SingleProduct.css";

function SingleProduct(props) {

    console.log(props.productDetails);

    const dispatch = useDispatch();

    return (

        <div id="single-product-container">

            <div className="flex-item">
                <img src={props.productDetails[0]?.imgstore} alt="not loaded" />
            </div>

            <div id="details" className="flex-item">
                <h2 id="brand">{props.productDetails[0]?.catageory}</h2>
                <h2 id="title">{props.productDetails[0]?.modelname}</h2>
                <h2 id="description">{props.productDetails[0]?.des}</h2>
                <span>category: {props.productDetails[0]?.subcategory}</span>

                <div id="price-container">
                    <h2 id="price">
                        <span>$</span>
                        {props.productDetails[0]?.price}
                    </h2>
                </div>

                <button onClick={() => dispatch(add(props.productDetails[0]))}>Add to cart</button> {/* Sepete ekleme işlemi */}
            </div>
        </div>
    )
};

export default SingleProduct;