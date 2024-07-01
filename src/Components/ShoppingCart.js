import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ZeroProduct from "./ZeroProduct.js";
// import { FaTrashAlt } from "react-icons/fa";
import { add, remove, removeOne, } from "../redux/features/navbar/navbarSlice";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/ShoppingCart.css"


import "../styles/ShoppingCart.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import "../styles/footer.css"
// import toast from "react-hot-toast";

function ShoppingCart() {
  const productsInShoppingCart = useSelector((state) => state.navbarReducer.value); 

 
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productsInShoppingCart.length; i++) {
      totalPrice += productsInShoppingCart[i].price * productsInShoppingCart[i].quantity; 
    }
    return totalPrice;
  }
  const dispatch = useDispatch();

  const navigate = useNavigate();
  

  
  const token = localStorage.getItem("token");
  console.log(token)
  useEffect(() => {
    if (token) {
        axios.get("https://ecommerecebackend.onrender.com/auth", { headers: { "authorization": `Bearer ${token}` } }) //http://localhost:4500/apis/auth https://ecommerce-ns6o.onrender.com/apis/auth
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }
    else {
        alert("Please login to view cart page!");
        navigate("/MianCompo");
    }
}, [token, navigate])

  const defaultStyle = {
    color: "#9d174d",
    cursor: "pointer"
  }

  const otherStyle = {
    color: "#dcd9d9",
    cursor: "default"
  }
  
  
  
  const makePayment=async ()=>{
    const stripe=await loadStripe(" pk_test_51OMERySJb30zHYKXhazWu96YHeq9esM7jjoHRU5Yl6OsFBFrIqAN4l6DR432lstZ8S1BEgMXk05yGcoIoqcZQ0FJ00fJW2eWVM")
    const body={
      products:productsInShoppingCart
    }
    const headers={
      "content-Type":"application/json"
    }
    const response=await fetch("https://ecommerecebackend.onrender.com/createcheckout",
    {method:"POST",
  headers:headers,
body:JSON.stringify(body),

}
    );
    const session=await response.json();
    console.log(session)
    const result=stripe.redirectToCheckout({
      sessionId:session.id
    });  
    localStorage.removeItem("value")
    // navigate("/Success")
    
    if(result.error){
      console.log( result.error);
    }
    
  }
let resetCart1=()=>{
  console.log("checking")
  localStorage.removeItem("value")
  //dispatch(resetCart(cartitems))
  for (let i=0;i<productsInShoppingCart.length;i++){
    dispatch(remove(productsInShoppingCart[i]))
  }
  //window.location.reload(false);
// dispatch(resetCart)
}

  

  return (
    <>
      <h1 id="shopping-cart-heading">SHOPPING CART</h1>
      
      {calculateTotalPrice() === 0 ? (
        <ZeroProduct />
      ) : (
        <>
        
          {productsInShoppingCart.length>0 && productsInShoppingCart.map((eachProduct, index) => (
            <div id="single-cart-container" key={index}>
              <img src={eachProduct.imgstore} alt="not loaded" onClick={() => navigate(`/details/${eachProduct.id}`)} />

              <div id="details">
                <span id="brand">{eachProduct.catageory}</span>
                <span id="title">{eachProduct.modelname}</span>
              </div>

              <div id="edit">
                <div id="minus" onClick={() => dispatch(removeOne(eachProduct.id))} style={eachProduct.quantity < 2 ? otherStyle : defaultStyle}>-</div>
                <div id="quantity">{eachProduct.quantity}</div>
                <div id="plus" onClick={() => dispatch(add(eachProduct))}>+</div>
                <div><button onClick={()=>dispatch(remove(eachProduct.id))}>remove</button></div>
              </div>

              <div id="price">
                <span id="dolar-span">$</span>
                <span id="price-span">{eachProduct.price * eachProduct.quantity}</span>
                {/* <span
                  id="trash-icon"
                  onClick={() => dispatch(remove(eachProduct.id))}>
                
                   <FaTrashAlt /> 
                </span> */}
              </div>

            </div>
          ))}

          <div id="total-price-div">
            <span id="left">Total Price: </span>
            <span id="dolar">$</span>
            <span id="right">{calculateTotalPrice()}</span>
          </div>
          {/* <button onClick={removecartItemscall}>clearCart</button> */}
          <div className="makepayment1">
            <div className="makep">
          <button  onClick={makePayment}>payment</button></div>
          <div><button onClick={resetCart1}>clearcart</button></div></div>
        </>
      )}
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
  );
}

export default ShoppingCart;