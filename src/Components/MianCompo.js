import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import "./Styles.css"

const MianCompo = () => {

    const [data1,dataset1]=useState(false)
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
    <div>
        
    <button type='submit' onClick={but1}>Register</button>
    <button type='submit' onClick={but2}>Login</button>
   <div className='main1'>
    <span className='mainsub1'>{
            data1 ? <Register />:" "
    }</span>
    <span className='mainsub1'>{
      data2 ?<Login />:" "
    } </span></div>
   
      
      
    </div>
  )
}

export default MianCompo
