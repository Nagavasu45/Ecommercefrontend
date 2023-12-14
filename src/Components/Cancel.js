import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const  navigate=useNavigate()
  const [scs,Setscs]=useState(" ")
  const handlecartcount=()=>{
    //localStorage.removeItem('value')
    navigate("/ShoppingCart")
  //
  
  window.location.reload(false);
  }
  axios.get("https://ecombackend-82yd.onrender.com/Cancel")
  .then((res)=>{
    Setscs(res.data)

  })

  return (
    <div>
      Please try again for payment in shopping cart section.... thank you...
      <div>{scs}</div>
      <button onClick={handlecartcount}>continue</button>
    </div>
  )
}

export default Success
