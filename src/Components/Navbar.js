import React from "react";

import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';


import "../styles/Navbar.css";

function Navbar() {

    const products = useSelector(state => state.navbarReducer.value); 

   
    function numberOfProducts() {
        let number = 0;
        for (let i = 0; i < products.length; i++) {
            number += products[i].quantity;
        }
        return number;
    }

    const navigate = useNavigate();

    function handleClickIcon() {
        navigate("/");
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    function handleClickHandBag() {
        navigate("/shoppingCart");
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    return (
        <div id="navbar-container">
            <div id="icon"><button id="icon-in-div" onClick={handleClickIcon}>Home</button></div>
            <div className="nav-bar-links1">
            <NavLink className =" nav-bar-links3" to="/Checkproduct">MOBILES</NavLink>
            <NavLink className =" nav-bar-links2" to="/Checkproduct2">LAPTOPS</NavLink>
            <NavLink className =" nav-bar-links2" to="/Checkproduct3"> TV'S</NavLink>
            <NavLink className =" nav-bar-links2" to="/Checkproduct4">ACCESSORIES</NavLink>
            </div>
            {/* <button id="hand-bag" onClick={handleClickHandBag} >handbag </button> */}
            <svg  id="hand-bag" xmlns="http://www.w3.org/2000/svg" onClick={handleClickHandBag} width="36" height="36" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg> 
            <div id="number-of-products">{numberOfProducts()}</div>
        </div>
    )
};

export default Navbar;