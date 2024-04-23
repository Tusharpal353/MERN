import React, { useState } from 'react'
//import assets from '../../Assests/Assets';
import { assets } from '../../Assests/Assets';
import '../Navbar/navbar.css'

function Navbar() {
  const[menu,setMenu]=useState("Home")
  return (
    <>
    
    <div className='Navbar'>
        {/* <img className='logo' src={assets.logo} alt="" /> */}
        <img className='logo' src={assets.logo} alt="" />
        <ul className='Navbar-Menu'>
            <li onClick={()=>{
              setMenu("Home")
            }}>Home</li>
            <li>About</li>
            <li>Mobile App</li>
            <li>Contact</li>
        </ul>
        <div className='Navbar-right'>
            <div className='Basket-icon'>
              <img src={assets.cart} alt=""/>
                <div className='Dot'>

                </div>

            </div>
            <button className='btnSignin'>Sign in</button>

        </div>
    </div>
    </>
  )
}

export default Navbar