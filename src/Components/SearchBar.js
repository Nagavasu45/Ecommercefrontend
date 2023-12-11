import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate ,NavLink} from "react-router-dom";

import { add } from "../redux/features/navbar/navbarSlice";
import "../styles/footer.css"
// Component
import Hero from "./Slide";

import "../styles/Products.css";
import { useParams } from "react-router-dom";

function SearchBar() {

    const products = useSelector(state => state.productsReducer.value); // products is an array

    const nav = useNavigate();
    const param=useParams().search.trim();
    
    console.log(param)

    const dispatch = useDispatch();
    const searchItem=localStorage.getItem("value1")
    // console.log("welcome")
    // console.log(typeof(searchItem))
    
    // localStorage.removeItem("value1")
   
    // console.log(arr)
    

    return (
        <>
       
            {/* <Hero /> */}
            

            <h1>-----Are you looking this------</h1>

            <div id="flex-container">
            {/* {data1.filter((item1)=>item1.level==="medium" && item1.catageory==="bolly") */}
                {products.filter((item)=>item.subcatageory===param ||item.catageory===param || item.modelname===param).map((eachProduct, index) => {
                    
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
            <div className="f1">
    <div >
    <div className="f2">Follow Us</div>
    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/share--v1.png" alt="share--v1"/>
     <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="youtube-play"/>
     <img width="30" height="30" src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-social-media-fb-logo-square-44659.png?f=avif&w=256" alt="instagram"/>
     <img width="30" height="30" src="https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-158-761636.png?f=avif&w=256" alt="what's app "/>
    </div>
    <div >
    <div className="f2">Quick Links</div>
    
    <NavLink to="/">
    <div>Home Page</div>
    </NavLink>
    <NavLink to="/Checkproduct">
    <div>MOBILES </div>
    </NavLink>
    <NavLink to="/Checkproduct2">
    <div>LAPTOPS</div>
    </NavLink>
    <NavLink to="/Checkproduct3">
    <div>TV'S</div>
    </NavLink>
    <NavLink to="/Checkproduct4">
    <div>ACCESSORIES</div>
    </NavLink>
    
    </div>
    <div >
    <div className="f2">Contact us:</div>
    <div>Cell no: +91-9133610098</div>
    <div>Mail id:nagavasu450@gmail.com </div>
    
    </div>
    
</div> 
        </>
    )
};

export default SearchBar;