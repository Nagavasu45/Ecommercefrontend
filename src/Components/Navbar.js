import React, { useEffect, useState } from "react";

import {  useSelector } from 'react-redux';
import {  NavLink, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-regular-svg-icons'
// import { removecartItems} from "../redux/features/navbar/navbarSlice";

import "../styles/Navbar.css";
import axios from "axios";

function Navbar() {

    const [searchText, setSearchText] = useState(" ");
    // const [toggle, setToggle] = useState(false);
    // 
    // const dispatch=useDispatch()
    const [loginout, setloginout] = useState(true);
    const [close,setClose]=useState(false)
const sty={

    display:close?'block':'none'
}

// const handlebutton=(()=>{
//     setClose(!close)

// })
const handleaction=(()=>{
    // v1.classList.add('hide')
    setClose(false)
})
    
    const products = useSelector(state => state.navbarReducer.value); 

   
    function numberOfProducts() {
        let number = 0;
        for (let i = 0; i < products.length; i++) {
            number += products[i].quantity;
        }
        return number;
    }

    const navigate = useNavigate();
   

    // function handleClickIcon() {
    //     navigate("/");
    //     window.scroll({ top: 0, behavior: 'smooth' });
    // }

    function handleClickHandBag() {
        navigate("/shoppingCart");
        window.scroll({ top: 0, behavior: 'smooth' });
    }
   
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        if (token) {
            setloginout(false);
            axios.get("http://localhost:3400/auth", { headers: { "authorization": `Bearer ${token}` } }) //https://ecommerce-ns6o.onrender.com/apis/auth http://localhost:4500/apis/auth
                .then((res) => {
                    console.log(res.data.msg);
                    if (res.data.msg ==="User Authorized") {
                        console.log(res.data.msg);
                        // navigate("/ShoppingCart")

                    }
                })
                .catch(err => console.log(err))
        }
    }, [token,navigate])
    const seelogout=()=>{
        setloginout(true)
        localStorage.removeItem("value");
        localStorage.removeItem("token");
        
        // localStorage.removeItem("value")
        // localStorage.clear()
        // localStorage.removeItem("value")
        // dispatch(removecartItems())
        navigate('/')
        window.location.reload(false);
    }
    
    //   const nav=useNavigate()
      const appdata=(e)=>{
        e.preventDefault();
        setSearchText(e.target.value );
        console.log(searchText)
      };
      const handlesearch=()=>{
        localStorage.setItem("value1",searchText)
        console.log(searchText)
        navigate(`/SearchBar/${searchText}`);
        // navigate()`/SearchBar/se")
      }
      console.log(searchText)
    return (
        <>
        <div className="main"> 
            <div className="search">
        <input className="searchbar-1"
            type="search"
            placeholder="Search here"
            value={searchText} onChange={appdata}/>
            <button onClick={handlesearch}>Search</button>
        </div>

        <div className="loginpart">{loginout ? <div>
                
  <button className="dropbtn"><NavLink to="/MianCompo">Login</NavLink></button>
  </div>
: 
<div>
    <button className="dropbtn" ><NavLink  to="/" onClick={seelogout} >Logout</NavLink></button>
</div>}
<div> <svg  id="hand-bag" xmlns="http://www.w3.org/2000/svg" onClick={handleClickHandBag} width="36" height="36" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg> 
            
            </div>
            <div id="number-of-products">{loginout ? 0:numberOfProducts()}</div>

</div>
</div>
     <div className="maincon" >
            <div className =" subcon-1">
            <NavLink     to="/">HOME</NavLink>
            </div>
            <div className =" subcon-2">
            <NavLink  to="/Checkproduct">MOBILES</NavLink>
            </div>
            <div className =" subcon-3">
            <NavLink  to="/Checkproduct2">LAPTOPS</NavLink>
            </div>
            <div className ="subcon-4">
            <NavLink  to="/Checkproduct3"> TV'S</NavLink>
            
            </div>
            <div className =" subcon-5 ">
                <NavLink  to="/Checkproduct4">ACCESSORIES</NavLink>
            </div>
            {/* <NavLink className =" nav-bar-links2" to="/MianCompo"><button class="dropbtn">SignUp/In</button></NavLink> */}
            
            </div>
            {/* <button onClick={handlebutton} className="buttonhide"><img width='25px' height='25px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAB0dHTCwsLo6OgwMDDFxcVqampCQkLj4+PPz8/7+/uRkZGlpaXc3NwgICA5OTn19fUWFhZ9fX2vr6+5ubmNjY1VVVU0NDRxcXFBQUGampqDg4M7OzteXl4bGxvpTqPvAAABeElEQVR4nO3c20ojQRQF0DKX7tZotGOi0Xj5/78UwXkZGHOoGjklrPUFexMSQp9mlwIAAAAAAAAAAAAAAAAAwF8ur4Zlv4ary8Z+m8O4vujZejxsmhpe77IrnLW7bil4kx0/5Ka+4PY2O3zI7ba64UN29qCH6oaP2dGDHqsbHrOjBx2rG07Z0YOm6oZP2dGDnqobLrOjBy2rG5YxO3vIWF+wbO6y0wfcNRQsZV4c+/7ftjsu5qaGpQyn+0W/7k9DYz8AAAAAgKj9OK37NY37xn7zc/ZD7bOmpmfec3b8kJaK/X+Cn+oPpGWfnT2o/rv4O86HLQfE33LHf65u+JodPaj+RvqWHT3orbrhKTt60Km64arvNy//WK+qG5YhO3xI06H78J4d/6z3Q0vBUrYvff+gvr7Uv3r5ZV71rfVdEwAAAADgf7EakcxqxDlWI/pgNeIbViN6YTXi36xG9MJqxDesRuSzGgEAAAAAAAAAAAAAAAAAAMBP+ADA2i2mel3/IwAAAABJRU5ErkJggg==" alt="not loaded"/>
            </button> */}
            <div className="mainconsub" style={sty}>
            <button  onClick={handleaction}>
            <NavLink     to="/">HOME</NavLink>
            </button>
            <button  onClick={handleaction}>
            <NavLink  to="/Checkproduct">MOBILES</NavLink>
            </button>
            <button  onClick={handleaction}>
            <NavLink  to="/Checkproduct2">LAPTOPS</NavLink>
            </button>
            <button  onClick={handleaction}>
            <NavLink  to="/Checkproduct3"> TV'S</NavLink>
            
            </button>
            <button  onClick={handleaction}>
                <NavLink  to="/Checkproduct4">ACCESSORIES</NavLink>
            </button>
            {/* <NavLink className =" nav-bar-links2" to="/MianCompo"><button class="dropbtn">SignUp/In</button></NavLink> */}
            
            </div>    
   </> )
};

export default Navbar;