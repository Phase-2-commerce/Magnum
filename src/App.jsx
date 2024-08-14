import React from 'react'
import NavBar from "./components/NavBar"
import ProductDetails from './components/ProductDetails'
import SignupForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'

function App() {
  return (
    
    <>
     <NavBar />
     <ProductDetails/>
     <SignupForm/>
     <LoginForm/>
    </>
  )
}

export default App