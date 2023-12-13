import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import { getDetails } from "../redux/features/details/detailsSlice";

function Details() {

    const params = useParams(); // Products.jsx' ten navigate ile geleni burada karşılıyoruz.

    // console.log(params); // returns an object such as {id: '3'}
    // console.log(params.id); // returns 3 (depends on params)

    const dispatch = useDispatch();

  
    useEffect(() => {
        dispatch(getDetails(params.id));
    }, [dispatch, params.id]);

    const productDetails = useSelector(state => state.detailsReducer.value);
    

    let loading = useSelector(state => state.detailsReducer.loading);

    return (<>
        <div>
            <h1 id="details-heading">DETAILS</h1>

            {loading ? (<div style={{ textAlign: "center", marginTop: "200px" }}>Loading...</div>) : 
            (<SingleProduct productDetails={productDetails} />)}

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

export default Details;