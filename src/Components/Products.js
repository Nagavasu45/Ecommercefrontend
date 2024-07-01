import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate ,NavLink} from "react-router-dom";

import { add } from "../redux/features/navbar/navbarSlice";
import "../styles/footer.css"
// Component
import Hero from "./Slide";

import "../styles/Products.css";
import axios from "axios";


function Products() {

    const products = useSelector(state => state.productsReducer.value); // products is an array

    const navigate = useNavigate();

    const dispatch = useDispatch();
    function handleadd(eachProduct){
        const token = localStorage.getItem("token");
  console.log(token)
//   useEffect(() => {
    if (token) {
        axios.get("http://localhost:3400/auth", { headers: { "authorization": `Bearer ${token}` } }) //http://localhost:4500/apis/auth https://ecommerce-ns6o.onrender.com/apis/auth
            .then((res) => {
                console.log(res.data);
                dispatch(add(eachProduct))
            })
            .catch(err => console.log(err))
    }
    else {
        alert("Please login to view cart page!");
        navigate("/MianCompo");
    }


    }

    return (
        <>
       
            <Hero />
            

            <h1>PRODUCTS</h1>

            <div id="flex-container">
            {/* {data1.filter((item1)=>item1.level==="medium" && item1.catageory==="bolly") */}
                {products.length > 0 && products.map((eachProduct, index) => {
                    
                    return (
                        // <NavLink to="/">
                        <div id="flex-item" key={index}>

                            <div id="product-head">
                                <img onClick={() => navigate(`/details/${eachProduct.id}`)}
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

                                <button id="shopping-cart" onClick={()=>handleadd(eachProduct)} >Add</button> {/* sepete ekleme işlemi */}
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

export default Products;