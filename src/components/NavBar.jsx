// import React from 'react'
import '../NavBar.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
const NavBar = () => {
  return (
    <>
     <nav>
        <div className="font-bold flex justify-around ">
            <div className="name">
                <p className='home-header'>Exclusive</p>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </div>
            <div className="search-container">
                <input type="text" placeholder="What are you looking for?" />
                <IoSearchOutline className='icon' />
                <IoHeartOutline className='heart-icon' />
                <AiOutlineShoppingCart  className='cart-icon'/>
            </div>
        </div>
     </nav>
     <hr className='line-break'/>
    </>
  )
}

export default NavBar