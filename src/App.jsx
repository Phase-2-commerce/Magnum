/** @format */
import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
//This a count-down Library snippet...DON'T EDIT!!!!!!


const Completionist = () => <span>Time&#39;s up!</span>;

// Renderer callback with conditionals
const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a completion message
		return <Completionist />;
	} else {
		// Render the countdown
		return (
			<div className='flex flex-row  relative left-[-20px]'>
				<div className='h-[50px] w-[46px] gap-[4px] absolute left-[20px]'>
					<div className='text-[12px]'>Days</div>
					<p className='text-[32px] leading-[30px] font-[700] tracking-[4%]'>
						{days}
					</p>
				</div>
				<div className='flex flex-col gap-[8px] w-[4px] h-[16px] absolute top-[26px] left-[63px]   '>
					<div className='w-[4px] h-[4px] bg-[#E07575]'></div>
					<div className='w-[4px] h-[4px] bg-[#E07575]'></div>
				</div>

				<div className='h-[50px] w-[42px] gap-[4px] absolute left-[84px]'>
					<div className='text-[12px]'>Hours</div>
					<p className='text-[32px] leading-[30px] font-[700] tracking-[4%]'>
						{hours}
					</p>
				</div>

				<div className='flex flex-col gap-[8px] w-[4px] h-[16px] absolute top-[26px] left-[143px]   '>
					<div className='w-[4px] h-[4px] bg-[#E07575]'></div>
					<div className='w-[4px] h-[4px] bg-[#E07575]'></div>
				</div>

				<div className='h-[50px] w-[49px] gap-[4px] absolute left-[164px] '>
					<div className='text-[12px]'>Minutes</div>
					<p className='text-[32px] leading-[30px] font-[700] tracking-[4%]'>
						{minutes}
					</p>
				</div>

				<div className='flex flex-col gap-[8px] w-[4px] h-[16px] absolute top-[26px] left-[230px]  '>
					<div className='w-[4px] h-[4px] bg-[#E07575]'></div>
					<div className='w-[4px] h-[4px] bg-[#E07575]'></div>
				</div>

				<div className='h-[50px] w-[51px] gap-[4px] absolute left-[251px]'>
					<div className='text-[12px]'>Seconds</div>
					<p className='text-[32px] leading-[30px] font-[700] tracking-[4%]'>
						{seconds}
					</p>
				</div>
			</div>
		);
	}
};
// import React from 'react'
import NavBar from "./components/NavBar"
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

function App() {
  return (
    
    <>
     <NavBar />
     <ProductDetails/>
    </>
  )
}

export default App;
