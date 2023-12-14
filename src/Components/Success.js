import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const  navigate=useNavigate()
  const [scs,Setscs]=useState(" ")
  const handlecartcount=()=>{
    localStorage.removeItem('value')
    navigate("/")
  //
  
  window.location.reload(false);
  }
  axios.get("https://ecombackend-82yd.onrender.com/Success")
  .then((res)=>{
    Setscs(res.data)

  })

  return (
    <div>
      Please Continue your shopping
      <div>{scs}</div>
      <button onClick={handlecartcount}>continue</button>
    </div>
  )
}

export default Success
