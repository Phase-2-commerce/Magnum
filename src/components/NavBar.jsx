// import React from 'react'
import '../NavBar.css'
import { IoSearchOutline } from "react-icons/io5";
const NavBar = () => {
  return (
    <>
     <nav>
        <div className="main-container">
            <div className="name">
                <p>Exclusive</p>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </div>
            <div className="search-container">
                <input type="text" placeholder="What are you looking for?" />
                <IoSearchOutline className='text-[150px] ' />
            </div>
        </div>
     </nav>
    </>
  )
}

export default NavBar