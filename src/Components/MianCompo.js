import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import "../styles/Styles.css"

const MianCompo = () => {

    const [data1,dataset1]=useState(true)
    const [data2,dataset2]=useState(false)
    
    const but1=()=>{
      dataset1(!data1) 
      dataset2(false)     
    }
    const but2=()=>{
      dataset2(!data2)
      dataset1(false)
    }
   
    
  return (
    <div className='signinup'>
        
    <button type='submit' className='signbutton1' onClick={but1}>Login</button>
    <button type='submit' className='signbutton1' onClick={but2}>Signup</button>
   <div className='main1'>
    <span className='mainsub1'>{
            data1 ? <Login />:" "
    }</span>
    <span className='mainsub1'>{
      data2 ?<Register />:" "
    } </span>
   </div>
      
      
    </div>
  )
}

export default MianCompo
