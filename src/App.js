import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/features/products/productsSlice";
import "../src/styles/Navbar.css"


import Navbar from "./Components/Navbar";
import Loading from "./Components/Loading";
import Products from "./Components/Products";
import Details from "./Components/Details";
import ShoppingCart from "./Components/ShoppingCart";


import { BrowserRouter , Routes, Route } from "react-router-dom";

import { Toaster } from 'react-hot-toast';

import "../src/styles/App.css";
import Checkproduct from "./Components/Checkproduct";
import Checkproduct2 from "./Components/Checkproduct2";
import Checkproduct3 from "./Components/Checkproduct3";
import Checkproduct4 from "./Components/Checkproduct4";

import Register from "./Components/Register";
import Login from "./Components/Login";
import SearchBar from "./Components/SearchBar";
import Success from "./Components/Success";
import Cancel from "./Components/Cancel";
import NoProduct from "./Components/NoProduct";
import MianCompo from "./Components/MianCompo";
// import Payment from "./Components/Payment";

function App() {

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const loading = useSelector(state => state.productsReducer.loading);

  return (

    <BrowserRouter>

      <Toaster />

      <Navbar />
      
            {/* <div className="nav-bar-links1">
            <NavLink className =" nav-bar-links3" to="/Checkproduct">MOBILES</NavLink>
            <NavLink className =" nav-bar-links2" to="/Checkproduct2">LAPTOPS</NavLink>
            <NavLink className =" nav-bar-links2" to="/Checkproduct3"> TV'S</NavLink>
            <NavLink className =" nav-bar-links2" to="/Checkproduct4">ACCESSORIES</NavLink>
            </div> */}
            
       

      
      

      <Routes>
        <Route path="/" element={loading ? <Loading /> : <Products />} />
        
        <Route  path="/Checkproduct" element={loading ? <Loading /> : <Checkproduct />} />
        <Route path="/Checkproduct2" element={loading ? <Loading /> : <Checkproduct2 />} />
        <Route path="/Checkproduct3" element={loading ? <Loading /> : <Checkproduct3 />} />
        <Route path="/Checkproduct4" element={loading ? <Loading /> : <Checkproduct4 />} />
        <Route path="/details/:id" element={<Details />} /> {/* "id" dinamik olarak değişeceği için ":" kullandık.  */}
        
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/Register" element={<Register />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/SearchBar/:search" element={loading ? <loading/> :<SearchBar />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Cancel" element={<Cancel />}/>
        {/* <Route path="/Payment/:amount" element={<Payment />}/> */}
        <Route path="/NoProduct" element={<NoProduct />}/>
        <Route path="/MianCompo" element={<MianCompo />}/>
        
      </Routes>
      {/* <Routes>
        <Route path="/home" element={<Products />}
      </Routes> */}

    </BrowserRouter>
  )
};

export default App;