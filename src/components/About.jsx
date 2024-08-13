/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { IoStorefrontOutline } from "react-icons/io5";
import '../About.css'
import NavBar from './NavBar'

const About = () => {
  return (
    <>
     <NavBar/>
     <div className="about-container">
        
        <p className="about-header">
            <span className='first-part'>Home </span>/ <span className='second-part'>About</span>
        </p>
        <div className="information-container">
            <div>
            <h1 className='info-header'>Our Story</h1>
            <p className="info-text">
                Launched in 2015, Exclusive is South Asia`s premier online shopping marketplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and services solutions, Exclusive has 10,500 sellers and 300 brands and serves millions customers across the region. 
            </p>
            <p className="additional-info">
                Exclusive has more than i Million products to offer, growing at a very fast. Exclusive offers a diverse assessment in categories for our consumers
            </p>
            </div>
            <div className="img-container">
                <img src="https://plus.unsplash.com/premium_photo-1683120690591-71680296eedc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A happy customer" />
            </div>
        </div>
        <div className="more-info">
        <div className="outside">
            <div className="img">
            <IoStorefrontOutline  className="store-icon"/>
            </div>
            <p className="amount">10.5k</p>
            <p className="amount-info">Sellers active at our site</p>
        </div>
     </div>
     </div>
    </>
  )
}

export default About