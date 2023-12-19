import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
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
        <h3 className='label1'>Login with credentials</h3>
        <br/>
        <br/>
        <label htmlFor="email" className='label1'>Email:
        </label><br/>
        <input type='email' name='email' value={ldata.email} onChange={appdata1} className='in1' required /><br/>
        <br/>
        <label htmlFor="password" className='label1'>Password:
        </label><br/>
        <input type='password' name='password' value={ldata.password} onChange={appdata1} className='in1' required/><br/>
        {/* <NavLink to="/register"  ><h4> Registered?!</h4></NavLink> */}
        <br/><br/>
        <hr/>
        <br/><br/>

        <button type='submit'onClick={datasubmit}  className='label1 in2' >SignIn</button>
        </form>
      
    </div>
  )
}

export default Login
