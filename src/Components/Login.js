import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate ,NavLink} from 'react-router-dom';
// import "./Styles.css"
import "../styles/Styles.css"
const Login = () => {
  const nav=useNavigate()
  const [ldata,ldataset]=useState({
    email:"",
    password:""
  })
  const appdata1=(e)=>{
    
    ldataset({ ...ldata, [e.target.name]: e.target.value });
    console.log(ldata)
  };
  const datasubmit=(e)=>{
    e.preventDefault()
    axios
      .post('https://ecombackend-82yd.onrender.com/login',ldata)
      .then((res) => {
        
        
        
        if (res.data.msg === "your login successfully") {
          localStorage.setItem("token", res.data.token);
          console.log(res.data.jwttoken)
          
          alert(res.data.msg)
          nav("/ShoppingCart")
      }
      else{
        alert(res.data.msg);
      }
      })
      .catch((error) => {
        console.log(error);
       
      });

      ldataset({        
        email: "",
        password: "",
      });

  };
  return (
    <div className='r1'>
        <form className='r2'>
        <h3>Login with email and password</h3>
        <label htmlFor="email">Email:
        </label>
        <input type='email' name='email' value={ldata.email} onChange={appdata1} className='in1' required /><br/>
        <label htmlFor="password">Password:
        </label>
        <input type='password' name='password' value={ldata.password} onChange={appdata1} className='in1' required/><br/>
        <NavLink to="/register"  ><h4> Registered?!</h4></NavLink>
        <button type='submit'onClick={datasubmit} className='b1' >SignIn</button>
        </form>
      
    </div>
  )
}

export default Login
