import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ZeroProduct from "./ZeroProduct.js";
// import { FaTrashAlt } from "react-icons/fa";
import { add, remove, removeOne, resetCart,removecartItems } from "../redux/features/navbar/navbarSlice";
import { useNavigate } from "react-router-dom";


import "../styles/ShoppingCart.css";
import axios from "axios";

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
  // useEffect(()=>{
  //   navigate('/ShoppingCart')

  // },[productsInShoppingCart,navigate])

  
  const token = localStorage.getItem("token");
  console.log(token)
  useEffect(() => {
    if (token) {
        axios.get("https://ecombackend-82yd.onrender.com/auth", { headers: { "authorization": `Bearer ${token}` } }) //http://localhost:4500/apis/auth https://ecommerce-ns6o.onrender.com/apis/auth
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }
    else {
        alert("Please login to view cart page!");
        navigate("/login");
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
  // const removecartItemscall=(e)=>{
  //   e.preventDefault();
  //   dispatch(removecartItems)
  // }
  // const removecartItemscall=()=>{
  //   // e.preventDefault();
  //   // // useSelector((state) => state.navbarReducer.value)
  //   // const result=localStorage.getItem("value")
  //   // console.log(result)
    
  //   // localStorage.removeItem("value")
  //   //dispatch({removecartItems})
  //   localStorage.removeItem("value")
  //   navigate("/ShoppingCart")
  // }

  return (
    <>
      <h1 id="shopping-cart-heading">SHOPPING CART</h1>
      {calculateTotalPrice() === 0 ? (
        <ZeroProduct />
      ) : (
        <>
          {productsInShoppingCart.map((eachProduct, index) => (
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
                <span
                  id="trash-icon"
                  onClick={() => dispatch(remove(eachProduct.id))}
                >
                  {/* <FaTrashAlt /> */}
                </span>
              </div>

            </div>
          ))}

          <div id="total-price-div">
            <span id="left">Total Price: </span>
            <span id="dolar">$</span>
            <span id="right">{calculateTotalPrice()}</span>
          </div>
          {/* <button onClick={removecartItemscall}>clearCart</button> */}
          <button>payment</button>
        </>
      )}
    </>
  );
}

export default ShoppingCart;