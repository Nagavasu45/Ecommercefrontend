import React, { useState } from 'react'
import "./Styles.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import "../styles/Styles.css"
const Register = () => {
  const [rdata,rdataset]=useState({
    username:"",
    
    email:"",
    password:"",
    mobilenumber:"",
  })
  const nav=useNavigate()
  const appdata=(e)=>{
    
    rdataset({ ...rdata, [e.target.name]: e.target.value });
    console.log(rdata)
  };
  const datasubmit=(e)=>{
    e.preventDefault()
    // https://nodehanson4.onrender.com/registerpage
    axios
      .post('https://ecombackend-82yd.onrender.com/register',rdata)
      .then((res) => {
        
        // setStore(res.data.msg);
        // alert(res.data.msg);
        console.log(res.data)
        
        if (res.data.msg === "user successfully registered") {
          localStorage.setItem('token',res.data.jwttoken)

          console.log(res.data.jwttoken)
          nav("/login")
          alert(res.data.msg)
      }
      else{
        alert(res.data.msg)
      }
      })
      .catch((error) => {
        console.log(error);
        // alert("User has not registered, please try again");
      });

      rdataset({
        username: "",
        
        email: "",
        password: "",
        mobilenumber:"",
      });

  };
    
  return (
    <>
      
        <form className='r1'>
        <h3>Register and create an Account</h3>
            
        <label htmlFor="username">Name:

        </label>
        <input type='text' name='username' value={rdata.username} onChange={appdata}  required/><br/>
        <label htmlFor="mobilenumber">Phone number:
        </label>
        <input type='number' name='mobilenumber' value={rdata.mobilenumber} onChange={appdata} required  /><br/>
        <label htmlFor="email">Email:
        </label>
        <input type='email' name='email' value={rdata.email} onChange={appdata} required /><br/>
        <label htmlFor="password">Password:
        </label>
        <input type='password' name='password' value={rdata.password} onChange={appdata} required/><br/>
        {/* <button type='reset'>Cancel</button> */}
        <button type='submit'onClick={datasubmit} >Register</button>
       
        </form>
       {/* onClick={datasubmit} */}
    </>
  )
}

export default Register
