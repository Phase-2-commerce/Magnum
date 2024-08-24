/** @format */

import { Link } from "react-router-dom";
import InputField from "./InputField";
const SignupForm = () => {
	return (
		<div className=' justify-center min-h-screen bg-gray-100 h-[100vh] mt-20 rounded-xl mb-20'>
			<div className='bg-white rounded-lg  shadow-lg flex flex-col md:flex-row h-[100vh] w-full max-w-8xl gap-20'>
				<div
					className='md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center'
					style={{
						backgroundImage:
							"url('https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MK08g7XGjjrNP3Oh-hitfgj7hQwjp42MHi-lwFMRqN9gQI2-~Qwwf6qlZQD11gwKQHpLv7D57IIsKVZREcHhj13eD93Y7mptJFdXCdMwzddzc3RVclSQUybDV6jfGoaUXw~abMcPVmfdRRT~k0xcaxZH0tCBB9CJLpV5Xi2SsCOhbyJcHDgiQM9rKnjRWoYlX1c8vpIHRT9~0hCFiE7ojrdq8gIIWaEjS1o4BCDARtu64fw4sgh4PTkSGad9r~COgh1ZuSxhTgyvOXNKjRlV7MOAOux2mqtchpDkpKJJXNg1pdQPbyya2bDPzALxvC3uV-zWfXALgi4ipBZ1gzIyUQ__')",
					}}></div>

				{/* Right Side Form */}
				<div className=' p-8 flex flex-col items justify-center  gap-[48px]'>
					<div>
						<h2 className='text-2xl font-bold mb-6 text-center'>
						Sign Up
						</h2>
						<p className='text-black font-semibold'>
							Create your account
						</p>
					</div>

					<form className='w-[530px] h-[371px] flex flex-col '>
						<div className='flex flex-col gap-6'>
							<InputField type='text' placeholder='Name' />
							<InputField type='email' placeholder='Email' />
							<InputField
								type='password'
								placeholder='Password'
							/>
						</div>
<div></div>
						<div className='flex flex-col items-center= w-full mt-6'>
							{/* Sign Up Button */}
							<div className='mb-4 w-full'>
								<button
									type='submit'
									className='w-full bg-[#DB4444] text-white py-2 rounded hover:bg-red-600 transition duration-300'>
									Sign Up
								</button>
							</div>

							{/* Continue with Google */}
							<div className='w-full'>
								<button className='w-full flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded hover:bg-gray-100 transition duration-300'>
									<img
										src='https://img.icons8.com/color/16/000000/google-logo.png'
										alt='Google'
										className='mr-2'
									/>
									Continue with Google
								</button>
							</div>
							<Link>
								<p className='text-[#aaa]'>
									Already have account?
									<span className='px-2 text-black font-semibold'>
										Login
									</span>
								</p>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default SignupForm;
