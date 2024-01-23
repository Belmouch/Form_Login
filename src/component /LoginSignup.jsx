import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../component /Assets/Assets/person.png'
import email_icon from './Assets/Assets/email.png'
import password_icon from '../component /Assets/Assets/password.png'

export const LoginSignup = () => {
  const [action , setAction] = useState("Login" ) 

  return (
    <div className='container '>
     <div className="header">
      <div className="text"> {action }</div>
      <div className="underline"></div>
     </div>
     <div className="inputs">
     {action === "Login" ? " " 
     :<div className="input">
     <img src={user_icon} alt="" />
     <input type="text" placeholder='Name'/>
     
     </div>  }
       

      <div className="input">
      <img src={email_icon} alt="" />
      <input type="email" placeholder='Email '/>
      
      </div>
      <div className="input">
      <img src={password_icon} alt="" />
      <input type="password"  placeholder='Password'/>
      
      </div>
      {action === "Sign Up" ? ""
      :       <div className="forgot-Password">Lost Password ? <span>Clik Here</span></div>
    }
      <div className="Submit_container">
      <div className={action === "Login" ? "submit gray":"submit"} onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
      <div className={action === "Sign Up" ? "submit gray":"submit"} onClick={()=> {setAction(" Login")}}> Login </div>
        
      </div>
     </div>
    
    </div>
  )
}
