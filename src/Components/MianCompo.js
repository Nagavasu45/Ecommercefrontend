import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import "./Styles.css"
// import "../styles/Styles.css"
// import "../styles/footer.css"
//import { NavLink } from 'react-router-dom'

const MianCompo = () => {

    const [data1,dataset1]=useState(true)
    const [data2,dataset2]=useState(false)
    
    const but1=()=>{
      dataset1(true) 
      dataset2(false)     
    }
    const but2=()=>{
      dataset2(true)
      dataset1(false)
    }
   
    
  return (
    <>
    <div className='backgimage'>
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
    </div>
    {/* <div className="f1">
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
    
    
</div>  */}
    </>
  )
}

export default MianCompo
