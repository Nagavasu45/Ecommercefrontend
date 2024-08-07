import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate ,NavLink} from "react-router-dom";

import { add } from "../redux/features/navbar/navbarSlice";
import "../styles/footer.css"
// Component
// import Hero from "./Slide";

import "../styles/Products.css";
import { useParams } from "react-router-dom";
import NoProduct from "./NoProduct";
import axios from "axios";

function SearchBar() {

    const products = useSelector(state => state.productsReducer.value); // products is an array
    // const [searchproduct,Setsearchproduct]=useState("")
    const nav = useNavigate();
    
    const dispatch = useDispatch();
    let param=useParams().search.trim().toLowerCase();
    const mobiles=['phones',"phone","mobile",'mobiles']
    const laptops=['laptops',"lapy","laptop"]
    const access=["chargers",'charger','accesserious']
    const tv=['tv','tvs',"smart tvs","smarttv",'smarttvs','smart tv']
    function handleadd(eachProduct){
        const token = localStorage.getItem("token");
  console.log(token)
//   useEffect(() => {
    if (token) {
        axios.get("https://ecommerecebackend.onrender.com/auth", { headers: { "authorization": `Bearer ${token}` } }) //http://localhost:4500/apis/auth https://ecommerce-ns6o.onrender.com/apis/auth
            .then((res) => {
                console.log(res.data);
                dispatch(add(eachProduct))
            })
            .catch(err => console.log(err))
    }
    else {
        alert("Please login to view cart page!");
        nav("/MianCompo");
    }
    }
    let j=0;
    for(let i=0;i<mobiles.length;i++){
        if(param===mobiles[i]){
            param='mobile'
            j=1;
            break;
        }
    }
    if(j===0){
        for(let i=0;i<laptops.length;i++){
            if(param===laptops[i]){
                param='lapy';
                j=1;
                break;
            }
        }

    }
    
    if(j===0){
        for(let i=0;i<access.length;i++){
            if(param===access[i]){
                param='access';
                j=1;
                break;
            }
        }

    }
    if(j===0){
        for(let i=0;i<tv.length;i++){
            if(param===tv[i]){
                param='tv';
                j=1;
                break;
            }
        }

    }
   
    console.log(param)
    const arr=products.filter((item)=>item.subcatageory===param ||item.catageory===param || item.modelname===param)
    console.log(arr.length)
    
    // const searchItem=localStorage.getItem("value1")
    // console.log("welcome")
    // console.log(typeof(searchItem))
    
    // localStorage.removeItem("value1")
   
    // console.log(arr)
    

    return (
        <>
       
            {/* <Hero /> */}
            
            {arr.length>0 ? <div>
            <h1>-----Are you looking this------</h1>

            <div id="flex-container">
            
                {arr.map((eachProduct, index) => {
                    
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

                                <button id="shopping-cart" onClick={()=>handleadd(eachProduct)} >Add</button> {/* sepete ekleme işlemi */}
                            </div>
                        </div>
                        // </NavLink>
                        );
                })}
            </div>
            </div> : <NoProduct />}
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