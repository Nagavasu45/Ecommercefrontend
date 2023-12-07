import React from "react";
// import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import { TbBrandHexo } from 'react-icons/tb';

import "../styles/Navbar.css";

function Navbar() {

    const products = useSelector(state => state.navbarReducer.value); // products is an array

    // Sepetteki toplam ürün sayısını hesaplama (navbarda göstermek için)
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
            <button id="hand-bag" onClick={handleClickHandBag} >handbag </button>
            <div id="number-of-products">{numberOfProducts()}</div>
        </div>
    )
};

export default Navbar;