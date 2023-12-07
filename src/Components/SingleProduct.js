import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/features/navbar/navbarSlice";

import "../styles/SingleProduct.css";

function SingleProduct(props) {

    // console.log(props.productDetails);

    const dispatch = useDispatch();

    return (

        <div id="single-product-container">

            <div className="flex-item">
                <img src={props.productDetails.imgstore} alt="product image" />
            </div>

            <div id="details" className="flex-item">
                <h2 id="brand">{props.productDetails.catageory}</h2>
                <h2 id="title">{props.productDetails.modelname}</h2>
                <h2 id="description">"{props.productDetails.description}"</h2>
                <span>category: {props.productDetails.subcategory}</span>

                <div id="price-container">
                    <h2 id="price">
                        <span>$</span>
                        {props.productDetails.price}
                    </h2>
                </div>

                <button onClick={() => dispatch(add(props.productDetails))}>Add to cart</button> {/* Sepete ekleme işlemi */}
            </div>
        </div>
    )
};

export default SingleProduct;