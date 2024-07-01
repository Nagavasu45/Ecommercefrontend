import React, { useState } from 'react'
import "./Styles.css"
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "../styles/Styles.css"
const Register = () => {
  const [rdata,rdataset]=useState({
    username:"",
    
    email:"",
    password:"",
    mobilenumber:"",
  })
  // const nav=useNavigate()
  const appdata=(e)=>{
    
    rdataset({ ...rdata, [e.target.name]: e.target.value });
    console.log(rdata)
  };
  const datasubmit=(e)=>{
    e.preventDefault()
    // https://nodehanson4.onrender.com/registerpage
    axios
      .post('http://localhost:3400/register',rdata)
      .then((res) => {
        
        // setStore(res.data.msg);
        // alert(res.data.msg);
        console.log(res.data)
        
        if (res.data.msg === "user successfully registered") {
          localStorage.setItem('token',res.data.jwttoken)

          console.log(res.data.jwttoken)
          // nav("/login")
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
      <div className='r1'>
        <form className='r2'>
        
        <h3 className='label1'>Create an Account</h3>
            
        <label htmlFor="username" className='label1'>Name:

        </label>
        <input type='text' name='username' value={rdata.username} onChange={appdata} className='in1' required/><br/>
        <br/><label htmlFor="mobilenumber" className='label1'>Phone number:
        </label>
        <input type='number' name='mobilenumber' value={rdata.mobilenumber} onChange={appdata} className='in1' required  /><br/>
        <br/><label htmlFor="email" className='label1'>Email:
        </label>
        <input type='email' name='email' value={rdata.email} onChange={appdata} className='in1' required /><br/>
        <br/><label htmlFor="password" className='label1'>Password:
        </label>
        <input type='password' name='password' value={rdata.password} onChange={appdata} className='in1' required/><br/>
        {/* <button type='reset'>Cancel</button> */}
        <br/>
        <hr className='in3'/>
        
        <br/>
        <button type='submit' onClick={datasubmit}  className='label1 in2'>Register</button>
       
        </form>
        </div>
       {/* onClick={datasubmit} */}
    </>
  )
}

export default Register
