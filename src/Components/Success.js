import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const  navigate=useNavigate()
  const handlecartcount=()=>{
    localStorage.removeItem("value")
    navigate("/")
  //
  
  window.location.reload(false);
  }

  return (
    <div>
      Please Continue your shopping
      <button onClick={handlecartcount}>continue</button>
    </div>
  )
}

export default Success
