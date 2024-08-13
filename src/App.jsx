// import React from 'react'

import NavBar from "./components/NavBar"

import ProductTitle from './Components/ProductTitle'
import ProductImages from './Components/ProductImages'
import ProductStock from './Components/ProductStock'

function App() {
  return (
    
    <>
     <NavBar />
     <div>
        <ProductTitle/>
        <ProductImages/>
        <ProductStock/>
        
    </div>
    </>
  )
}

export default App