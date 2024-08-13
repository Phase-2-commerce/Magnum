import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './Component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
)
