// import React from 'react'
// import '../NavBar.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <>
     <nav className = "h-[100px] border-b border-gray-500">
        <div className = "flex justify-around w-[1440px] h-[38px] relative top-[50px] left-[135px] gap-[148px]">
            <div className = "flex gap-[190px] items-center">
                <p className='font-bold text-2xl leading-6 tracking-wide'>Exclusive</p>
                <ul className = "list-none flex gap-[48px]">
                    <li className="font-poppins font-normal text-base leading-6 text-center  hover:scale-110 transition-all duration-300 border-b border-transparent hover:border-grey-500 hover:text-red-500 ease-in-out"><a href="" className="hover">Home</a></li>
                    <li className="font-poppins font-normal text-base leading-6 text-center  hover:scale-110 transition-all duration-300 border-b border-transparent hover:border-grey-500 hover:text-red-500 ease-in-out"><a href="" className="hover">Contact</a></li>
                    <li className="font-poppins font-normal text-base leading-6 text-center  hover:scale-110 transition-all duration-300 border-b border-transparent hover:border-grey-500 hover:text-red-500 ease-in-out"><a href="" className="hover">About</a></li>
                    <li className="font-poppins font-normal text-base leading-6 text-center  hover:scale-110 transition-all duration-300 border-b border-transparent hover:border-grey-500 hover:text-red-500 ease-in-out"><a href="" className="hover">Sign Up</a></li>
                </ul>
            </div>
            <div className="flex w-[347px] h-[24px] gap-[24px] items-center">
                <input type="text" placeholder="What are you looking for?" className="font-poppins font-normal text-xs leading-[18px] w-[243px] h-[38px] opacity-50 bg-gray-300 p-2 rounded-md"/>
                <IoSearchOutline className="w-[24px] h-[24px] -ml-[60px]" src="icon.png" alt="Icon" />
                <IoHeartOutline className="w-[24px] h-[24px] text-center" src="heart-icon.png" alt="Heart Icon" />
                <AiOutlineShoppingCart  className="w-[24px] h-[24px] text-center" src="cart-icon.png" alt="Cart Icon"/>
            </div>
        </div>
     </nav>
     <hr className='line-break'/>
    </>
  )
}

export default NavBar